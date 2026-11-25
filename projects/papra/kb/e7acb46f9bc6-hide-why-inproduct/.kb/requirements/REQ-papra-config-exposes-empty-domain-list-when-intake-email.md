---
title: Exposes an empty domain list when the intake email driver has no selectable domains.
status: active
semantic_text: Exposes an empty domain list when the intake email driver has no selectable domains.
semantic_clauses:
  - Exposes an empty domain list when the intake email driver has no selectable domains
logic_claims:
  - CLAIM-790C9E6CDC73501C
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 701a1ea7319667c31cb1c5abc21a86742d1ab0c6e9582b4a03b8c42ecb3ad1c6
semantic_inventory:
  - claim_key: CLAIM-790C9E6CDC73501C
    claim_text: Exposes an empty domain list when the intake email driver has no selectable domains
    role: normative
    status: modeled
    span:
      start: 0
      end: 83
    subjects:
      - config.get_public_config
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-580'
  recorded_at: '2025-08-28T10:36:01.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:config
id: REQ-papra-config-exposes-empty-domain-list-when-intake-email
type: req
---
Exposes an empty domain list when the intake email driver has no selectable domains.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/config/config.models.test.ts (config models > getPublicConfig).

## Source

Source: Papra server behaviour notes - SRV-580
