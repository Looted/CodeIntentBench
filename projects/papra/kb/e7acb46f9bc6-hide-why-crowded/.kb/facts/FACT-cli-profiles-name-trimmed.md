---
title: cli.profiles name_trimmed = True
status: active
fact_kind: property_value
subject_key: cli.profiles
property_key: name_trimmed
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-D3541C3C05AA8748
claim_text: Profile names in the papra CLI are trimmed of leading and trailing whitespace before they are saved
text_ref: REQ-cli-profiles-names-trimmed
tags:
  - lane:strict
  - knowledge-source:cli-decisions
origin:
  kind: agent
  ref: 'CLI design notes (packages/cli): CLI-141'
  recorded_at: '2025-12-18T09:37:02.000Z'
id: FACT-cli-profiles-name-trimmed
type: fact
---
Profile names in the papra CLI are trimmed of leading and trailing whitespace before they are saved.

Modeled from REQ-cli-profiles-names-trimmed so the claim can be checked for contradictions.
