---
title: portal.partner_registration domain_case_folding = True
status: active
fact_kind: property_value
subject_key: portal.partner_registration
property_key: domain_case_folding
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-77F80A293A9D87BD
claim_text: matching ignores letter case
text_ref: REQ-portal-partner-registration-allowed-domains
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-258'
  recorded_at: '2025-10-02T12:19:17.000Z'
id: FACT-portal-partner-registration-domain-case-folding
type: fact
---
Matching ignores letter case.

Modeled from REQ-portal-partner-registration-allowed-domains so the claim can be checked for contradictions.
