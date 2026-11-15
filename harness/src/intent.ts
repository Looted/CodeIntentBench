// The decision a step is about: its own `intent` when the arc probes more than one decision,
// otherwise the arc's. Grading, the judge, the scripted user, validation and the audit all go
// through here.
import type { Arc, ArcIntent, ArcPattern, ArcStep } from './types.ts';

export function intentOf(arc: Pick<Arc, 'intent'>, step?: Pick<ArcStep, 'intent'>): ArcIntent {
  return step?.intent ?? arc.intent;
}

/** Every decision an arc is about: the arc's own (scope `arc`) and each step's own (scope: the step id). */
export function decisionsOf(arc: Arc): Array<{ scope: string; intent: ArcIntent; step?: ArcStep }> {
  const out: Array<{ scope: string; intent: ArcIntent; step?: ArcStep }> = [];
  if (arc.intent) out.push({ scope: 'arc', intent: arc.intent });
  for (const step of arc.steps ?? []) if (step.intent) out.push({ scope: step.id, intent: step.intent, step });
  return out;
}

export function patternsOf(arc: Pick<Arc, 'pattern'>): ArcPattern[] {
  if (!arc.pattern) return [];
  return Array.isArray(arc.pattern) ? arc.pattern : [arc.pattern];
}
