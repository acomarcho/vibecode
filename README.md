# Vibecoding Prompts

A collection of structured prompts for AI-powered development workflows. Use these prompts with coding agents like Cursor, Claude Code, or opencode to systematically build features from idea to implementation.


## 🏃‍♂️ Getting Started

To add the prompts to your repository, run:

`npx @acomarcho/vibecode`

## 🚀 Quick Start

1. **Create a PRD** - Define your feature requirements
2. **Break down tasks** - Convert PRD into actionable tasks
3. **Execute tasks** - Implement each task systematically

---

## 1. PRD Creator

**Purpose**: Create a comprehensive Product Requirements Document by exploring your codebase and defining feature specifications.

### How to Use

Copy and paste this prompt into your coding agent:

```
Use @prompts/prd-creator.md to create a PRD. What I want is to:
1. <describe your primary requirement>
2. <describe your secondary requirement>
3. <describe any additional requirements>
```

### Workflow

1. **Initial PRD Creation**: The agent will explore your codebase and create an initial PRD with open questions
2. **Answer Open Questions**: Review the generated PRD and answer all open questions
3. **Iterate**: Continue refining until you're satisfied with the PRD
4. **Final PRD**: The agent will create a final PRD file in `@tasks/<date>-<feature-name>.md`

---

## 2. Task Breakdown

**Purpose**: Convert a completed PRD into specific, actionable implementation tasks.

### How to Use

Reset your context, then copy and paste this prompt:

```
Use @prompts/task-breakdown.md to implement @tasks/<prd-name>.md.
```

### Workflow

1. **Reset Context**: Start fresh to avoid confusion
2. **Task Generation**: The agent will read the PRD and break it down into specific tasks
3. **Review Tasks**: Check that all requirements are covered and tasks are properly scoped
4. **Iterate**: Refine the task breakdown until you're satisfied

---

## 3. Task Executor

**Purpose**: Implement specific tasks from the task breakdown, one at a time.

### How to Use

**IMPORTANT**: Reset context FOR EACH TASK EXECUTION.

```
Use @prompts/task-executor.md to implement ONLY task x up to task y from @tasks/<prd-name>.md.
```

### Workflow

1. **Reset Context**: Always start fresh for each task execution
2. **Specify Task Range**: Clearly define which tasks to implement (e.g., "task 1 up to task 3")
3. **Implementation**: The agent will implement the specified tasks only
4. **Verify**: Check that the implementation matches the task requirements
5. **Repeat**: Move to the next task range with a fresh context

---

## 📁 File Structure

```
vibecode/
├── prompts/
│   ├── prd-creator.md      # Creates PRDs from requirements
│   ├── task-breakdown.md   # Breaks PRDs into tasks
│   └── task-executor.md    # Implements specific tasks
├── tasks/                  # Generated PRDs and task breakdowns
└── README.md              # This file
```

---

## 💡 Best Practices

- **Always reset context** when moving between different prompt types
- **Be specific** in your requirements for better PRD quality
- **Review thoroughly** at each stage before proceeding
- **Iterate** until you're satisfied with each output
- **Follow the exact prompt format** for best results

---

## 🔄 Complete Workflow Example

1. **Define Feature**: `Use @prompts/prd-creator.md to create a PRD. What I want is to: 1. Add user authentication, 2. Create login/signup forms, 3. Add session management`

2. **Break Down Tasks**: `Use @prompts/task-breakdown.md to implement @tasks/2025-10-11-user-authentication.md.`

3. **Execute Tasks**:
   - `Use @prompts/task-executor.md to implement ONLY task 1 up to task 2 from @tasks/2025-10-11-user-authentication.md.`
   - `Use @prompts/task-executor.md to implement ONLY task 3 up to task 4 from @tasks/2025-10-11-user-authentication.md.`

Repeat until all tasks are complete!

---
