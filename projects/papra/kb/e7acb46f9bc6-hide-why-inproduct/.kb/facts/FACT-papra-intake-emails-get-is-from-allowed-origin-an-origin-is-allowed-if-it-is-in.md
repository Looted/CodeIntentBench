---
title: intake_emails.get_is_from_allowed_origin an_origin_is_allowed_if_it_is_in = True
status: active
fact_kind: property_value
subject_key: intake_emails.get_is_from_allowed_origin
property_key: an_origin_is_allowed_if_it_is_in
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-773447B954DBBE03
claim_text: An origin is allowed if it is in the list of the intake email allowed origins email address
text_ref: REQ-papra-intake-emails-origin-is-allowed-if-it-is-in
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1430'
  recorded_at: '2025-12-24T17:11:28.000Z'
id: FACT-papra-intake-emails-get-is-from-allowed-origin-an-origin-is-allowed-if-it-is-in
type: fact
---
An origin is allowed if it is in the list of the intake email allowed origins email address.

Modeled from REQ-papra-intake-emails-origin-is-allowed-if-it-is-in so the claim can be checked for contradictions.
