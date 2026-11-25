---
title: website.webinar_registration disposable_domains_refused = True
status: active
fact_kind: property_value
subject_key: website.webinar_registration
property_key: disposable_domains_refused
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-05E87B7D23A390EB
claim_text: Addresses from disposable-mail domains are refused in webinar registration
text_ref: REQ-website-webinar-registration-blocked-domains
tags:
  - lane:strict
  - knowledge-source:website-decisions
origin:
  kind: agent
  ref: 'Marketing website decision log (apps/website): WEB-388'
  recorded_at: '2025-06-07T12:37:19.000Z'
id: FACT-website-webinar-registration-disposable-domains-refused
type: fact
---
Addresses from disposable-mail domains are refused in webinar registration.

Modeled from REQ-website-webinar-registration-blocked-domains so the claim can be checked for contradictions.
