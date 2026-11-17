---
title: cli.saved_organizations limit_override = none
status: active
fact_kind: property_value
subject_key: cli.saved_organizations
property_key: limit_override
operator: eq
value_type: string
value_string: none
claim_key: CLAIM-201664E59AE95CD2
claim_text: The saved organization limit in the papra CLI cannot be changed for an individual profile
text_ref: REQ-cli-saved-organizations-limit-override
tags:
  - lane:strict
  - knowledge-source:cli-decisions
origin:
  kind: agent
  ref: 'CLI design notes (packages/cli): CLI-243'
  recorded_at: '2025-12-24T16:54:23.000Z'
id: FACT-cli-saved-organizations-limit-override
type: fact
---
The saved organization limit in the papra CLI cannot be changed for an individual profile.

Modeled from REQ-cli-saved-organizations-limit-override so the claim can be checked for contradictions.
