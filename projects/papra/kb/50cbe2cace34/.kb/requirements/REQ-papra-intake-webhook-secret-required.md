---
title: 'The intake email webhook secret (INTAKE_EMAILS_WEBHOOK_SECRET) has no default value: when intake emails are enabled the server refuses to start without it, a…'
status: active
semantic_text: 'The intake email webhook secret (INTAKE_EMAILS_WEBHOOK_SECRET) has no default value: when intake emails are enabled the server refuses to start without it, and the ingest endpoint rejects a request when no secret is configured; a secret that is set must be between 16 and 128 characters.'
semantic_clauses:
  - The intake email webhook secret (INTAKE_EMAILS_WEBHOOK_SECRET) has no default value
  - when intake emails are enabled the server refuses to start without it
  - the ingest endpoint rejects a request when no secret is configured
  - a secret that is set must be between 16 and 128 characters
logic_claims:
  - CLAIM-40FEF5948ABB53B3
  - CLAIM-600217F4D2875452
  - CLAIM-E81359F6D0AD5403
  - CLAIM-9906EDF4469B7387
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: df7ea918c0c3a3dee4ab714e1f5a787d54efd76328afa1435bc9065524064cc2
semantic_inventory:
  - claim_key: CLAIM-40FEF5948ABB53B3
    claim_text: The intake email webhook secret (INTAKE_EMAILS_WEBHOOK_SECRET) has no default value
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 83
    subjects:
      - intake_email.webhook_secret
  - claim_key: CLAIM-600217F4D2875452
    claim_text: when intake emails are enabled the server refuses to start without it
    role: condition
    status: modeled
    span:
      start: 85
      end: 154
    subjects:
      - intake_email.webhook_secret
  - claim_key: CLAIM-E81359F6D0AD5403
    claim_text: the ingest endpoint rejects a request when no secret is configured
    role: normative
    status: modeled
    span:
      start: 160
      end: 226
    subjects:
      - intake_email.webhook
  - claim_key: CLAIM-9906EDF4469B7387
    claim_text: a secret that is set must be between 16 and 128 characters
    role: normative
    status: modeled
    span:
      start: 228
      end: 286
    subjects:
      - intake_email.webhook_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra merged pull requests: #1502'
  recorded_at: '2026-11-15T22:59:55.852Z'
tags:
  - bootstrap
  - knowledge-source:papra-prs
  - component:intake_emails
rationale: 'The changeset of PR #1502 (2026-09-12): the default was removed "to prevent ingestion of documents from untrusted sources when no secret is provided". The length rule is carried over from PR #892, whose changeset gives the reason "to match the OwlRelay API validation requirements".'
id: REQ-papra-intake-webhook-secret-required
type: req
---
The intake email webhook secret (INTAKE_EMAILS_WEBHOOK_SECRET) has no default value: when intake emails are enabled the server refuses to start without it, and the ingest endpoint rejects a request when no secret is configured; a secret that is set must be between 16 and 128 characters.

## Context

The changeset of PR #1502 (2026-09-12): the default was removed "to prevent ingestion of documents from untrusted sources when no secret is provided". The length rule is carried over from PR #892, whose changeset gives the reason "to match the OwlRelay API validation requirements".

## Why this changed

PR #1502 (2026-09-12) removed the default value that PR #892 had kept in February 2026. Its changeset says users must now explicitly set a secret, "to prevent ingestion of documents from untrusted sources when no secret is provided".

## Source

> Removed the default value for the intake email webhook validation secret to prevent ingestion of documents from untrusted sources when no secret is provided. Users must now explicitly set a secret using `INTAKE_EMAILS_WEBHOOK_SECRET`.

Source: papra-hq/papra merged pull requests - #1502
