---
title: Webhook URL SSRF protection
status: active
fact_kind: subject
subject_key: webhook.url_ssrf_protection
canonical_key: webhook.url_ssrf_protection
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra merged pull requests: #993'
  recorded_at: '2026-11-16T10:30:36.689Z'
id: FACT-papra-subject-webhook-url-ssrf-protection
type: fact
---
The validation of an organization webhook's URL against private, loopback and reserved addresses (WEBHOOK_SSRF_PROTECTION_ENABLED), with an instance allow list of trusted hostnames (WEBHOOK_URL_ALLOWED_HOSTNAMES).