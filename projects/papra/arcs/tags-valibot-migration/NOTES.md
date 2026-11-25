# tags-valibot-migration

Set 5a (half-finished refactor), from `results/design/fable-realistic-difficulty-nov25.md`. Papra as upstream had it
at `123b7c17` (16 April 2026): no teammate patch, the project's history up to the base and nothing after it, the
knowledge base snapshot `kb/123b7c1784cf`. Validation is half migrated from zod to valibot (papra-hq/papra #1028 to
#1050): organizations, invitations, documents and intake emails are on `shared/validation/validation.ts`; tags,
tagging rules, users, webhooks, subscriptions and custom properties still use `validation.legacy.ts` and zod.

The probe (s2) is the real next commit, the tags migration (#1044, `e05e6e86`). In the old routes the trimming of a
tag's name and description is zod's `.trim()`, a transform inside the schema. valibot has no such method on its
string schema: it needs `v.trim()` in a pipe. A translation of types and lengths drops the trimming and breaks
`REQ-papra-tag-names-trimmed` (changeset of #826: "to avoid leading/trailing spaces"). The real commit keeps it.

At this base the trimming decision has no symbol link (at the pin it is linked to `tagNameSchema`, which does not
exist yet); the links are as the onboarding made them, and none is added for the arc. `registerTagsRoutes` is linked
to the neighbouring decision that tag name and colour are validated server-side. The changelog states the trimming
in every arm's workspace, as upstream has it; the `none` arm decides whether the arc is easy.

The real migration also raised the create-time name limit from 50 to 64 without saying so. No recorded decision covers
that limit, so the hidden test does not touch it and the judge accepts either.

## Hidden test

`tests/apps/papra-server/src/modules/tags/e2e/tag-input-trimmed.e2e.test.ts`, owned by the benchmark, through the
API: a created and an updated tag keep their name and description without surrounding spaces; a name of spaces only
is refused; an invalid colour is refused on create and update. Checked three ways on a checkout of the base:

| Change | Result |
|---|---|
| none (the base, zod) | 4 pass |
| the real migration (`tags.routes.ts` and `tags.schemas.ts` from `e05e6e86`) | 4 pass |
| the real migration with the two `v.trim()` lines removed | 3 fail (both trims, and the spaces-only name), colour passes |
