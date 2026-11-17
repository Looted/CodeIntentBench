---
title: website.newsletter_signing_key minimum_length = 32
status: active
fact_kind: property_value
subject_key: website.newsletter_signing_key
property_key: minimum_length
operator: eq
value_type: int
value_int: 32
claim_key: CLAIM-F8EF9C82C3D8F846
claim_text: NEWSLETTER_SIGNING_KEY must be at least 32 characters long
text_ref: REQ-website-newsletter-signing-key-minimum-length
tags:
  - lane:strict
  - knowledge-source:website-decisions
origin:
  kind: agent
  ref: 'Marketing website decision log (apps/website): WEB-286'
  recorded_at: '2026-06-21T13:50:40.000Z'
id: FACT-website-newsletter-signing-key-minimum-length
type: fact
---
NEWSLETTER_SIGNING_KEY must be at least 32 characters long.

Modeled from REQ-website-newsletter-signing-key-minimum-length so the claim can be checked for contradictions.
