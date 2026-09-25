/*
 * app.js: connects the web page to the rules in inventory.js.
 *
 * It draws the seed table, reacts to button clicks, and saves the seeds in
 * the browser (localStorage). The rules themselves (for example, "never go
 * below zero") live in inventory.js.
 */

/** The name under which we save the seeds in the browser. */
const STORAGE_KEY = "seed-tracker-seeds";

/** The seeds currently shown in the app. */
let seeds = loadSeeds();

/**
 * Loads the saved seeds from the browser (SPEC.md AC10).
 * The first time (nothing saved yet) we start with the example seeds (AC1).
 *
 * @returns {Array<{id: string, name: string, variety: string, quantity: number}>}
 */
function loadSeeds() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    return JSON.parse(saved);
  }
  return EXAMPLE_SEEDS.map((seed) => ({ ...seed }));
}

/** Saves the current seeds in the browser so they survive a page reload. */
function saveSeeds() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(seeds));
}

/**
 * Shows a message above the table.
 *
 * @param {string} text - The message to show.
 * @param {boolean} isError - true for a red error message, false for a blue info message.
 */
function showMessage(text, isError) {
  const box = document.getElementById("message");
  box.textContent = text;
  box.className = isError ? "message error" : "message info";
}

/**
 * Turns a stock status into a CSS class name, e.g. "Low stock" -> "status-low-stock".
 *
 * @param {string} status - A status returned by getStockStatus().
 * @returns {string} The CSS class used to color the status badge.
 */
function statusClass(status) {
  return "status-" + status.toLowerCase().replace(/ /g, "-");
}

/**
 * Runs "use" or "restock" for one seed, then saves and redraws the table.
 *
 * @param {string} seedId - The id of the seed.
 * @param {string} action - "use" or "restock".
 * @param {string} amountText - What the volunteer typed in the amount box.
 */
function changeQuantity(seedId, action, amountText) {
  const seed = seeds.find((s) => s.id === seedId);
  // Empty text becomes NaN, so it is refused like any other invalid amount.
  const amount = amountText.trim() === "" ? NaN : Number(amountText);
  const result = action === "use" ? useSeeds(seed, amount) : restockSeeds(seed, amount);

  if (result.ok) {
    seed.quantity = result.quantity;
    saveSeeds();
    renderSeeds();
  }
  showMessage(result.message, !result.ok);
}

/**
 * Creates the "amount + Use + Restock" controls for one row.
 *
 * @param {{id: string, name: string}} seed - The seed this row is for.
 * @returns {HTMLElement} The cell with the controls.
 */
function createActionsCell(seed) {
  const cell = document.createElement("td");
  cell.className = "actions";

  const amountInput = document.createElement("input");
  amountInput.type = "number";
  amountInput.value = "1";
  amountInput.setAttribute("aria-label", `Amount of ${seed.name}`);

  const useButton = document.createElement("button");
  useButton.textContent = "Use";
  useButton.addEventListener("click", () => changeQuantity(seed.id, "use", amountInput.value));

  const restockButton = document.createElement("button");
  restockButton.textContent = "Restock";
  restockButton.className = "secondary";
  restockButton.addEventListener("click", () => changeQuantity(seed.id, "restock", amountInput.value));

  cell.append(amountInput, useButton, restockButton);
  return cell;
}

/**
 * Draws one table row per seed (SPEC.md feature F1).
 * We build the text with textContent (not innerHTML) so that seed names
 * typed by users can never be interpreted as HTML.
 */
function renderSeeds() {
  const rows = document.getElementById("seed-rows");
  rows.innerHTML = "";

  for (const seed of seeds) {
    const row = document.createElement("tr");
    const status = getStockStatus(seed.quantity);

    const nameCell = document.createElement("td");
    nameCell.textContent = seed.name;

    const varietyCell = document.createElement("td");
    varietyCell.textContent = seed.variety || "—";

    const quantityCell = document.createElement("td");
    quantityCell.textContent = seed.quantity;
    quantityCell.className = "number";

    const statusCell = document.createElement("td");
    const badge = document.createElement("span");
    badge.textContent = status;
    badge.className = "badge " + statusClass(status);
    statusCell.appendChild(badge);

    row.append(nameCell, varietyCell, quantityCell, statusCell, createActionsCell(seed));
    rows.appendChild(row);
  }
}

renderSeeds();
