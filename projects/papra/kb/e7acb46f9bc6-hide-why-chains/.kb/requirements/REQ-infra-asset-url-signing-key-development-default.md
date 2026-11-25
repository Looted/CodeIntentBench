---
title: The asset URL signer requires ASSET_URL_SIGNING_KEY in every environment, development included.
status: active
semantic_text: The asset URL signer requires ASSET_URL_SIGNING_KEY in every environment, development included.
semantic_clauses:
  - The asset URL signer requires ASSET_URL_SIGNING_KEY in every environment, development included
logic_claims:
  - CLAIM-2F345FA6C36B9EC9
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: ab0f1565d42de6af718244990422c96c05fe340f73dbc031f374eafb49796f84
semantic_inventory:
  - claim_key: CLAIM-2F345FA6C36B9EC9
    claim_text: The asset URL signer requires ASSET_URL_SIGNING_KEY in every environment, development included
    role: normative
    status: modeled
    span:
      start: 0
      end: 94
    subjects:
      - infra.asset_url_signing_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Infrastructure runbook: INF-139'
  recorded_at: '2026-07-21T14:32:41.000Z'
tags:
  - bootstrap
  - knowledge-source:infra-decisions
  - component:infra
rationale: Contributors should be able to start the service without any setup.
id: REQ-infra-asset-url-signing-key-development-default
type: req
---
The asset URL signer requires ASSET_URL_SIGNING_KEY in every environment, development included.

## Context

Contributors should be able to start the service without any setup.

## Source

> feat(infra): ASSET_URL_SIGNING_KEY outside production (INF-139)

Source: Infrastructure runbook - INF-139
