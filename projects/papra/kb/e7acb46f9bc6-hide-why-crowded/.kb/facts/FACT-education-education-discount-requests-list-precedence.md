---
title: education.education_discount_requests list_precedence = block list wins
status: active
fact_kind: property_value
subject_key: education.education_discount_requests
property_key: list_precedence
operator: eq
value_type: string
value_string: block list wins
claim_key: CLAIM-0D5093478D80516F
claim_text: a domain on the block list is refused even when it is also on the allowed list
text_ref: REQ-education-education-discount-requests-blocked-domains
tags:
  - lane:strict
  - knowledge-source:education-decisions
origin:
  kind: agent
  ref: 'Education programme portal notes: EDU-191'
  recorded_at: '2026-05-02T16:40:43.000Z'
id: FACT-education-education-discount-requests-list-precedence
type: fact
---
A domain on the block list is refused even when it is also on the allowed list.

Modeled from REQ-education-education-discount-requests-blocked-domains so the claim can be checked for contradictions.
