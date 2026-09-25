# Steps 1–3: Idea → Brainstorm → Specification

This is the conversation that produced `SPEC.md`. The **Human** answers are what someone with little programming experience might say. Notice that the agent asks and suggests, but **the humans decide**.

---

## Step 1: The idea (prompt)

> **Human:** We want to build an app that helps a community garden keep track of its seed inventory. Before writing any code, ask us questions (one topic at a time) so we can decide together what the app should do. Don't write code yet.

---

## Step 2: Brainstorm (Q&A)

**Agent:** Great, let's start with **who** will use it. Who are the people using the app, and do they need different permissions? For example, can everyone change the numbers, or only an organizer?

**Human:** It's the volunteers at the garden. Everyone should be able to do everything, we trust each other. We don't want passwords, it's too complicated.

**Agent:** Got it: one type of user (volunteer), no login. Next, **what information** should we keep about each seed? Some ideas: name, variety, quantity, where it's stored, planting season, expiry date, photo.

**Human:** Name and how many we have. Maybe the variety too, because we have like three kinds of tomatoes. The other stuff sounds cool but let's not overdo it.

**Agent:** Good choice. How do you **count** seeds? Individual seeds, packets, grams?

**Human:** Packets. Nobody is going to count individual seeds 😄

**Agent:** Packets, whole numbers only. Now, **what should volunteers be able to do**? Here's a starting list, tell me what to keep:
1. See the list of all seeds and how many packets we have
2. Add a new kind of seed
3. Take ("use") packets when planting
4. Add packets when we get more ("restock")
5. Delete a seed type
6. Search for a seed
7. See a history of who took what

**Human:** 1 to 4 for sure. Delete... hmm, if we run out we can just leave it at zero, right? Search would be nice but we only have like 20 kinds of seeds, so not now. History is too much.

**Agent:** So features 1–4 are in, and delete, search and history are out for now. Next, the **rules**. What should happen if someone tries to use more packets than we have? For example, 3 packets left and they take 5.

**Human:** That shouldn't be possible. You can't take seeds that aren't there. Show a message like "we only have 3".

**Agent:** So quantities can reach **zero but never go negative**. What about typing 0, a negative number, or 2.5 packets?

**Human:** Oh, I didn't think about that. No, only whole numbers, and at least 1. Otherwise it's a mistake and the app should say so.

**Agent:** Would it help if the app warned you when a seed is **running low**? If yes, what counts as "low"?

**Human:** Yes! That's actually the main reason we want this. Every spring we find out too late that we're out of something. Let's say… 5 packets or less is low.

**Agent:** To check: is exactly 5 "low", or does it only start at 4?

**Human:** 5 is low. "5 or less."

**Agent:** And at 0, should it look different from "low"?

**Human:** Yeah, say "Out of stock" so it's obvious.

**Agent:** What if someone adds a seed that **already exists**, like a second "Tomato – Cherry"?

**Human:** Then we'd have two lines for the same thing, which is confusing. Don't allow it, tell them to restock the existing one instead. And "tomato" and "Tomato" is the same thing.

**Agent:** Can the name be empty? Can a new seed start at 0 packets?

**Human:** Name can't be empty, obviously. Starting at 0 is fine. Maybe we want to remember we need to buy it.

**Agent:** Should the data **still be there** when someone closes the browser and comes back? Should everyone see the same data on different phones?

**Human:** It definitely has to remember. Different phones would be nice, but we have one tablet in the garden shed, so it's fine if it's just on that one.

**Agent:** Great, then we can save data in the browser itself, with no server or database needed. Last question: should the app start **empty** or with some **example seeds**?

**Human:** Put some examples so we can try it right away.

---

## Step 3: Write the spec (prompt)

> **Human:** Great. Write everything we decided into a `SPEC.md` file. Include: purpose, users, data, features, business rules, edge cases, acceptance criteria that we can test, and a list of what is out of scope. Don't write code.

The result is [`SPEC.md`](../SPEC.md).
