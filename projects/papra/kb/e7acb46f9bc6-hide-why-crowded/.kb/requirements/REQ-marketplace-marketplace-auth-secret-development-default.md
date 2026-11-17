---
title: The template marketplace uses a fixed development value outside production when MARKETPLACE_AUTH_SECRET is not set.
status: active
semantic_text: The template marketplace uses a fixed development value outside production when MARKETPLACE_AUTH_SECRET is not set.
semantic_clauses:
  - The template marketplace uses a fixed development value outside production when MARKETPLACE_AUTH_SECRET is not set
logic_claims:
  - CLAIM-D72746F3D47DE39D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 6ba49f5f17fe49663e4f347c40cb9af2ea3b9e7cedf889e1b3b54b257b54d9a4
semantic_inventory:
  - claim_key: CLAIM-D72746F3D47DE39D
    claim_text: The template marketplace uses a fixed development value outside production when MARKETPLACE_AUTH_SECRET is not set
    role: normative
    status: modeled
    span:
      start: 0
      end: 114
    subjects:
      - marketplace.marketplace_auth_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Template marketplace decision log: MKT-199'
  recorded_at: '2025-06-09T17:44:05.000Z'
tags:
  - bootstrap
  - knowledge-source:marketplace-decisions
  - component:marketplace
rationale: Contributors should be able to start the service without any setup.
id: REQ-marketplace-marketplace-auth-secret-development-default
type: req
---
The template marketplace uses a fixed development value outside production when MARKETPLACE_AUTH_SECRET is not set.

## Context

Contributors should be able to start the service without any setup.

## Source

> feat(marketplace): MARKETPLACE_AUTH_SECRET outside production (MKT-199)

Source: Template marketplace decision log - MKT-199
