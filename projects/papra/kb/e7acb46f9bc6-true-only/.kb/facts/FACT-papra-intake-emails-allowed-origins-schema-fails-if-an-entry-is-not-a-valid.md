---
title: intake_emails.allowed_origins_schema fails_if_an_entry_is_not_a_valid = True
status: active
fact_kind: property_value
subject_key: intake_emails.allowed_origins_schema
property_key: fails_if_an_entry_is_not_a_valid
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-8E5E46BEA007190D
claim_text: Fails if an entry is not a valid email address
text_ref: REQ-papra-intake-emails-fails-if-entry-is-not-valid-email
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1441'
  recorded_at: '2026-04-05T09:24:13.000Z'
id: FACT-papra-intake-emails-allowed-origins-schema-fails-if-an-entry-is-not-a-valid
type: fact
---
Fails if an entry is not a valid email address.

Modeled from REQ-papra-intake-emails-fails-if-entry-is-not-valid-email so the claim can be checked for contradictions.
