import type { Plugin, PluginInput, Hooks } from "@kilocode/plugin";
import { tool } from "@kilocode/plugin";

/**
 * Sample Kilo Lifecycle Plugin
 *
 * Demonstrates:
 * 1. Registering custom tools via the `tool` hook
 * 2. Intercepting tool execution lifecycle hooks (`tool.execute.before`, `tool.execute.after`)
 * 3. Listening to chat message events
 */
export const SamplePlugin: Plugin = async (ctx: PluginInput): Promise<Hooks> => {
  console.log(`[Plugin:SamplePlugin] Initialized in workspace: ${ctx.directory}`);

  return {
    // Intercept tool executions before they run
    "tool.execute.before": async (input, output) => {
      // Example: log tool invocations for diagnostic auditing
      // console.log(`[Audit] Executing tool: ${input.tool} (callID: ${input.callID})`);
    },

    // Intercept tool execution outputs after completion
    "tool.execute.after": async (input, output) => {
      // Example: attach telemetry or performance metadata
      // console.log(`[Audit] Completed tool: ${input.tool}`);
    },

    // Provide custom plugin tools to the LLM agent
    tool: {
      workspace_info: tool({
        description: "Returns metadata and environment diagnostics for the current Kilo session and workspace",
        args: {
          includeDetails: tool.schema.boolean().optional().describe("Whether to include extended path details"),
        },
        async execute(args, toolCtx) {
          const timestamp = new Date().toISOString();
          const info = {
            sessionID: toolCtx.sessionID,
            agent: toolCtx.agent,
            directory: toolCtx.directory,
            timestamp,
            details: args.includeDetails ? { nodeVersion: process.version, platform: process.platform } : undefined,
          };

          return {
            title: "Workspace Diagnostics",
            output: JSON.stringify(info, null, 2),
            metadata: { queriedAt: timestamp },
          };
        },
      }),
    },
  };
};

export default SamplePlugin;
