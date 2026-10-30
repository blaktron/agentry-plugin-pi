# Agentry for pi

Agentry brings QuickAgents into your agent host. Search a registry, read a QuickAgent's capability contract, scan findings and signature, install it, and run it in Agentry's sandboxed runner with a preview you approve first. Build your own QuickAgent, validate it, get an AI Review and test it before you publish. The plugin drives the Agentry CLI on your computer; the CLI keeps your sign-in and enforces each QuickAgent's contract.

## Install

```sh
pi install npm:@secureagentry/pi-agentry
```

Then run `/agentry-setup`.

## Requirements

- The Agentry CLI 0.6.63 or newer on `PATH`. Install it from https://secureagentry.net/download.
- Docker, for runs on this computer.

## What it adds

- The `agentry` skill and the commands `/agentry-find`, `/agentry-new`, `/agentry-run`, `/agentry-setup`, `/agentry-sign-in`.
- The Agentry MCP server 0.6.999, bundled in `server/`, registered with pi's MCP client.
- An approval prompt before any Agentry call that installs, runs or changes your setup.
  In print or JSON mode, where pi cannot ask, those calls are refused.

Signing in stays in your terminal (`agentry login`). Documentation: https://docs.secureagentry.net/agentry/mcp/.
Privacy: https://secureagentry.net/privacy.
