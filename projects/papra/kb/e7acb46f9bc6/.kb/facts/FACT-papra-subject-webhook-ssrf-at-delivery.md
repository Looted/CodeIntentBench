---
title: SSRF validation at webhook delivery
status: active
fact_kind: subject
subject_key: webhook.ssrf_at_delivery
canonical_key: webhook.ssrf_at_delivery
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs: app 26.4.1 (#1099)'
  recorded_at: '2026-11-16T10:23:11.296Z'
id: FACT-papra-subject-webhook-ssrf-at-delivery
type: fact
---
The SSRF check run on the resolved address when a webhook request is sent, in addition to the check at creation and update.