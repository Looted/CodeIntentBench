---
title: website.cloud_waiting_list allowed_domain_matching = exact domain
status: active
fact_kind: property_value
subject_key: website.cloud_waiting_list
property_key: allowed_domain_matching
operator: eq
value_type: string
value_string: exact domain
claim_key: CLAIM-BCDE49FC996D9F42
claim_text: When an allowed-domain list is configured for the cloud waiting list, only addresses whose domain is exactly on the list are accepted
text_ref: REQ-website-cloud-waiting-list-allowed-domains
tags:
  - lane:strict
  - knowledge-source:website-decisions
origin:
  kind: agent
  ref: 'Marketing website decision log (apps/website): WEB-353'
  recorded_at: '2025-02-13T14:40:02.000Z'
id: FACT-website-cloud-waiting-list-allowed-domain-matching
type: fact
---
When an allowed-domain list is configured for the cloud waiting list, only addresses whose domain is exactly on the list are accepted.

Modeled from REQ-website-cloud-waiting-list-allowed-domains so the claim can be checked for contradictions.
