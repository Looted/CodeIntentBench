---
title: intake_emails.intake_email_ingestion_email_field_schema fails_if_the_parsed_json_does_not_match = True
status: active
fact_kind: property_value
subject_key: intake_emails.intake_email_ingestion_email_field_schema
property_key: fails_if_the_parsed_json_does_not_match
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-64857DA14085E84C
claim_text: Fails if the parsed JSON does not match the meta schema
text_ref: REQ-papra-intake-emails-fails-if-parsed-json-does-not-match
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1442'
  recorded_at: '2025-10-05T12:49:00.000Z'
id: FACT-papra-intake-emails-intake-email-ingestion-email-field-schema-fails-if-the-parsed-json-does-not-match
type: fact
---
Fails if the parsed JSON does not match the meta schema.

Modeled from REQ-papra-intake-emails-fails-if-parsed-json-does-not-match so the claim can be checked for contradictions.
