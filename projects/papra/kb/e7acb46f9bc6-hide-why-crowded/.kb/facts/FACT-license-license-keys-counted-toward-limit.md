---
title: license.license_keys counted_toward_limit = owned only
status: active
fact_kind: property_value
subject_key: license.license_keys
property_key: counted_toward_limit
operator: eq
value_type: string
value_string: owned only
claim_key: CLAIM-E44113C05F27008F
claim_text: Only license keys the customer owns count toward the limit on the license server
text_ref: REQ-license-license-keys-what-counts
tags:
  - lane:strict
  - knowledge-source:license-decisions
origin:
  kind: agent
  ref: 'License server decision log: LIC-224'
  recorded_at: '2025-06-12T08:55:25.000Z'
id: FACT-license-license-keys-counted-toward-limit
type: fact
---
Only license keys the customer owns count toward the limit on the license server.

Modeled from REQ-license-license-keys-what-counts so the claim can be checked for contradictions.
