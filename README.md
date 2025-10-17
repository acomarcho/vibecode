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

## 4. Chain-of-Thought Planners

**Purpose**: Systematic planning tools that help you think through problems before implementation. Use these for general planning tasks, debugging, or when you need to explore multiple solution approaches.

### 4.1 Complete CoT Planner

**Best for**: Complex features, architectural decisions, or situations with multiple valid approaches.

#### How to Use

```
Use @prompts/complete-cot-planner.md to plan <describe what you want to accomplish>
```

#### What It Does

Guides the agent through an 8-step comprehensive planning process:
1. **Analyze Current State** - Deep dive into existing implementation
2. **Define Target State** - Clarify goals and success criteria
3. **Identify the Gap** - Determine what's missing or needs change
4. **Surface Constraints** - Technical, business, and quality limitations
5. **Explore Approaches** - Generate 2-3 alternative strategies
6. **Evaluate Trade-offs** - Compare approaches across key criteria
7. **Select Strategy** - Choose best approach with explicit reasoning
8. **Outline Action Plan** - Define implementation phases

#### When to Use

- Starting a new feature or significant change
- Multiple possible implementation approaches exist
- Working with unfamiliar or complex systems
- Need to justify technical decisions to others
- Changes affect multiple components or systems

---

### 4.2 Quick CoT Planner

**Best for**: Small features, bug fixes, refactoring, or straightforward changes.

#### How to Use

```
Use @prompts/quick-cot-planner.md to plan <describe what you want to accomplish>
```

#### What It Does

Streamlined 3-step planning process:
1. **Gather Context** - Read relevant files and understand current state (mandatory)
2. **Define Changes** - Identify what needs to change and the straightforward approach
3. **Action Steps** - Outline implementation sequence with verification

#### When to Use

- Small feature additions with clear requirements
- Bug fixes with identifiable root causes
- Refactoring with an obvious approach
- Updates to existing functionality (not new architectures)
- Changes affecting 1-3 files or a single module

#### When to Escalate

Switch to complete-cot-planner if you discover:
- Multiple valid approaches with unclear trade-offs
- Changes affecting 4+ files or multiple modules
- Significant architectural decisions required
- High risk of breaking existing functionality

---

## 📁 File Structure

```
vibecode/
├── prompts/
│   ├── prd-creator.md           # Creates PRDs from requirements
│   ├── task-breakdown.md        # Breaks PRDs into tasks
│   ├── task-executor.md         # Implements specific tasks
│   ├── complete-cot-planner.md  # Comprehensive 8-step planning
│   └── quick-cot-planner.md     # Streamlined 3-step planning
├── tasks/                       # Generated PRDs and task breakdowns
└── README.md                   # This file
```

---

## 💡 Best Practices

- **Always reset context** when moving between different prompt types
- **Be specific** in your requirements for better PRD quality
- **Review thoroughly** at each stage before proceeding
- **Iterate** until you're satisfied with each output
- **Follow the exact prompt format** for best results
- **Use CoT planners** when you need to think through approaches before committing to implementation
- **Start with quick-cot-planner** for simple tasks, escalate to complete-cot-planner if complexity emerges

---

## 🔄 Workflow Examples

### Main Workflow: PRD → Tasks → Implementation

1. **Define Feature**: `Use @prompts/prd-creator.md to create a PRD. What I want is to: 1. Add user authentication, 2. Create login/signup forms, 3. Add session management`

2. **Break Down Tasks**: `Use @prompts/task-breakdown.md to implement @tasks/2025-10-11-user-authentication.md.`

3. **Execute Tasks**:
   - `Use @prompts/task-executor.md to implement ONLY task 1 up to task 2 from @tasks/2025-10-11-user-authentication.md.`
   - `Use @prompts/task-executor.md to implement ONLY task 3 up to task 4 from @tasks/2025-10-11-user-authentication.md.`

Repeat until all tasks are complete!

### Planning Workflow: Think Before Acting

**For complex problems:**
```
Use @prompts/complete-cot-planner.md to plan implementing a caching layer with Redis that integrates with our existing API endpoints
```

**For quick fixes:**
```
Use @prompts/quick-cot-planner.md to plan fixing the email validation bug in the signup form
```

**Combined workflow:**
1. Use quick-cot-planner to explore a bug fix
2. If complexity emerges, switch to complete-cot-planner
3. Once plan is solid, create a PRD if needed or implement directly

---
