---
title: license.license_keys at_limit = refused, limit named
status: active
fact_kind: property_value
subject_key: license.license_keys
property_key: at_limit
operator: eq
value_type: string
value_string: refused, limit named
claim_key: CLAIM-B487E36C94210777
claim_text: Creating a license key on the license server when the customer is at the limit is refused with an error that names the limit
text_ref: REQ-license-license-keys-at-the-limit
tags:
  - lane:strict
  - knowledge-source:license-decisions
origin:
  kind: agent
  ref: 'License server decision log: LIC-229'
  recorded_at: '2026-06-04T15:18:08.000Z'
id: FACT-license-license-keys-at-limit
type: fact
---
Creating a license key on the license server when the customer is at the limit is refused with an error that names the limit.

Modeled from REQ-license-license-keys-at-the-limit so the claim can be checked for contradictions.
