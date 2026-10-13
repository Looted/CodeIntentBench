import type { Rule } from './types.ts';

/**
 * The `agents-md` arm: every rule, rendered once, as a context file a team
 * might keep by hand. Same content as the other arms, static delivery.
 */
export function renderAgentsMd(projectName: string, rules: Rule[]): string {
  const lines: string[] = [];
  lines.push(`# ${projectName}: project rules`);
  lines.push('');
  lines.push('These rules describe decisions this project has made. Changes that conflict with one of them need an explicit decision first, and the rule below must be updated with the change.');
  lines.push('');
  for (const rule of rules) {
    lines.push(`## ${rule.id}`);
    lines.push('');
    lines.push(rule.statement.trim());
    if (rule.rationale) {
      lines.push('');
      lines.push(`Why: ${rule.rationale.trim()}`);
    }
    lines.push('');
    lines.push(`Where: ${rule.scope.paths.join(', ')}${rule.scope.symbols?.length ? ` (${rule.scope.symbols.join(', ')})` : ''}`);
    lines.push('');
  }
  return lines.join('\n');
}

export function renderClaudeMdPointer(): string {
  return '@AGENTS.md\n';
}
