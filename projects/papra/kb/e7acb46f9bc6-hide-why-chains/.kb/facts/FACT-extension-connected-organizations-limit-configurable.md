---
title: extension.connected_organizations limit_configurable = False
status: active
fact_kind: property_value
subject_key: extension.connected_organizations
property_key: limit_configurable
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-950BC8C0A4D47D22
claim_text: the limit is the same for everyone
text_ref: REQ-extension-connected-organizations-maximum-count
tags:
  - lane:strict
  - knowledge-source:extension-decisions
origin:
  kind: agent
  ref: 'Browser extension decision log: EXT-298'
  recorded_at: '2026-08-10T13:00:26.000Z'
id: FACT-extension-connected-organizations-limit-configurable
type: fact
---
The limit is the same for everyone.

Modeled from REQ-extension-connected-organizations-maximum-count so the claim can be checked for contradictions.
