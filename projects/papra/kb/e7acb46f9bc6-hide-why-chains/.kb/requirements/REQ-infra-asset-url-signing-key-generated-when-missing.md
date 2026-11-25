---
title: The asset URL signer generates a random URL signing key at startup when ASSET_URL_SIGNING_KEY is not set; it logs a warning that values signed before a resta…
status: active
semantic_text: The asset URL signer generates a random URL signing key at startup when ASSET_URL_SIGNING_KEY is not set; it logs a warning that values signed before a restart stop verifying.
semantic_clauses:
  - The asset URL signer generates a random URL signing key at startup when ASSET_URL_SIGNING_KEY is not set
  - it logs a warning that values signed before a restart stop verifying
logic_claims:
  - CLAIM-D2C648D3003DC4A6
  - CLAIM-74CA22345F9A5AC3
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f5b73c084f0cd201ac22ed50db39f771c356b7b7a4a4bc446436f25c416cd712
semantic_inventory:
  - claim_key: CLAIM-D2C648D3003DC4A6
    claim_text: The asset URL signer generates a random URL signing key at startup when ASSET_URL_SIGNING_KEY is not set
    role: normative
    status: modeled
    span:
      start: 0
      end: 104
    subjects:
      - infra.asset_url_signing_key
  - claim_key: CLAIM-74CA22345F9A5AC3
    claim_text: it logs a warning that values signed before a restart stop verifying
    role: normative
    status: modeled
    span:
      start: 106
      end: 174
    subjects:
      - infra.asset_url_signing_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Infrastructure runbook: INF-103'
  recorded_at: '2025-10-24T14:33:51.000Z'
tags:
  - bootstrap
  - knowledge-source:infra-decisions
  - component:infra
rationale: It is run mostly as a one-off container, and a refused start was the most common support question.
id: REQ-infra-asset-url-signing-key-generated-when-missing
type: req
---
The asset URL signer generates a random URL signing key at startup when ASSET_URL_SIGNING_KEY is not set; it logs a warning that values signed before a restart stop verifying.

## Context

It is run mostly as a one-off container, and a refused start was the most common support question.

## Source

> feat(infra): generate ASSET_URL_SIGNING_KEY when unset (INF-103)

Source: Infrastructure runbook - INF-103
