/*
 * inventory.js: the business rules of the Seed Tracker.
 *
 * This file contains ONLY the rules from SPEC.md (stock status, quantities,
 * validation). It does not touch the web page. Keeping the rules separate
 * means we can test them automatically without opening a browser.
 */

/** A seed with this many packets or fewer is "low stock" (SPEC.md rule R4). */
const LOW_STOCK_LIMIT = 5;

/**
 * Example seeds shown the first time the app is opened (SPEC.md AC1).
 * We include one seed with exactly 5 packets and one with 0 packets so that
 * every stock status is visible right away.
 *
 * SDG 2 (target 2.5): tracking different varieties helps the garden keep
 * a diversity of seeds instead of growing only one kind.
 */
const EXAMPLE_SEEDS = [
  { id: "seed-1", name: "Tomato", variety: "Cherry", quantity: 12 },
  { id: "seed-2", name: "Tomato", variety: "San Marzano", quantity: 5 },
  { id: "seed-3", name: "Lettuce", variety: "Butterhead", quantity: 8 },
  { id: "seed-4", name: "Carrot", variety: "Nantes", quantity: 3 },
  { id: "seed-5", name: "Basil", variety: "", quantity: 0 },
  { id: "seed-6", name: "Sunflower", variety: "Giant", quantity: 20 },
  { id: "seed-7", name: "Bean", variety: "Runner", quantity: 6 },
];

/**
 * Works out the stock status of a seed (SPEC.md feature F5).
 *
 * SDG 12: warning early when seeds run low helps the garden buy only what
 * it needs, at the right time.
 *
 * @param {number} quantity - Number of packets we have.
 * @returns {string} "Out of stock", "Low stock" or "In stock".
 */
function getStockStatus(quantity) {
  if (quantity === 0) {
    return "Out of stock";
  }
  if (quantity <= LOW_STOCK_LIMIT) {
    return "Low stock";
  }
  return "In stock";
}

/**
 * Checks that an amount to use or restock is valid (SPEC.md rule R2):
 * a whole number of at least 1.
 *
 * @param {number} amount - The amount typed by the volunteer.
 * @returns {string|null} An error message, or null if the amount is valid.
 */
function checkAmount(amount) {
  if (!Number.isInteger(amount) || amount < 1) {
    return "Please enter a whole number of packets (1 or more).";
  }
  return null;
}

/**
 * Takes packets out of the inventory (SPEC.md feature F3).
 * The quantity can reach 0 but never go below it (rules R1 and R3).
 *
 * SDG 12: knowing exactly what we used helps avoid waste.
 *
 * @param {{name: string, variety: string, quantity: number}} seed - The seed to use.
 * @param {number} amount - How many packets to take.
 * @returns {{ok: boolean, quantity?: number, message: string}}
 *   ok: true with the new quantity, or ok: false with the reason it was refused.
 */
function useSeeds(seed, amount) {
  const error = checkAmount(amount);
  if (error) {
    return { ok: false, message: error };
  }
  if (amount > seed.quantity) {
    return {
      ok: false,
      message: `Not enough ${seed.name}: we only have ${seed.quantity} packet(s).`,
    };
  }
  const quantity = seed.quantity - amount;
  return { ok: true, quantity, message: `Used ${amount} packet(s) of ${seed.name}.` };
}

/**
 * Adds packets to the inventory (SPEC.md feature F4).
 *
 * @param {{name: string, variety: string, quantity: number}} seed - The seed to restock.
 * @param {number} amount - How many packets to add.
 * @returns {{ok: boolean, quantity?: number, message: string}}
 *   ok: true with the new quantity, or ok: false with the reason it was refused.
 */
function restockSeeds(seed, amount) {
  const error = checkAmount(amount);
  if (error) {
    return { ok: false, message: error };
  }
  const quantity = seed.quantity + amount;
  return { ok: true, quantity, message: `Added ${amount} packet(s) of ${seed.name}.` };
}

/**
 * Makes text easy to compare: removes spaces at the start/end and ignores
 * upper/lower case. So " Tomato " and "tomato" become the same.
 *
 * @param {string} text - Any text, for example a seed name.
 * @returns {string} The cleaned-up text in lower case.
 */
function normalize(text) {
  return (text || "").trim().toLowerCase();
}

/**
 * Checks whether a seed with this name and variety already exists
 * (SPEC.md rule R6). Case and extra spaces are ignored.
 *
 * @param {Array<{name: string, variety: string}>} seeds - The current inventory.
 * @param {string} name - Name of the new seed.
 * @param {string} variety - Variety of the new seed (can be empty).
 * @returns {boolean} true if it is a duplicate.
 */
function isDuplicate(seeds, name, variety) {
  return seeds.some(
    (seed) => normalize(seed.name) === normalize(name) && normalize(seed.variety) === normalize(variety)
  );
}

/**
 * Creates a new seed if it follows the rules (SPEC.md feature F2, rules R5–R7):
 * name required, no duplicates, starting quantity a whole number ≥ 0.
 *
 * SDG 2 (target 2.5): every new variety we track adds to the garden's seed diversity.
 *
 * @param {Array<{id: string, name: string, variety: string}>} seeds - The current inventory.
 * @param {string} name - Name typed by the volunteer.
 * @param {string} variety - Variety typed by the volunteer (optional).
 * @param {number} quantity - Starting number of packets.
 * @returns {{ok: boolean, seed?: object, message: string}}
 *   ok: true with the new seed, or ok: false with the reason it was refused.
 */
function createSeed(seeds, name, variety, quantity) {
  const cleanName = (name || "").trim();
  const cleanVariety = (variety || "").trim();

  if (cleanName === "") {
    return { ok: false, message: "Please enter a seed name." };
  }
  if (!Number.isInteger(quantity) || quantity < 0) {
    return { ok: false, message: "Starting packets must be a whole number (0 or more)." };
  }
  if (isDuplicate(seeds, cleanName, cleanVariety)) {
    return {
      ok: false,
      message: `${cleanName} ${cleanVariety} is already in the list. Use "Restock" on it instead.`,
    };
  }

  // Find an id that is not used yet, e.g. "seed-8".
  let number = seeds.length + 1;
  while (seeds.some((seed) => seed.id === `seed-${number}`)) {
    number++;
  }

  const seed = { id: `seed-${number}`, name: cleanName, variety: cleanVariety, quantity };
  return { ok: true, seed, message: `Added ${cleanName} to the inventory.` };
}

// Make the rules available to the automated tests (Node.js).
// In the browser `module` does not exist, so this part is skipped.
if (typeof module !== "undefined") {
  module.exports = {
    LOW_STOCK_LIMIT,
    EXAMPLE_SEEDS,
    getStockStatus,
    checkAmount,
    useSeeds,
    restockSeeds,
    normalize,
    isDuplicate,
    createSeed,
  };
}
