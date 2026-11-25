---
title: A password reset link for infrastructure console accounts works once; requesting a new link invalidates the earlier ones.
status: active
semantic_text: A password reset link for infrastructure console accounts works once; requesting a new link invalidates the earlier ones.
semantic_clauses:
  - A password reset link for infrastructure console accounts works once
  - requesting a new link invalidates the earlier ones
logic_claims:
  - CLAIM-20ECA7C8F962B2E1
  - CLAIM-A6758D585E12B6CF
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 0f34083bfb0a67d7543c5f19538dae1bbd99471764b786f86d18456aff179cb0
semantic_inventory:
  - claim_key: CLAIM-20ECA7C8F962B2E1
    claim_text: A password reset link for infrastructure console accounts works once
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 68
    subjects:
      - infra.infrastructure_console_accounts
  - claim_key: CLAIM-A6758D585E12B6CF
    claim_text: requesting a new link invalidates the earlier ones
    role: descriptive
    status: modeled
    span:
      start: 70
      end: 120
    subjects:
      - infra.infrastructure_console_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Infrastructure runbook: INF-175'
  recorded_at: '2025-02-12T10:12:19.000Z'
tags:
  - bootstrap
  - knowledge-source:infra-decisions
  - component:infra
rationale: An old link found in a mailbox months later still worked.
id: REQ-infra-infrastructure-console-accounts-reset-link-single-use
type: req
---
A password reset link for infrastructure console accounts works once; requesting a new link invalidates the earlier ones.

## Context

An old link found in a mailbox months later still worked.

## Source

> feat(infra): single-use reset links (INF-175)

Source: Infrastructure runbook - INF-175
