---
title: portal.partner_registration list_precedence = block list wins
status: active
fact_kind: property_value
subject_key: portal.partner_registration
property_key: list_precedence
operator: eq
value_type: string
value_string: block list wins
claim_key: CLAIM-0D5093478D80516F
claim_text: a domain on the block list is refused even when it is also on the allowed list
text_ref: REQ-portal-partner-registration-blocked-domains
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-195'
  recorded_at: '2026-03-02T13:28:00.000Z'
id: FACT-portal-partner-registration-list-precedence
type: fact
---
A domain on the block list is refused even when it is also on the allowed list.

Modeled from REQ-portal-partner-registration-blocked-domains so the claim can be checked for contradictions.
