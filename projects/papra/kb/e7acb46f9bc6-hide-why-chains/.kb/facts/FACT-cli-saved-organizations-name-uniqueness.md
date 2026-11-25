---
title: cli.saved_organizations name_uniqueness = not unique
status: active
fact_kind: property_value
subject_key: cli.saved_organizations
property_key: name_uniqueness
operator: eq
value_type: string
value_string: not unique
claim_key: CLAIM-5C0262BEFF5F34BE
claim_text: Saved organization names in the papra CLI are not required to be unique
text_ref: REQ-cli-saved-organizations-name-uniqueness
tags:
  - lane:strict
  - knowledge-source:cli-decisions
origin:
  kind: agent
  ref: 'CLI design notes (packages/cli): CLI-249'
  recorded_at: '2025-10-02T13:25:13.000Z'
id: FACT-cli-saved-organizations-name-uniqueness
type: fact
---
Saved organization names in the papra CLI are not required to be unique.

Modeled from REQ-cli-saved-organizations-name-uniqueness so the claim can be checked for contradictions.
