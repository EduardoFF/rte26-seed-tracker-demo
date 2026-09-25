# Seed Tracker: Specification

_Version 1.0_

## 1. Purpose

Help the volunteers of a community garden know **which seeds they have and how many packets are left**, so they can restock in time instead of finding out too late at planting time.

## 2. Users

- **Volunteer**: anyone helping at the garden. All volunteers can do everything.
- There is **no login** and there are no passwords.
- The app is used on **one device** (the tablet in the garden shed).

## 3. Data

Each seed in the inventory has:

| Field      | Example    | Required | Notes                                      |
|------------|------------|----------|--------------------------------------------|
| `name`     | `Tomato`   | Yes      | Cannot be empty.                           |
| `variety`  | `Cherry`   | No       | Can be empty.                              |
| `quantity` | `12`       | Yes      | Number of **packets**. Whole number ≥ 0.   |

- Data is **saved in the browser**, so it is still there after closing and reopening the app.
- On first use, the app starts with a few **example seeds**.

## 4. Features

- **F1. View inventory**: see a list of all seeds with name, variety, number of packets and stock status.
- **F2. Add a seed**: add a new kind of seed with a name, an optional variety and a starting number of packets.
- **F3. Use seeds**: take a number of packets out of the inventory (for example, when planting).
- **F4. Restock seeds**: add a number of packets to an existing seed.
- **F5. Stock status**: every seed shows one of these statuses:
  - **Out of stock** when quantity is 0
  - **Low stock** when quantity is 1–5
  - **In stock** when quantity is 6 or more

## 5. Business rules

- **R1.** A quantity is always a **whole number** and can **never be negative**. It can be 0.
- **R2.** The amount used or restocked must be a **whole number of at least 1**.
- **R3.** A volunteer **cannot use more packets than are available**. The app shows a message and nothing changes.
- **R4.** A seed is **low stock** when it has **5 or fewer** packets (5 counts as low).
- **R5.** A seed **name cannot be empty** (spaces only counts as empty).
- **R6.** Two seeds with the **same name and variety** are not allowed. The comparison **ignores upper/lower case** and extra spaces at the start and end. The app suggests restocking the existing seed instead.
- **R7.** A new seed can start with **0 packets** (to remember we need to buy it).

## 6. Edge cases

| Situation                                      | Expected behaviour                                      |
|------------------------------------------------|---------------------------------------------------------|
| Use 5 packets when there are exactly 5         | Allowed. Quantity becomes 0, status "Out of stock".     |
| Use 6 packets when there are 5                 | Refused with a message. Quantity stays 5.               |
| Use or restock 0, a negative number, or `2.5`  | Refused with a message. Nothing changes.                |
| Use or restock with the field left empty       | Refused with a message. Nothing changes.                |
| Add "tomato / cherry" when "Tomato / Cherry" exists | Refused as a duplicate.                            |
| Add "Tomato" with no variety when "Tomato / Cherry" exists | Allowed (different variety).                  |
| Add a seed with name "   "                     | Refused: name is required.                              |
| Close the browser and open it again            | All seeds and quantities are still there.               |

## 7. Acceptance criteria

- **AC1.** Opening the app for the first time shows a list of example seeds.
- **AC2.** Using 3 packets of a seed with 10 packets leaves 7 packets.
- **AC3.** Restocking 4 packets of a seed with 2 packets leaves 6 packets.
- **AC4.** Trying to use more packets than available shows a message and does not change the quantity.
- **AC5.** A quantity never becomes negative.
- **AC6.** Amounts of 0, negative numbers and decimals are refused for both use and restock.
- **AC7.** A seed with 5 packets shows "Low stock", a seed with 6 packets shows "In stock", and a seed with 0 packets shows "Out of stock".
- **AC8.** Adding a seed with an empty name is refused.
- **AC9.** Adding a duplicate seed (same name and variety, ignoring case) is refused.
- **AC10.** After reloading the page, all changes are still there.

## 8. Out of scope (for now)

- Login, passwords, or different user roles
- Sharing data between several devices, online database or server
- Deleting seeds (a seed can stay at 0 instead)
- Searching or filtering seeds
- History of who used or restocked what
- Storage location, planting season, expiry dates, photos
