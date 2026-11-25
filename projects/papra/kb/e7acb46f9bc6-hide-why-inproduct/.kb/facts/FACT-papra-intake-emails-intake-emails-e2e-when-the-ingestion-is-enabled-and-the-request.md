---
title: intake_emails.intake_emails_e2e when_the_ingestion_is_enabled_and_the_request = True
status: active
fact_kind: property_value
subject_key: intake_emails.intake_emails_e2e
property_key: when_the_ingestion_is_enabled_and_the_request
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-8C941F502CE89DCA
claim_text: When the ingestion is enabled and the request signature is valid, the email attachments are added to the organization
text_ref: REQ-papra-intake-emails-ingestion-is-enabled-and-request-signature-is
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1425'
  recorded_at: '2025-08-21T17:30:30.000Z'
id: FACT-papra-intake-emails-intake-emails-e2e-when-the-ingestion-is-enabled-and-the-request
type: fact
---
When the ingestion is enabled and the request signature is valid, the email attachments are added to the organization.

Modeled from REQ-papra-intake-emails-ingestion-is-enabled-and-request-signature-is so the claim can be checked for contradictions.
