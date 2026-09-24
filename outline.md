# Activity: Build a Seed Tracker with an AI Coding Agent

In this **30-minute hands-on activity**, participants will use **GitHub Codespaces and GitHub Copilot Agent mode** to build a simple web application from scratch. The activity is designed for high-school students and participants with little or no programming experience. Rather than focusing on programming syntax, the activity introduces a practical workflow for developing software with an AI coding agent.

Participants begin with an almost empty GitHub repository and a deliberately vague idea: **build an application that helps a community garden keep track of its seed inventory**. Instead of immediately asking Copilot to generate code, participants first use the agent to **brainstorm and refine the requirements**. Copilot asks questions about the intended users, the information that should be tracked, required features, business rules, and edge cases. The group makes the key product decisions.

Based on this discussion, Copilot creates a `SPEC.md` containing the agreed specification, including the application's purpose, users, data, features, business rules, edge cases, acceptance criteria, and features that are explicitly out of scope. For example, participants may decide that volunteers can add, use, and restock seeds; quantities can reach zero but never become negative; and seeds with five or fewer units should be identified as low stock.

Participants then create an `AGENTS.md` file containing persistent instructions for the coding agent, such as keeping the implementation simple, following the specification, avoiding unnecessary dependencies, and testing important business rules. This illustrates the distinction between **what the software should do (`SPEC.md`)** and **how the AI agent should work on the project (`AGENTS.md`)**.

Next, Copilot reads both files and proposes a short implementation plan. After participants review the plan, they authorize the agent to implement it. Copilot creates a simple HTML/CSS/JavaScript application, adds example seed data, implements the required interactions, and runs the application inside Codespaces. Participants then interact with the application and deliberately try to break it, particularly around inventory quantities.

The agent is subsequently asked to create and run automated tests for important acceptance criteria, such as increasing and decreasing inventory and preventing quantities from becoming negative. If a test fails, Copilot is instructed to fix the implementation rather than changing the specification simply to make the test pass.

The activity concludes with a small **requirements-change exercise**. Participants are told that the community garden now wants a search feature. Rather than immediately coding it, they first ask Copilot to identify ambiguities in the new requirement, clarify decisions such as partial and case-insensitive matching, update the specification, and only then modify and test the application.

## Workflow

**Idea → Brainstorm → Specification → Project Context → Plan → Build → Test → Change**

## Main Learning Objective

The main learning objective is to show that effective AI-assisted software development is more than asking an AI to generate code. Participants experience how humans can define requirements and make decisions while an AI coding agent helps plan, implement, test, and revise the software.