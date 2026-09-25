/*
 * app.js: connects the web page to the rules in inventory.js.
 *
 * It draws the seed table on the page. The rules themselves (for example,
 * what counts as "low stock") live in inventory.js.
 */

/** The seeds currently shown in the app. Sprint 1: just the example seeds. */
let seeds = EXAMPLE_SEEDS.map((seed) => ({ ...seed }));

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

    row.append(nameCell, varietyCell, quantityCell, statusCell);
    rows.appendChild(row);
  }
}

renderSeeds();
