---
title: intake_emails.ingest_email_for_recipient when_no_intake_email_is_found_for_the = True
status: active
fact_kind: property_value
subject_key: intake_emails.ingest_email_for_recipient
property_key: when_no_intake_email_is_found_for_the
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-7CDF5D9A02667CD5
claim_text: When no intake email is found for the recipient, nothing happens, only a log is emitted
text_ref: REQ-papra-intake-emails-no-intake-email-is-found-for-recipient
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1460'
  recorded_at: '2025-08-28T12:35:59.000Z'
id: FACT-papra-intake-emails-ingest-email-for-recipient-when-no-intake-email-is-found-for-the
type: fact
---
When no intake email is found for the recipient, nothing happens, only a log is emitted.

Modeled from REQ-papra-intake-emails-no-intake-email-is-found-for-recipient so the claim can be checked for contradictions.
