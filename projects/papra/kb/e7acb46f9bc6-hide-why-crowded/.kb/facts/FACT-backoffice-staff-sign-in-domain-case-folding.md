---
title: backoffice.staff_sign_in domain_case_folding = True
status: active
fact_kind: property_value
subject_key: backoffice.staff_sign_in
property_key: domain_case_folding
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-77F80A293A9D87BD
claim_text: matching ignores letter case
text_ref: REQ-backoffice-staff-sign-in-allowed-domains
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-410'
  recorded_at: '2025-05-22T14:22:26.000Z'
id: FACT-backoffice-staff-sign-in-domain-case-folding
type: fact
---
Matching ignores letter case.

Modeled from REQ-backoffice-staff-sign-in-allowed-domains so the claim can be checked for contradictions.
