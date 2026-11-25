---
title: When SSRF protection is enabled, updating a webhook with a private IP URL throws ssrf_unsafe_url.
status: active
semantic_text: When SSRF protection is enabled, updating a webhook with a private IP URL throws ssrf_unsafe_url.
semantic_clauses:
  - When SSRF protection is enabled, updating a webhook with a private IP URL throws ssrf_unsafe_url
logic_claims:
  - CLAIM-F83F78FBBFB5438A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 0d185ec1672c7981ce85e3ff26ed15c41beda16fbebe6f192048426301207f68
semantic_inventory:
  - claim_key: CLAIM-F83F78FBBFB5438A
    claim_text: When SSRF protection is enabled, updating a webhook with a private IP URL throws ssrf_unsafe_url
    role: condition
    status: modeled
    span:
      start: 0
      end: 96
    subjects:
      - webhooks.update_webhook
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1885'
  recorded_at: '2026-03-18T13:13:32.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:webhooks
id: REQ-papra-webhooks-ssrf-protection-is-enabled-updating-webhook-with
type: req
---
When SSRF protection is enabled, updating a webhook with a private IP URL throws ssrf_unsafe_url.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/webhooks/webhooks.usecases.test.ts (webhook usecases > updateWebhook).

## Source

Source: Papra server behaviour notes - SRV-1885
