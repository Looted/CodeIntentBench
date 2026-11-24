---
title: backoffice.staff_sign_in disposable_domains_refused = True
status: active
fact_kind: property_value
subject_key: backoffice.staff_sign_in
property_key: disposable_domains_refused
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-71B8DF79F9417B7C
claim_text: Addresses from disposable-mail domains are refused in back office staff sign-in
text_ref: REQ-backoffice-staff-sign-in-blocked-domains
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-412'
  recorded_at: '2025-11-11T12:59:04.000Z'
id: FACT-backoffice-staff-sign-in-disposable-domains-refused
type: fact
---
Addresses from disposable-mail domains are refused in back office staff sign-in.

Modeled from REQ-backoffice-staff-sign-in-blocked-domains so the claim can be checked for contradictions.
