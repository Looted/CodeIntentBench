---
title: The asset URL signer never writes ASSET_URL_SIGNING_KEY or a value derived from it to its logs; startup logs show only whether it is set.
status: active
semantic_text: The asset URL signer never writes ASSET_URL_SIGNING_KEY or a value derived from it to its logs; startup logs show only whether it is set.
semantic_clauses:
  - The asset URL signer never writes ASSET_URL_SIGNING_KEY or a value derived from it to its logs
  - startup logs show only whether it is set
logic_claims:
  - CLAIM-3FB46F6A400F3579
  - CLAIM-2AB50BBAACA14801
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 0a9b86d421221d8a7dcd38a49c44312414f82e406fab97302f0b363fa8ae5eb2
semantic_inventory:
  - claim_key: CLAIM-3FB46F6A400F3579
    claim_text: The asset URL signer never writes ASSET_URL_SIGNING_KEY or a value derived from it to its logs
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 94
    subjects:
      - infra.asset_url_signing_key
  - claim_key: CLAIM-2AB50BBAACA14801
    claim_text: startup logs show only whether it is set
    role: descriptive
    status: modeled
    span:
      start: 96
      end: 136
    subjects:
      - infra.asset_url_signing_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Infrastructure runbook: INF-134'
  recorded_at: '2025-11-10T16:05:19.000Z'
tags:
  - bootstrap
  - knowledge-source:infra-decisions
  - component:infra
rationale: A debug log line had printed the configuration, the secret included.
id: REQ-infra-asset-url-signing-key-never-logged
type: req
---
The asset URL signer never writes ASSET_URL_SIGNING_KEY or a value derived from it to its logs; startup logs show only whether it is set.

## Context

A debug log line had printed the configuration, the secret included.

## Source

> fix(infra): keep ASSET_URL_SIGNING_KEY out of logs (INF-134)

Source: Infrastructure runbook - INF-134
