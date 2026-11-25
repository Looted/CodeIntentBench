---
title: website.newsletter_sign_up list_precedence = block list wins
status: active
fact_kind: property_value
subject_key: website.newsletter_sign_up
property_key: list_precedence
operator: eq
value_type: string
value_string: block list wins
claim_key: CLAIM-0D5093478D80516F
claim_text: a domain on the block list is refused even when it is also on the allowed list
text_ref: REQ-website-newsletter-sign-up-blocked-domains
tags:
  - lane:strict
  - knowledge-source:website-decisions
origin:
  kind: agent
  ref: 'Marketing website decision log (apps/website): WEB-235'
  recorded_at: '2026-01-10T15:45:15.000Z'
id: FACT-website-newsletter-sign-up-list-precedence
type: fact
---
A domain on the block list is refused even when it is also on the allowed list.

Modeled from REQ-website-newsletter-sign-up-blocked-domains so the claim can be checked for contradictions.
