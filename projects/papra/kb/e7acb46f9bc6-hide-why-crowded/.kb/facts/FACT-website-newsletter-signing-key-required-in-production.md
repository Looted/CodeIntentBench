---
title: website.newsletter_signing_key required_in_production = True
status: active
fact_kind: property_value
subject_key: website.newsletter_signing_key
property_key: required_in_production
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-27BD6EEDF8EC6160
claim_text: The newsletter service refuses to start in production without NEWSLETTER_SIGNING_KEY
text_ref: REQ-website-newsletter-signing-key-required-in-production
tags:
  - lane:strict
  - knowledge-source:website-decisions
origin:
  kind: agent
  ref: 'Marketing website decision log (apps/website): WEB-285'
  recorded_at: '2026-06-22T12:02:20.000Z'
id: FACT-website-newsletter-signing-key-required-in-production
type: fact
---
The newsletter service refuses to start in production without NEWSLETTER_SIGNING_KEY.

Modeled from REQ-website-newsletter-signing-key-required-in-production so the claim can be checked for contradictions.
