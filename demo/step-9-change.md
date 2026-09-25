# Step 9: A requirement changes: search

The garden now has so many seeds that volunteers want a **search**. In `SPEC.md` v1.0, search was listed as **out of scope**.

## Prompt 1: find the ambiguities first (no code!)

> **Human:** The garden now wants a search feature. **Don't write code yet.** First, list what is unclear or ambiguous about "add a search", and ask us to decide.

## Agent output

> "Add a search" sounds simple, but it hides several decisions. Here's what I need you to decide:
>
> 1. **Partial or exact match?** Should "tom" find "Tomato", or only the full word "tomato"?
> 2. **Upper/lower case?** Should "TOMATO" find "Tomato"?
> 3. **Which fields?** Only the name, or the variety too (e.g. "cherry" finds "Tomato / Cherry")?
> 4. **Several words?** Should "tomato cherry" find "Tomato / Cherry"? (This is harder: we'd need to split the words.)
> 5. **Accents?** Should "jalapeno" find "Jalapeño"?
> 6. **Nothing found?** Show an empty list, or a message?
> 7. **Empty search box?** Show all seeds, or none?
> 8. **When does it search?** While typing, or after pressing a "Search" button?
> 9. **Is the search remembered?** After a reload, should the search text still be there?
> 10. **Filter by status?** Should we also have "show only low-stock seeds"? (That's a different feature. Maybe later?)

## Human decisions

> **Human:**
> 1. Partial. Typing "tom" should already find tomatoes.
> 2. Ignore case, of course.
> 3. Name and variety. Sometimes we only remember the variety.
> 4. Hmm… just keep it simple, one piece of text is fine.
> 5. Don't overthink it. Not now.
> 6. A message, otherwise people think the app is broken.
> 7. All seeds.
> 8. While typing, it feels more modern.
> 9. No, start fresh every time.
> 10. Good idea but not now. Put it in the "out of scope" list so we don't forget.

## Prompt 2: update the spec first

> **Human:** Update `SPEC.md` with these decisions: features, rules, edge cases, acceptance criteria and out of scope. Add a change log. Don't change the code yet.

### Output: changes to `SPEC.md` (v1.0 → v1.1)

```diff
-_Version 1.0_
+_Version 1.1: added search (see Change log at the end)_

 ## 4. Features
+- **F6. Search seeds** _(added in v1.1)_: type in a search box to show only the seeds that match. The list updates while typing.

 ## 5. Business rules
+- **R8.** _(v1.1)_ Search rules:
+  - A seed matches if the search text appears **anywhere** in its **name or its variety** (partial match: "tom" finds "Tomato", "cherry" finds "Tomato / Cherry").
+  - Search **ignores upper/lower case** and spaces at the start and end.
+  - The search text is treated as **one piece**: "tomato cherry" does not find "Tomato / Cherry" (a known limitation, accepted for now).
+  - An **empty** search box shows **all** seeds.
+  - If nothing matches, the app shows a "No seeds match" message.
+  - Searching **never changes** the data. Use and Restock still work on the seeds that are shown.
+  - The search text is **not saved**. After a reload the full list is shown.

 ## 6. Edge cases
+| Search "TOM"                                   | Shows both tomatoes.                                     |
+| Search "  basil  "                             | Shows Basil (spaces ignored).                            |
+| Search "xyz"                                   | Empty list with a "No seeds match" message.              |
+| Clear the search box                           | All seeds are shown again.                               |

 ## 7. Acceptance criteria
+- **AC11.** _(v1.1)_ Searching "tom" shows "Tomato / Cherry" and "Tomato / San Marzano" and no other seeds.
+- **AC12.** _(v1.1)_ Search ignores case: "TOMATO" and "tomato" give the same result.
+- **AC13.** _(v1.1)_ Search also looks at the variety: "marzano" shows "Tomato / San Marzano".
+- **AC14.** _(v1.1)_ An empty search shows all seeds. A search with no match shows no seeds and a "No seeds match" message.

 ## 8. Out of scope (for now)
-- Searching or filtering seeds
+- Filtering by stock status (e.g. "show only low stock") _(v1.1: suggested, postponed)_
+- Search that ignores accents ("jalapeno" finding "Jalapeño") or matches several words separately _(v1.1)_

+## Change log
+
+- **v1.1**: Added **search** (F6, R8, AC11–AC14). Search moved from "out of scope" to "in scope". Decisions: partial match, name and variety, case-insensitive, not saved. Filtering by status and accent-insensitive search stay out of scope.
+- **v1.0**: First version, agreed in the brainstorm.
```

## Prompt 3: now implement and test

> **Human:** The spec looks right. Now implement search following `SPEC.md` v1.1, add tests for AC11–AC14, and run all the tests.

### Agent output

> - `inventory.js`: new function `searchSeeds(seeds, searchText)`. It reuses the existing `normalize()` (from the duplicate check), so "ignore case and spaces" works the same way everywhere.
> - `index.html` / `app.js`: a 🔍 search box above the table. The table redraws on every key press and shows "No seeds match…" when empty.
> - `tests/inventory.test.js`: 7 new tests (AC11–AC14 and R8).
>
> ```
> $ npm test
> ...
> ✔ AC11: searching 'tom' finds both tomatoes and nothing else
> ✔ AC12: search ignores upper/lower case
> ✔ AC13: search also looks at the variety
> ✔ AC14: an empty search shows all seeds
> ✔ AC14: a search with no match finds no seeds
> ✔ R8: spaces around the search text are ignored
> ✔ R8: searching never changes the data
> ℹ tests 25
> ℹ pass 25
> ℹ fail 0
> ```
>
> All 18 old tests still pass, so the new feature didn't break anything.

## What to point out

- A one-line request ("add a search") turned into **10 questions**. If the agent had guessed, it would have made these decisions for us.
- The order: **ambiguities → decisions → spec → code → tests**.
- The **old tests** protect us: they prove the new feature didn't break the old rules.
- Ideas we postponed (filter by status) are **written down**, not forgotten.
