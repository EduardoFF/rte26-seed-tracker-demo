# Step 8: Automated tests

## Prompt

> **Human:** Write automated tests for the important business rules and acceptance criteria in `SPEC.md`, especially using and restocking seeds and making sure quantities never become negative. Run them and show us the result. If a test fails, fix the code, not the spec.

---

## Agent output

### 1. Reasoning

> I'll use Node's built-in test runner (`node --test`), as `AGENTS.md` asks. It is open source, already installed in Codespaces, and needs no extra packages.
>
> The rules live in `inventory.js`, which has no web page code, so I can test them directly. I only need to add a few lines at the end of `inventory.js` so Node can load its functions. The browser ignores those lines.
>
> I'll write **one test per acceptance criterion** (AC1–AC9) and name each test after it, so every failure points to a line in `SPEC.md`. For the stock status I'll test the **boundaries**: 0, 1, 5 and 6 packets, because bugs usually hide at the edges. AC10 (data survives a reload) needs a real browser, so I'll leave it as a manual check.

### 2. Files created

- `tests/inventory.test.js`: 18 tests
- `package.json`: so `npm test` runs the tests (no dependencies)
- `inventory.js`: exports the functions for the tests

### 3. First test run: 1 failure ❌

```
$ npm test

✔ AC1: there are example seeds to start with
✔ AC2: using 3 packets of a seed with 10 leaves 7
✔ AC3: restocking 4 packets of a seed with 2 leaves 6
✔ AC4: using more packets than available is refused
✔ AC5: using exactly all packets reaches 0, not below
✔ AC6: amount 0 is refused for use and restock
✔ AC6: amount -3 is refused for use and restock
✔ AC6: amount 2.5 is refused for use and restock
✔ AC6: amount NaN is refused for use and restock
✔ AC7: 0 packets is 'Out of stock'
✖ AC7: 5 packets is 'Low stock' (5 counts as low, rule R4)
  AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:
  + actual - expected

  + 'In stock'
  - 'Low stock'
      at TestContext.<anonymous> (tests/inventory.test.js:73:10)

✔ AC7: 1 packet is 'Low stock'
✔ AC7: 6 packets is 'In stock'
✔ AC8: a seed with an empty name (or only spaces) is refused
✔ AC9: a duplicate seed is refused, ignoring case and spaces
✔ R6: same name with a different variety is allowed
✔ R7: a new seed can start with 0 packets
✔ R1: a new seed cannot start with a negative or decimal quantity
ℹ tests 18
ℹ pass 17
ℹ fail 1
```

### 4. Reasoning about the failure

> The test says a seed with **5** packets should be "Low stock", but the code returns "In stock".
>
> Who is right? `SPEC.md` rule R4 says: *"A seed is low stock when it has **5 or fewer** packets (5 counts as low)."* In the brainstorm the humans said it explicitly: *"5 is low. 5 or less."* So **the test is right and the code is wrong**.
>
> The bug is in `getStockStatus()` in `inventory.js`: it uses `<` ("less than") where it should use `<=` ("less than or equal"). This is a classic **off-by-one error**. You can also see it in the app: *Tomato San Marzano* has 5 packets but shows "In stock".
>
> Following `AGENTS.md`, I'll **fix the code** and won't touch the spec or the test.

### 5. The fix (one character)

```diff
 function getStockStatus(quantity) {
   if (quantity === 0) {
     return "Out of stock";
   }
-  if (quantity < LOW_STOCK_LIMIT) {
+  if (quantity <= LOW_STOCK_LIMIT) {
     return "Low stock";
   }
   return "In stock";
 }
```

### 6. Second test run: all passing ✅

```
$ npm test

✔ AC1: there are example seeds to start with
✔ AC2: using 3 packets of a seed with 10 leaves 7
✔ AC3: restocking 4 packets of a seed with 2 leaves 6
✔ AC4: using more packets than available is refused
✔ AC5: using exactly all packets reaches 0, not below
✔ AC6: amount 0 is refused for use and restock
✔ AC6: amount -3 is refused for use and restock
✔ AC6: amount 2.5 is refused for use and restock
✔ AC6: amount NaN is refused for use and restock
✔ AC7: 0 packets is 'Out of stock'
✔ AC7: 5 packets is 'Low stock' (5 counts as low, rule R4)
✔ AC7: 1 packet is 'Low stock'
✔ AC7: 6 packets is 'In stock'
✔ AC8: a seed with an empty name (or only spaces) is refused
✔ AC9: a duplicate seed is refused, ignoring case and spaces
✔ R6: same name with a different variety is allowed
✔ R7: a new seed can start with 0 packets
✔ R1: a new seed cannot start with a negative or decimal quantity
ℹ tests 18
ℹ pass 18
ℹ fail 0
```

**Manual check for AC10:** reload the page after making changes. The data is still there.

---

## What to point out

- We clicked around the app in step 6 and **nobody noticed** that San Marzano (5 packets) said "In stock". The test caught it in milliseconds.
- The agent checked **the spec** to decide who was right: the test or the code.
- The fix was in the **code**. Changing the spec to "less than 5" would have made the test pass, but it's not what the garden asked for.
