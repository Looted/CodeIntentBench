---
title: intake_emails.get_is_from_allowed_origin if_no_allowed_origins_are_provided_the_origin = True
status: active
fact_kind: property_value
subject_key: intake_emails.get_is_from_allowed_origin
property_key: if_no_allowed_origins_are_provided_the_origin
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-445689D99685505C
claim_text: If no allowed origins are provided, the origin is not allowed
text_ref: REQ-papra-intake-emails-no-allowed-origins-are-provided-origin-is
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1434'
  recorded_at: '2026-03-11T15:12:38.000Z'
id: FACT-papra-intake-emails-get-is-from-allowed-origin-if-no-allowed-origins-are-provided-the-origin
type: fact
---
If no allowed origins are provided, the origin is not allowed.

Modeled from REQ-papra-intake-emails-no-allowed-origins-are-provided-origin-is so the claim can be checked for contradictions.
