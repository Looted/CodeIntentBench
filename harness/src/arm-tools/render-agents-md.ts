// Usage: node render-agents-md.ts <workspace> <rulesDir> [projectName] [runDir]
// The `agents-md` arm: every rule in one AGENTS.md that Claude Code loads whole into every session.
// The file is never truncated. Its size is written to <runDir>/agents-md-size.json and reported with
// the results; when its estimated tokens exceed the budget the setup fails ("does not fit") instead
// of running sessions on a context that cannot hold it. The budget is FENCEBENCH_AGENTS_MD_TOKEN_BUDGET,
// or by default the context window of the agent's model (FENCEBENCH_AGENT_MODEL, set by the harness).
import { readFileSync, readdirSync, writeFileSync, existsSync } from 'node:fs';
import { join, basename } from 'node:path';
import YAML from 'yaml';
import { contextTokensFor, estimateTokens } from '../pricing.ts';
import { renderAgentsMd, renderClaudeMdPointer } from '../render.ts';
import type { Rule } from '../types.ts';

const [ws, rulesDir, projectName, runDir] = process.argv.slice(2);
if (!ws || !rulesDir) throw new Error('usage: render-agents-md.ts <workspace> <rulesDir> [projectName] [runDir]');
const rules = readdirSync(rulesDir).filter((f) => f.endsWith('.yaml')).sort().map((f) => YAML.parse(readFileSync(join(rulesDir, f), 'utf8')) as Rule);
const text = renderAgentsMd(projectName ?? basename(ws), rules);
const model = process.env.FENCEBENCH_AGENT_MODEL || undefined;
const override = process.env.FENCEBENCH_AGENTS_MD_TOKEN_BUDGET;
const budget = override ? Number(override) : contextTokensFor(model);
if (!Number.isFinite(budget) || budget <= 0) throw new Error(`FENCEBENCH_AGENTS_MD_TOKEN_BUDGET must be a positive number, got '${override}'`);
const size = { rules: rules.length, bytes: Buffer.byteLength(text, 'utf8'), estimated_tokens: estimateTokens(text), token_budget: budget, budget_source: override ? 'FENCEBENCH_AGENTS_MD_TOKEN_BUDGET' : `context window of ${model ?? 'the default model'}`, fits: true };
size.fits = size.estimated_tokens <= budget;
if (runDir) writeFileSync(join(runDir, 'agents-md-size.json'), JSON.stringify(size, null, 2));
if (!size.fits) {
  console.error(`agents-md: does not fit. AGENTS.md with ${rules.length} rules is ${size.bytes} bytes, about ${size.estimated_tokens} tokens, over the budget of ${budget} tokens (${size.budget_source}). Nothing was truncated and nothing was written; raise FENCEBENCH_AGENTS_MD_TOKEN_BUDGET or report this arm as "does not fit".`);
  process.exit(3);
}
writeFileSync(join(ws, 'AGENTS.md'), text);
// Claude Code reads CLAUDE.md; the import keeps one source of truth.
const claudeMd = join(ws, 'CLAUDE.md');
if (!existsSync(claudeMd)) writeFileSync(claudeMd, renderClaudeMdPointer());
else writeFileSync(claudeMd, readFileSync(claudeMd, 'utf8').trimEnd() + '\n\n' + renderClaudeMdPointer());
console.log(`rendered ${rules.length} rules to AGENTS.md (${size.bytes} bytes, about ${size.estimated_tokens} tokens; budget ${budget})`);
