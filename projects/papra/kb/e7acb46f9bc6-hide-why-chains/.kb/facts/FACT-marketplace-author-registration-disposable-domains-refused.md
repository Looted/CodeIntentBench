---
title: marketplace.author_registration disposable_domains_refused = True
status: active
fact_kind: property_value
subject_key: marketplace.author_registration
property_key: disposable_domains_refused
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-368A84D4D2EEF732
claim_text: Addresses from disposable-mail domains are refused in template author registration
text_ref: REQ-marketplace-author-registration-blocked-domains
tags:
  - lane:strict
  - knowledge-source:marketplace-decisions
origin:
  kind: agent
  ref: 'Template marketplace decision log: MKT-215'
  recorded_at: '2026-07-03T17:50:20.000Z'
id: FACT-marketplace-author-registration-disposable-domains-refused
type: fact
---
Addresses from disposable-mail domains are refused in template author registration.

Modeled from REQ-marketplace-author-registration-blocked-domains so the claim can be checked for contradictions.
