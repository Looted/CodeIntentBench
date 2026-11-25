---
title: intake_emails.process_intake_email_ingestion when_an_email_is_send_to_multiple_intake = True
status: active
fact_kind: property_value
subject_key: intake_emails.process_intake_email_ingestion
property_key: when_an_email_is_send_to_multiple_intake
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-207A393141EF3104
claim_text: When an email is send to multiple intake emails from different organization, the attachments are processed for each of them
text_ref: REQ-papra-intake-emails-email-is-send-to-multiple-intake-emails
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1456'
  recorded_at: '2025-05-24T11:04:17.000Z'
id: FACT-papra-intake-emails-process-intake-email-ingestion-when-an-email-is-send-to-multiple-intake
type: fact
---
When an email is send to multiple intake emails from different organization, the attachments are processed for each of them.

Modeled from REQ-papra-intake-emails-email-is-send-to-multiple-intake-emails so the claim can be checked for contradictions.
