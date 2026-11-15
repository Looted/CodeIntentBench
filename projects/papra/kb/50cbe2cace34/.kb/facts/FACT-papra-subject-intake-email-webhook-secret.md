---
title: Intake email webhook secret
status: active
fact_kind: subject
subject_key: intake_email.webhook_secret
canonical_key: intake_email.webhook_secret
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra merged pull requests: #892'
  recorded_at: '2026-11-15T22:59:48.754Z'
id: FACT-papra-subject-intake-email-webhook-secret
type: fact
---
The secret (INTAKE_EMAILS_WEBHOOK_SECRET) shared with the email relay and used to verify the signature of every request to the intake email webhook. It is a server setting, not a per-organization value.