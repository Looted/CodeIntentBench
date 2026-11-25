---
title: website.newsletter_signing_key value_source = environment only
status: active
fact_kind: property_value
subject_key: website.newsletter_signing_key
property_key: value_source
operator: eq
value_type: string
value_string: environment only
claim_key: CLAIM-982062C884E3D6A7
claim_text: The newsletter service reads NEWSLETTER_SIGNING_KEY from the environment only, never from a configuration file
text_ref: REQ-website-newsletter-signing-key-source
tags:
  - lane:strict
  - knowledge-source:website-decisions
origin:
  kind: agent
  ref: 'Marketing website decision log (apps/website): WEB-294'
  recorded_at: '2025-08-09T15:21:08.000Z'
id: FACT-website-newsletter-signing-key-value-source
type: fact
---
The newsletter service reads NEWSLETTER_SIGNING_KEY from the environment only, never from a configuration file.

Modeled from REQ-website-newsletter-signing-key-source so the claim can be checked for contradictions.
