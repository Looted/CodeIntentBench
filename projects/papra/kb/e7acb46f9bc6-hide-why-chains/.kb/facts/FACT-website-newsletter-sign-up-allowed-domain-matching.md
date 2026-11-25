---
title: website.newsletter_sign_up allowed_domain_matching = exact domain
status: active
fact_kind: property_value
subject_key: website.newsletter_sign_up
property_key: allowed_domain_matching
operator: eq
value_type: string
value_string: exact domain
claim_key: CLAIM-14DCF8F4B58C095B
claim_text: When an allowed-domain list is configured for the newsletter sign-up form, only addresses whose domain is exactly on the list are accepted
text_ref: REQ-website-newsletter-sign-up-allowed-domains
tags:
  - lane:strict
  - knowledge-source:website-decisions
origin:
  kind: agent
  ref: 'Marketing website decision log (apps/website): WEB-313'
  recorded_at: '2026-05-10T10:01:15.000Z'
id: FACT-website-newsletter-sign-up-allowed-domain-matching
type: fact
---
When an allowed-domain list is configured for the newsletter sign-up form, only addresses whose domain is exactly on the list are accepted.

Modeled from REQ-website-newsletter-sign-up-allowed-domains so the claim can be checked for contradictions.
