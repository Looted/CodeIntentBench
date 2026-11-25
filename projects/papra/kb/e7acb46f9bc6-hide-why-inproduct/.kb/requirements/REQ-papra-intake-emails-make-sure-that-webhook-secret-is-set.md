---
title: Make sure that the webhook secret is set when intake emails are enabled, just check the presence of the secret, not its validity, it's handled by the config…
status: active
semantic_text: Make sure that the webhook secret is set when intake emails are enabled, just check the presence of the secret, not its validity, it's handled by the config schema.
semantic_clauses:
  - Make sure that the webhook secret is set when intake emails are enabled, just check the presence of the secret, not its validity, it's handled by the config schema
logic_claims:
  - CLAIM-0926DCAFBF473633
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 057d03c945236bf8eb9afc4a11aa84c2b036ca47dcf4837451f81a7c0614229f
semantic_inventory:
  - claim_key: CLAIM-0926DCAFBF473633
    claim_text: Make sure that the webhook secret is set when intake emails are enabled, just check the presence of the secret, not its validity, it's handled by the config schema
    role: normative
    status: modeled
    span:
      start: 0
      end: 163
    subjects:
      - intake_emails.ensure_intake_email_webhook_secretis_set_when_intake_emails_are_enabled
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1426'
  recorded_at: '2025-05-01T17:21:02.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:intake-emails
id: REQ-papra-intake-emails-make-sure-that-webhook-secret-is-set
type: req
---
Make sure that the webhook secret is set when intake emails are enabled, just check the presence of the secret, not its validity, it's handled by the config schema.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/intake-emails/intake-emails.config.models.test.ts (intake-emails.config.models > ensureIntakeEmailWebhookSecretisSetWhenIntakeEmailsAreEnabled).

## Source

Source: Papra server behaviour notes - SRV-1426
