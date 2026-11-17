---
title: website.newsletter_signing_key development_default = always required
status: active
fact_kind: property_value
subject_key: website.newsletter_signing_key
property_key: development_default
operator: eq
value_type: string
value_string: always required
claim_key: CLAIM-250A6E120F1E9EE5
claim_text: The newsletter service requires NEWSLETTER_SIGNING_KEY in every environment, development included
text_ref: REQ-website-newsletter-signing-key-development-default
tags:
  - lane:strict
  - knowledge-source:website-decisions
origin:
  kind: agent
  ref: 'Marketing website decision log (apps/website): WEB-305'
  recorded_at: '2025-05-23T13:49:52.000Z'
id: FACT-website-newsletter-signing-key-development-default
type: fact
---
The newsletter service requires NEWSLETTER_SIGNING_KEY in every environment, development included.

Modeled from REQ-website-newsletter-signing-key-development-default so the claim can be checked for contradictions.
