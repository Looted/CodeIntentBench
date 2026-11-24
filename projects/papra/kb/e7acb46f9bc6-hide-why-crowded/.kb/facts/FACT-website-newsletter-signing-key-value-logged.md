---
title: website.newsletter_signing_key value_logged = False
status: active
fact_kind: property_value
subject_key: website.newsletter_signing_key
property_key: value_logged
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-6CA62134F37B8CE4
claim_text: The newsletter service never writes NEWSLETTER_SIGNING_KEY or a value derived from it to its logs
text_ref: REQ-website-newsletter-signing-key-never-logged
tags:
  - lane:strict
  - knowledge-source:website-decisions
origin:
  kind: agent
  ref: 'Marketing website decision log (apps/website): WEB-302'
  recorded_at: '2026-05-18T11:17:39.000Z'
id: FACT-website-newsletter-signing-key-value-logged
type: fact
---
The newsletter service never writes NEWSLETTER_SIGNING_KEY or a value derived from it to its logs.

Modeled from REQ-website-newsletter-signing-key-never-logged so the claim can be checked for contradictions.
