---
title: Assigns displayOrder based on array position.
status: active
semantic_text: Assigns displayOrder based on array position.
semantic_clauses:
  - Assigns displayOrder based on array position
logic_claims:
  - CLAIM-B1324052B8B6E71F
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 3e4056c0589ece82a4ed5146992d9cdeb919e2a66da7cbfbe4f86f9a431bb3b9
semantic_inventory:
  - claim_key: CLAIM-B1324052B8B6E71F
    claim_text: Assigns displayOrder based on array position
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 44
    subjects:
      - custom_properties.sync_select_options
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-628'
  recorded_at: '2025-10-14T16:39:26.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:custom-properties
id: REQ-papra-custom-properties-assigns-displayorder-based-on-array-position
type: req
---
Assigns displayOrder based on array position.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/custom-properties/options/custom-properties-options.repository.test.ts (custom-properties-options repository > syncSelectOptions).

## Source

Source: Papra server behaviour notes - SRV-628
