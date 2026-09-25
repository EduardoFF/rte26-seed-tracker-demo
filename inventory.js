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
  if (quantity < LOW_STOCK_LIMIT) {
    return "Low stock";
  }
  return "In stock";
}
