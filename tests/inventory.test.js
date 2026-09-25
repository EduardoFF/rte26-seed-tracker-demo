/*
 * Automated tests for the business rules in inventory.js.
 * Each test is named after the acceptance criterion (AC) or rule (R) in SPEC.md it checks.
 *
 * Run them with:  npm test   (or: node --test tests/)
 */

const { test } = require("node:test");
const assert = require("node:assert/strict");
const {
  EXAMPLE_SEEDS,
  getStockStatus,
  useSeeds,
  restockSeeds,
  createSeed,
  searchSeeds,
} = require("../inventory.js");

/** Small helper: a seed with the given number of packets. */
function seedWith(quantity) {
  return { id: "seed-test", name: "Tomato", variety: "Cherry", quantity };
}

// ---------- AC1: example data ----------

test("AC1: there are example seeds to start with", () => {
  assert.ok(EXAMPLE_SEEDS.length > 0);
});

// ---------- AC2 / AC3: use and restock ----------

test("AC2: using 3 packets of a seed with 10 leaves 7", () => {
  const result = useSeeds(seedWith(10), 3);
  assert.equal(result.ok, true);
  assert.equal(result.quantity, 7);
});

test("AC3: restocking 4 packets of a seed with 2 leaves 6", () => {
  const result = restockSeeds(seedWith(2), 4);
  assert.equal(result.ok, true);
  assert.equal(result.quantity, 6);
});

// ---------- AC4 / AC5: never negative ----------

test("AC4: using more packets than available is refused", () => {
  const result = useSeeds(seedWith(5), 6);
  assert.equal(result.ok, false);
  assert.match(result.message, /only have 5/);
});

test("AC5: using exactly all packets reaches 0, not below", () => {
  const result = useSeeds(seedWith(5), 5);
  assert.equal(result.ok, true);
  assert.equal(result.quantity, 0);
});

// ---------- AC6: invalid amounts ----------

for (const badAmount of [0, -3, 2.5, NaN]) {
  test(`AC6: amount ${badAmount} is refused for use and restock`, () => {
    assert.equal(useSeeds(seedWith(10), badAmount).ok, false);
    assert.equal(restockSeeds(seedWith(10), badAmount).ok, false);
  });
}

// ---------- AC7: stock status ----------

test("AC7: 0 packets is 'Out of stock'", () => {
  assert.equal(getStockStatus(0), "Out of stock");
});

test("AC7: 5 packets is 'Low stock' (5 counts as low, rule R4)", () => {
  assert.equal(getStockStatus(5), "Low stock");
});

test("AC7: 1 packet is 'Low stock'", () => {
  assert.equal(getStockStatus(1), "Low stock");
});

test("AC7: 6 packets is 'In stock'", () => {
  assert.equal(getStockStatus(6), "In stock");
});

// ---------- AC8 / AC9 / R7: adding seeds ----------

test("AC8: a seed with an empty name (or only spaces) is refused", () => {
  assert.equal(createSeed(EXAMPLE_SEEDS, "", "", 3).ok, false);
  assert.equal(createSeed(EXAMPLE_SEEDS, "   ", "", 3).ok, false);
});

test("AC9: a duplicate seed is refused, ignoring case and spaces", () => {
  // "Tomato / Cherry" is in the example data.
  const result = createSeed(EXAMPLE_SEEDS, " tomato ", "CHERRY", 3);
  assert.equal(result.ok, false);
});

test("R6: same name with a different variety is allowed", () => {
  const result = createSeed(EXAMPLE_SEEDS, "Tomato", "", 3);
  assert.equal(result.ok, true);
});

test("R7: a new seed can start with 0 packets", () => {
  const result = createSeed(EXAMPLE_SEEDS, "Pepper", "Jalapeño", 0);
  assert.equal(result.ok, true);
  assert.equal(result.seed.quantity, 0);
});

test("R1: a new seed cannot start with a negative or decimal quantity", () => {
  assert.equal(createSeed(EXAMPLE_SEEDS, "Pepper", "", -1).ok, false);
  assert.equal(createSeed(EXAMPLE_SEEDS, "Pepper", "", 1.5).ok, false);
});

// ---------- AC11–AC14: search (added in SPEC v1.1) ----------

/** Helper: the "name / variety" of each seed found, to compare easily. */
function found(searchText) {
  return searchSeeds(EXAMPLE_SEEDS, searchText).map((s) => `${s.name} / ${s.variety}`);
}

test("AC11: searching 'tom' finds both tomatoes and nothing else", () => {
  assert.deepEqual(found("tom"), ["Tomato / Cherry", "Tomato / San Marzano"]);
});

test("AC12: search ignores upper/lower case", () => {
  assert.deepEqual(found("TOMATO"), found("tomato"));
});

test("AC13: search also looks at the variety", () => {
  assert.deepEqual(found("marzano"), ["Tomato / San Marzano"]);
});

test("AC14: an empty search shows all seeds", () => {
  assert.equal(found("").length, EXAMPLE_SEEDS.length);
  assert.equal(found("   ").length, EXAMPLE_SEEDS.length);
});

test("AC14: a search with no match finds no seeds", () => {
  assert.deepEqual(found("xyz"), []);
});

test("R8: spaces around the search text are ignored", () => {
  assert.deepEqual(found("  basil  "), ["Basil / "]);
});

test("R8: searching never changes the data", () => {
  const before = JSON.stringify(EXAMPLE_SEEDS);
  searchSeeds(EXAMPLE_SEEDS, "tom");
  assert.equal(JSON.stringify(EXAMPLE_SEEDS), before);
});
