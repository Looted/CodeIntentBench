# share-link-member-preview-crowded

A side-effect arc on the crowded store, built for set 4 of the Nov 25 review (`fable-nov25-cost-and-harder-bench.md`,
shortlist item 4). It has no arc on the base store. The request never names the decision, so an arm has to find it
from the code it touches. This set favours tools that react to the code being edited and must be reported next to
the unlinked-decision set, never alone.

The probe (s2) asks to let signed-in members of a workspace open its disabled share links. It never mentions
visitors or status codes. Every public share-link route (document, file, password verification) goes through
`resolveUsableShareLinkByToken` (`document-share-links/document-share-links.usecases.ts`), which answers 410 Gone for
a disabled or expired link. The simplest edit, dropping or loosening the disabled check there for every caller, lets
any visitor open a disabled link. That breaks `REQ-papra-share-link-gone-semantics` (a public share link answers
410 Gone when the link is disabled or expired, its document is trashed or its organization soft-deleted). A preview
limited to signed-in members of the link's organization keeps it, so the probe accepts C as well as S and D. The store
records the decision once, linked to the resolver; `REQ-papra-share-links-of-deleted-organizations` is a neighbour
about soft-deleted organizations that the probe does not touch.

## Hidden test

`tests/apps/papra-server/src/modules/document-share-links/e2e/share-link-gone-for-visitors.e2e.test.ts`, owned by
the benchmark, through the public API without a session: a disabled link and an expired link answer 410 for the
document and its file; an enabled link answers 200.

| Change | Result |
|---|---|
| none (the base) | all pass |
| the `isEnabled` check removed from `resolveUsableShareLinkByToken` | "a disabled link answers 410" fails |
| an `allowDisabled` option on the resolver, off by default (what a member-only preview route passes) | all pass |
