---
title: email.sending docker_default_mode = dry_run
status: deprecated
fact_kind: property_value
subject_key: email.sending
property_key: docker_default_mode
operator: eq
value_type: string
value_string: dry_run
claim_key: CLAIM-AD99A9FEEEA241E9
claim_text: 'In the Docker image emails are not sent by default: the email setting is dry-run (EMAILS_DRY_RUN)'
text_ref: REQ-papra-docker-email-dry-run-default
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 0.5.1 changelog, #302: Set email setting to dry-run by default in docker'
  recorded_at: '2026-11-16T10:23:39.947Z'
id: FACT-papra-email-sending-docker-default-mode-v1
type: fact
---
In the Docker image emails are not sent by default: the email setting is dry-run (EMAILS_DRY_RUN).

Modeled from REQ-papra-docker-email-dry-run-default so the claim can be checked for contradictions.
