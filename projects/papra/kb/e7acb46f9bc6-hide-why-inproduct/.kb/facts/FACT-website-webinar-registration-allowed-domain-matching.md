---
title: website.webinar_registration allowed_domain_matching = exact domain
status: active
fact_kind: property_value
subject_key: website.webinar_registration
property_key: allowed_domain_matching
operator: eq
value_type: string
value_string: exact domain
claim_key: CLAIM-FAC9D165DA32FA6A
claim_text: When an allowed-domain list is configured for webinar registration, only addresses whose domain is exactly on the list are accepted
text_ref: REQ-website-webinar-registration-allowed-domains
tags:
  - lane:strict
  - knowledge-source:website-decisions
origin:
  kind: agent
  ref: 'Marketing website decision log (apps/website): WEB-272'
  recorded_at: '2026-06-20T11:27:03.000Z'
id: FACT-website-webinar-registration-allowed-domain-matching
type: fact
---
When an allowed-domain list is configured for webinar registration, only addresses whose domain is exactly on the list are accepted.

Modeled from REQ-website-webinar-registration-allowed-domains so the claim can be checked for contradictions.
