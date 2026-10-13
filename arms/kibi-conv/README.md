# Arm `kibi-conv`

The [`kibi`](../kibi/README.md) arm with one addition: the same one-sentence convention the docs, tracker, memory and agents-md arms get in arc mode, appended to CLAUDE.md, saying that product decisions are recorded as requirements in the Kibi knowledge base and should be searched before changing behaviour.

The plain `kibi` arm is Kibi as shipped: the plugin's own hooks, skills and MCP server are all the agent is told. This arm answers a second question: with the same minimal instruction every other substrate gets, how much does the tool add? Setup and hygiene delegate to the `kibi` arm's scripts; `host.json` is a copy.
