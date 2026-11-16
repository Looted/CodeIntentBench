---
title: The webhook SSRF check is also enforced when a webhook request is sent, not only when the URL is saved.
status: active
semantic_text: The webhook SSRF check is also enforced when a webhook request is sent, not only when the URL is saved.
semantic_clauses:
  - The webhook SSRF check is also enforced when a webhook request is sent, not only when the URL is saved
logic_claims:
  - CLAIM-0C829AB10B1DABB1
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: bedb52cecf680af760efe2ab220b893394051b9d864369c2c01fc2fa9d57f006
semantic_inventory:
  - claim_key: CLAIM-0C829AB10B1DABB1
    claim_text: The webhook SSRF check is also enforced when a webhook request is sent, not only when the URL is saved
    role: normative
    status: modeled
    span:
      start: 0
      end: 102
    subjects:
      - webhook.ssrf_at_delivery
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.4.1 changelog, #1099: Webhooks ssrf validation is now enforced when sending webhoo'
  recorded_at: '2026-11-16T10:34:10.401Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:webhooks
rationale: 'The changeset of #1099 (2026-05-18): "preventing potential TOCTOU dns rebinding attacks (the exploitation window was very small and only theoretical though)".'
id: REQ-papra-webhook-ssrf-at-delivery
type: req
---
The webhook SSRF check is also enforced when a webhook request is sent, not only when the URL is saved.

## Context

The changeset of #1099 (2026-05-18): "preventing potential TOCTOU dns rebinding attacks (the exploitation window was very small and only theoretical though)".

## Source

> Webhooks ssrf validation is now enforced when sending webhook requests, preventing potential TOCTOU dns rebinding attacks (the exploitation window was very small and only theoretical though).

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 26.4.1 changelog, #1099: Webhooks ssrf validation is now enforced when sending webhoo
