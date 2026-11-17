---
title: website.cloud_waiting_list disposable_domains_refused = True
status: active
fact_kind: property_value
subject_key: website.cloud_waiting_list
property_key: disposable_domains_refused
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-C7759CFF45AF2F4B
claim_text: Addresses from disposable-mail domains are refused in the cloud waiting list
text_ref: REQ-website-cloud-waiting-list-blocked-domains
tags:
  - lane:strict
  - knowledge-source:website-decisions
origin:
  kind: agent
  ref: 'Marketing website decision log (apps/website): WEB-361'
  recorded_at: '2025-10-03T12:54:43.000Z'
id: FACT-website-cloud-waiting-list-disposable-domains-refused
type: fact
---
Addresses from disposable-mail domains are refused in the cloud waiting list.

Modeled from REQ-website-cloud-waiting-list-blocked-domains so the claim can be checked for contradictions.
