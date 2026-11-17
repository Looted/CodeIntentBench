---
title: license.license_keys limit_configurable = True
status: active
fact_kind: property_value
subject_key: license.license_keys
property_key: limit_configurable
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-646750DD567C0C73
claim_text: the limit is configured per deployment and 2 is the default
text_ref: REQ-license-license-keys-maximum-count
tags:
  - lane:strict
  - knowledge-source:license-decisions
origin:
  kind: agent
  ref: 'License server decision log: LIC-223'
  recorded_at: '2026-04-28T10:17:49.000Z'
id: FACT-license-license-keys-limit-configurable
type: fact
---
The limit is configured per deployment and 2 is the default.

Modeled from REQ-license-license-keys-maximum-count so the claim can be checked for contradictions.
