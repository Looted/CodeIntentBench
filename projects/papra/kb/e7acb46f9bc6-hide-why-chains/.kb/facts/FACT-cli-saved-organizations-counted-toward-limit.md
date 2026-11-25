---
title: cli.saved_organizations counted_toward_limit = owned only
status: active
fact_kind: property_value
subject_key: cli.saved_organizations
property_key: counted_toward_limit
operator: eq
value_type: string
value_string: owned only
claim_key: CLAIM-F2E865ABA11658C8
claim_text: Only saved organizations the profile owns count toward the limit in the papra CLI
text_ref: REQ-cli-saved-organizations-what-counts
tags:
  - lane:strict
  - knowledge-source:cli-decisions
origin:
  kind: agent
  ref: 'CLI design notes (packages/cli): CLI-235'
  recorded_at: '2026-02-28T15:03:34.000Z'
id: FACT-cli-saved-organizations-counted-toward-limit
type: fact
---
Only saved organizations the profile owns count toward the limit in the papra CLI.

Modeled from REQ-cli-saved-organizations-what-counts so the claim can be checked for contradictions.
