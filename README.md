# SDLC

Software development life cycle skills for AI agents.

SDLC is a catalog of skills that carries an AI agent - Claude Code, Codex, Cursor and
others - through software development the way the industry standards describe it. The
catalog is ordered from the general to the specific: the software life cycle, its processes
after ISO/IEC/IEEE 12207, the practices that carry out a process, and what a language or a
tool adds to a practice.
Every skill follows the open [Agent Skills](https://agentskills.io) format; for Claude Code
the catalog ships as a plugin. Licensed under [The Unlicense](LICENSE.md).

## Requirements

- An agent that reads skills in the Agent Skills format: Claude Code with plugin support,
  Codex, Cursor or another

## Installation

### Claude Code

```sh
claude plugin marketplace add ssoft-hub/sdlc
claude plugin install sdlc@ssoft-hub
```

Skills are then called with the plugin prefix, such as `/sdlc:verification`. The plugin is
installed from `main`, which carries released versions only.

| Action | Command |
|---|---|
| update | `claude plugin update sdlc` |
| remove | `claude plugin uninstall sdlc` |

### Other agents

Every skill is a directory of `skills/` holding its `SKILL.md`. The directory goes where the
agent reads skills from, as the agent's own documentation states.

## See also

- [CHANGELOG](CHANGELOG.md)
- [CONTRIBUTING](CONTRIBUTING.md)
