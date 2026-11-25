---
title: intake_emails.ensure_intake_email_webhook_secretis_set_when_intake_emails_are_enabled make_sure_that_the_webhook_secret_is_set = True
status: active
fact_kind: property_value
subject_key: intake_emails.ensure_intake_email_webhook_secretis_set_when_intake_emails_are_enabled
property_key: make_sure_that_the_webhook_secret_is_set
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-0926DCAFBF473633
claim_text: Make sure that the webhook secret is set when intake emails are enabled, just check the presence of the secret, not its validity, it's handled by the config schema
text_ref: REQ-papra-intake-emails-make-sure-that-webhook-secret-is-set
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1426'
  recorded_at: '2025-05-01T17:21:02.000Z'
id: FACT-papra-intake-emails-ensure-intake-email-webhook-secretis-set-when-intake-emails-are-enabled-make-sure-that-the-webhook-secret-is-set
type: fact
---
Make sure that the webhook secret is set when intake emails are enabled, just check the presence of the secret, not its validity, it's handled by the config schema.

Modeled from REQ-papra-intake-emails-make-sure-that-webhook-secret-is-set so the claim can be checked for contradictions.
