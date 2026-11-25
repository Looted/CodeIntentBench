---
title: cli.saved_organizations limit_detail = saved organizations shared with them do not count
status: active
fact_kind: property_value
subject_key: cli.saved_organizations
property_key: limit_detail
operator: eq
value_type: string
value_string: saved organizations shared with them do not count
claim_key: CLAIM-CD7CD98B5EAE6B79
claim_text: saved organizations shared with them do not count
text_ref: REQ-cli-saved-organizations-what-counts
tags:
  - lane:strict
  - knowledge-source:cli-decisions
origin:
  kind: agent
  ref: 'CLI design notes (packages/cli): CLI-235'
  recorded_at: '2026-02-28T15:03:34.000Z'
id: FACT-cli-saved-organizations-limit-detail
type: fact
---
Saved organizations shared with them do not count.

Modeled from REQ-cli-saved-organizations-what-counts so the claim can be checked for contradictions.
