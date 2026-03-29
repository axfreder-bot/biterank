# BiteRank — Subagent Templates

Use these templates when spawning subagents for BiteRank work.

## Spawning Defaults

Always use:
- `runtime: "subagent"`
- `model: "minimax/MiniMax-M2.7"` — CRITICAL, default model doesn't support tools
- `mode: "run"` for one-shot tasks
- `label:` with a descriptive name

## Standard Spawn Template

```js
sessions_spawn({
  task: `You are a BiteRank Development Agent.

## Context
- Project: bite-rank.com (restaurant discovery app)
- GitHub: axfreder-bot/biterank
- Code at: /Users/openclaw/.openclaw/workspace/biterank
- Live at: bite-rank.com

## Your Mission
[TASK DESCRIPTION]

## Tasks
1. [specific task]
2. [specific task]

## Success Criteria
- [file changed or created]
- [outcome]

## Rules
- Work in /Users/openclaw/.openclaw/workspace/biterank
- Commit and push to GitHub as you complete each piece
- If blocked, describe the blocker and stop
- Do NOT make external API calls that cost money
- Do NOT post publicly without approval
`,
  label: "descriptive-label",
  runtime: "subagent",
  model: "minimax/MiniMax-M2.7",
  mode: "run"
})
```

## Quality Checklist (before marking done)

- [ ] Code compiles / no syntax errors
- [ ] Committed with clear message
- [ ] Pushed to GitHub
- [ ] Files modified are listed in commit
- [ ] README / docs updated if needed

## Common Task Types

### Research Task
```
Research [topic] for BiteRank.
- Find: [what to find]
- Document in: /Users/openclaw/.openclaw/workspace/biterank/[FILENAME.md]
- Format: comparison table, bullet points, recommendations
```

### Code Task
```
Implement [feature] in BiteRank.
- File: [which file]
- What to change: [brief]
- Test by: [how to verify]
```

### Content Task
```
Add [content] to BiteRank.
- Format: [JSON/review/markdown]
- Source: [where to get info]
- Add to: [which file]
```

## When Subagent Returns Empty

If a subagent completes with no output:
1. Do the task directly myself
2. Don't re-spawn with same model
3. If it's a model issue, report in summary to Alex

## Escalation Rules

**Ask Alex immediately if task involves:**
- Money / payments
- Public posts (Reddit, social media)
- Deleting user data
- Changing security rules
- Any contract or agreement
- Creative work that represents BiteRank publicly
