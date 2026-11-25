---
title: license.activations counted_toward_limit = owned only
status: active
fact_kind: property_value
subject_key: license.activations
property_key: counted_toward_limit
operator: eq
value_type: string
value_string: owned only
claim_key: CLAIM-2F64BEC154DD873A
claim_text: Only activations the license key owns count toward the limit on the license server
text_ref: REQ-license-activations-what-counts
tags:
  - lane:strict
  - knowledge-source:license-decisions
origin:
  kind: agent
  ref: 'License server decision log: LIC-132'
  recorded_at: '2025-03-15T11:31:52.000Z'
id: FACT-license-activations-counted-toward-limit
type: fact
---
Only activations the license key owns count toward the limit on the license server.

Modeled from REQ-license-activations-what-counts so the claim can be checked for contradictions.
