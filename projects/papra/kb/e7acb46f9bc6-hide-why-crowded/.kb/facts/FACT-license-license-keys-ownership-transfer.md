---
title: license.license_keys ownership_transfer = any account, on acceptance
status: active
fact_kind: property_value
subject_key: license.license_keys
property_key: ownership_transfer
operator: eq
value_type: string
value_string: any account, on acceptance
claim_key: CLAIM-9B45864CC58CB386
claim_text: Ownership of a license key on the license server can be transferred to any verified account, which must accept the transfer
text_ref: REQ-license-license-keys-ownership-transfer
tags:
  - lane:strict
  - knowledge-source:license-decisions
origin:
  kind: agent
  ref: 'License server decision log: LIC-242'
  recorded_at: '2025-08-08T09:26:34.000Z'
id: FACT-license-license-keys-ownership-transfer
type: fact
---
Ownership of a license key on the license server can be transferred to any verified account, which must accept the transfer.

Modeled from REQ-license-license-keys-ownership-transfer so the claim can be checked for contradictions.
