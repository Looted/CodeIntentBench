---
title: The asset URL signer reads ASSET_URL_SIGNING_KEY from the environment only, never from a configuration file.
status: active
semantic_text: The asset URL signer reads ASSET_URL_SIGNING_KEY from the environment only, never from a configuration file.
semantic_clauses:
  - The asset URL signer reads ASSET_URL_SIGNING_KEY from the environment only, never from a configuration file
logic_claims:
  - CLAIM-EEF5B33262645C66
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: ffdbf5c63dbfda07732d7334d1955774ed73aa4fca11e511ba3b5d6677146f11
semantic_inventory:
  - claim_key: CLAIM-EEF5B33262645C66
    claim_text: The asset URL signer reads ASSET_URL_SIGNING_KEY from the environment only, never from a configuration file
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 107
    subjects:
      - infra.asset_url_signing_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Infrastructure runbook: INF-132'
  recorded_at: '2025-06-28T17:37:13.000Z'
tags:
  - bootstrap
  - knowledge-source:infra-decisions
  - component:infra
id: REQ-infra-asset-url-signing-key-source
type: req
---
The asset URL signer reads ASSET_URL_SIGNING_KEY from the environment only, never from a configuration file.

## Context

Reason not stated.

## Source

> feat(infra): where ASSET_URL_SIGNING_KEY is read from (INF-132)

Source: Infrastructure runbook - INF-132
