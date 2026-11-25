---
title: license.license_trial_requests list_precedence = block list wins
status: active
fact_kind: property_value
subject_key: license.license_trial_requests
property_key: list_precedence
operator: eq
value_type: string
value_string: block list wins
claim_key: CLAIM-0D5093478D80516F
claim_text: a domain on the block list is refused even when it is also on the allowed list
text_ref: REQ-license-license-trial-requests-blocked-domains
tags:
  - lane:strict
  - knowledge-source:license-decisions
origin:
  kind: agent
  ref: 'License server decision log: LIC-162'
  recorded_at: '2025-04-25T16:05:13.000Z'
id: FACT-license-license-trial-requests-list-precedence
type: fact
---
A domain on the block list is refused even when it is also on the allowed list.

Modeled from REQ-license-license-trial-requests-blocked-domains so the claim can be checked for contradictions.
