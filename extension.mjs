// pi extension. It registers the bundled Agentry MCP server with pi's MCP
// client, exposed directly so its tools sit beside pi's own, and holds every
// call that confirms a preview or changes the setup for the person's
// approval. pi's MCP client does not support elicitation, so without this a
// confirmation would go ahead on the model's word alone.
import { fileURLToPath } from "node:url";
import { approvalFor } from "./gate.mjs";

const server = fileURLToPath(new URL("./server/agentry-mcp.mjs", import.meta.url));

export default function (pi) {
  pi.registerMcpServer("agentry", {
    command: "node",
    args: [server],
    exposure: "direct",
    timeout: 3600,
    description: "Agentry: find, verify, install and run QuickAgents, and build your own.",
  });

  pi.on("tool_call", async (event, ctx) => {
    const approval = approvalFor(event.toolName, event.input);
    if (!approval) return;
    if (!ctx.hasUI) {
      return {
        block: true,
        reason: `${approval.title} needs a person to approve it; run pi interactively to confirm Agentry operations.`,
      };
    }
    const ok = await ctx.ui.confirm(approval.title, approval.description);
    if (!ok) return { block: true, reason: "The person declined this Agentry operation." };
  });
}
