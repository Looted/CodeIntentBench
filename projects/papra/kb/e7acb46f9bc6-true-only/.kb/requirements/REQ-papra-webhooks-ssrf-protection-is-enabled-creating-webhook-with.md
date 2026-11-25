---
title: When SSRF protection is enabled, creating a webhook with a private IP URL throws ssrf_unsafe_url.
status: active
semantic_text: When SSRF protection is enabled, creating a webhook with a private IP URL throws ssrf_unsafe_url.
semantic_clauses:
  - When SSRF protection is enabled, creating a webhook with a private IP URL throws ssrf_unsafe_url
logic_claims:
  - CLAIM-8374B8D563763392
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c867e21be942fcb63b0640d2499fef76614cc4d2afbfc20b35651d4996d62893
semantic_inventory:
  - claim_key: CLAIM-8374B8D563763392
    claim_text: When SSRF protection is enabled, creating a webhook with a private IP URL throws ssrf_unsafe_url
    role: condition
    status: modeled
    span:
      start: 0
      end: 96
    subjects:
      - webhooks.create_webhook
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1884'
  recorded_at: '2026-03-25T13:21:37.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:webhooks
id: REQ-papra-webhooks-ssrf-protection-is-enabled-creating-webhook-with
type: req
---
When SSRF protection is enabled, creating a webhook with a private IP URL throws ssrf_unsafe_url.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/webhooks/webhooks.usecases.test.ts (webhook usecases > createWebhook).

## Source

Source: Papra server behaviour notes - SRV-1884
