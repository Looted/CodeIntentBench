---
title: The template marketplace reads MARKETPLACE_AUTH_SECRET from the environment only, never from a configuration file.
status: active
semantic_text: The template marketplace reads MARKETPLACE_AUTH_SECRET from the environment only, never from a configuration file.
semantic_clauses:
  - The template marketplace reads MARKETPLACE_AUTH_SECRET from the environment only, never from a configuration file
logic_claims:
  - CLAIM-87A3936D88842DAE
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 6af4c2720ebcdb0e32bbef8484fd989cf9d7453d80745a40e902648c2b68f2c5
semantic_inventory:
  - claim_key: CLAIM-87A3936D88842DAE
    claim_text: The template marketplace reads MARKETPLACE_AUTH_SECRET from the environment only, never from a configuration file
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 113
    subjects:
      - marketplace.marketplace_auth_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Template marketplace decision log: MKT-195'
  recorded_at: '2026-07-12T10:03:23.000Z'
tags:
  - bootstrap
  - knowledge-source:marketplace-decisions
  - component:marketplace
id: REQ-marketplace-marketplace-auth-secret-source
type: req
---
The template marketplace reads MARKETPLACE_AUTH_SECRET from the environment only, never from a configuration file.

## Context

Reason not stated.

## Source

> feat(marketplace): where MARKETPLACE_AUTH_SECRET is read from (MKT-195)

Source: Template marketplace decision log - MKT-195
