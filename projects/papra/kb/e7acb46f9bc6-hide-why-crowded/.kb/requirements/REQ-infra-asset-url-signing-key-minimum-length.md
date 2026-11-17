---
title: ASSET_URL_SIGNING_KEY must be at least 40 characters long.
status: active
semantic_text: ASSET_URL_SIGNING_KEY must be at least 40 characters long.
semantic_clauses:
  - ASSET_URL_SIGNING_KEY must be at least 40 characters long
logic_claims:
  - CLAIM-A0EC625722081CC9
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 12295cfe5c5d56be9aa533774cdcd5a684273b4f6a330b02ff0cfca7180f07a9
semantic_inventory:
  - claim_key: CLAIM-A0EC625722081CC9
    claim_text: ASSET_URL_SIGNING_KEY must be at least 40 characters long
    role: normative
    status: modeled
    span:
      start: 0
      end: 57
    subjects:
      - infra.asset_url_signing_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Infrastructure runbook: INF-111'
  recorded_at: '2025-10-08T15:53:07.000Z'
tags:
  - bootstrap
  - knowledge-source:infra-decisions
  - component:infra
id: REQ-infra-asset-url-signing-key-minimum-length
type: req
---
ASSET_URL_SIGNING_KEY must be at least 40 characters long.

## Context

Reason not stated.

## Source

> feat(infra): ASSET_URL_SIGNING_KEY minimum length 40 (INF-111)

Source: Infrastructure runbook - INF-111
