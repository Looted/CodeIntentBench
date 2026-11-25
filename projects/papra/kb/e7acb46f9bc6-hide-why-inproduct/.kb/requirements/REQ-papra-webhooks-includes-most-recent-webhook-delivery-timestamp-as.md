---
title: Includes the most recent webhook delivery timestamp as lastTriggeredAt.
status: active
semantic_text: Includes the most recent webhook delivery timestamp as lastTriggeredAt.
semantic_clauses:
  - Includes the most recent webhook delivery timestamp as lastTriggeredAt
logic_claims:
  - CLAIM-BD86A07B45BF6169
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 5f0aaf044a27cd8de434ace39294ac0142e5e106830e2b64a330c2cb34fbf949
semantic_inventory:
  - claim_key: CLAIM-BD86A07B45BF6169
    claim_text: Includes the most recent webhook delivery timestamp as lastTriggeredAt
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 70
    subjects:
      - webhooks.get_organization_webhooks
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1876'
  recorded_at: '2025-09-03T15:17:53.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:webhooks
id: REQ-papra-webhooks-includes-most-recent-webhook-delivery-timestamp-as
type: req
---
Includes the most recent webhook delivery timestamp as lastTriggeredAt.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/webhooks/webhooks.repository.test.ts (webhook repository > getOrganizationWebhooks).

## Source

Source: Papra server behaviour notes - SRV-1876
