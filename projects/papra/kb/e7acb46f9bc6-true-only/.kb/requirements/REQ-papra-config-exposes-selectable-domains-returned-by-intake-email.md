---
title: Exposes the selectable domains returned by the intake email driver.
status: active
semantic_text: Exposes the selectable domains returned by the intake email driver.
semantic_clauses:
  - Exposes the selectable domains returned by the intake email driver
logic_claims:
  - CLAIM-4E7EC75912DCBE57
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 343b723977466d763a4cd7dcb009934f6b07c0246a28c0e809d2a02276d0159a
semantic_inventory:
  - claim_key: CLAIM-4E7EC75912DCBE57
    claim_text: Exposes the selectable domains returned by the intake email driver
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 66
    subjects:
      - config.get_public_config
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-584'
  recorded_at: '2025-03-10T17:47:50.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:config
id: REQ-papra-config-exposes-selectable-domains-returned-by-intake-email
type: req
---
Exposes the selectable domains returned by the intake email driver.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/config/config.models.test.ts (config models > getPublicConfig).

## Source

Source: Papra server behaviour notes - SRV-584
