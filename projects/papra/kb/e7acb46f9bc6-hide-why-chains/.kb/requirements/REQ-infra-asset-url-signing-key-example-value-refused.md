---
title: The asset URL signer refuses the example value of ASSET_URL_SIGNING_KEY from its documentation, in every environment.
status: active
semantic_text: The asset URL signer refuses the example value of ASSET_URL_SIGNING_KEY from its documentation, in every environment.
semantic_clauses:
  - The asset URL signer refuses the example value of ASSET_URL_SIGNING_KEY from its documentation, in every environment
logic_claims:
  - CLAIM-CEE55219A7791C16
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: ebda9c37a2d904a885034dbdd03d7ea1a018c29921d0844ff54e954df1816129
semantic_inventory:
  - claim_key: CLAIM-CEE55219A7791C16
    claim_text: The asset URL signer refuses the example value of ASSET_URL_SIGNING_KEY from its documentation, in every environment
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 116
    subjects:
      - infra.asset_url_signing_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Infrastructure runbook: INF-116'
  recorded_at: '2025-09-12T09:14:31.000Z'
tags:
  - bootstrap
  - knowledge-source:infra-decisions
  - component:infra
rationale: The example value was found in use on public deployments.
id: REQ-infra-asset-url-signing-key-example-value-refused
type: req
---
The asset URL signer refuses the example value of ASSET_URL_SIGNING_KEY from its documentation, in every environment.

## Context

The example value was found in use on public deployments.

## Source

> feat(infra): refuse the documented example ASSET_URL_SIGNING_KEY (INF-116)

Source: Infrastructure runbook - INF-116
