---
title: The template marketplace refuses the example value of MARKETPLACE_AUTH_SECRET from its documentation, in every environment.
status: active
semantic_text: The template marketplace refuses the example value of MARKETPLACE_AUTH_SECRET from its documentation, in every environment.
semantic_clauses:
  - The template marketplace refuses the example value of MARKETPLACE_AUTH_SECRET from its documentation, in every environment
logic_claims:
  - CLAIM-310C60BD0668E104
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 982ad27a7115e14fa2acf07d61eec1355d3d23428e936459fd124ca5d8d77909
semantic_inventory:
  - claim_key: CLAIM-310C60BD0668E104
    claim_text: The template marketplace refuses the example value of MARKETPLACE_AUTH_SECRET from its documentation, in every environment
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 122
    subjects:
      - marketplace.marketplace_auth_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Template marketplace decision log: MKT-124'
  recorded_at: '2026-09-11T11:27:23.000Z'
tags:
  - bootstrap
  - knowledge-source:marketplace-decisions
  - component:marketplace
rationale: The example value was found in use on public deployments.
id: REQ-marketplace-marketplace-auth-secret-example-value-refused
type: req
---
The template marketplace refuses the example value of MARKETPLACE_AUTH_SECRET from its documentation, in every environment.

## Context

The example value was found in use on public deployments.

## Source

> feat(marketplace): refuse the documented example MARKETPLACE_AUTH_SECRET (MKT-124)

Source: Template marketplace decision log - MKT-124
