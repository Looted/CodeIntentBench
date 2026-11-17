---
title: portal.partner_registration disposable_domains_refused = True
status: active
fact_kind: property_value
subject_key: portal.partner_registration
property_key: disposable_domains_refused
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-36BEC223ADDE275A
claim_text: Addresses from disposable-mail domains are refused in partner portal registration
text_ref: REQ-portal-partner-registration-blocked-domains
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-266'
  recorded_at: '2026-03-02T13:28:00.000Z'
id: FACT-portal-partner-registration-disposable-domains-refused
type: fact
---
Addresses from disposable-mail domains are refused in partner portal registration.

Modeled from REQ-portal-partner-registration-blocked-domains so the claim can be checked for contradictions.
