---
title: A billing account can own at most 50 organizations in the Papra Cloud back office; the limit is configured per deployment and 50 is the default.
status: active
semantic_text: A billing account can own at most 50 organizations in the Papra Cloud back office; the limit is configured per deployment and 50 is the default.
semantic_clauses:
  - A billing account can own at most 50 organizations in the Papra Cloud back office
  - the limit is configured per deployment and 50 is the default
logic_claims:
  - CLAIM-9B2E08FD0D2B82C0
  - CLAIM-441789201020C56C
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 40f8503b3479d9c7458ff863c39ef6832d421acb0daef3a822ddad3b31be8cf7
semantic_inventory:
  - claim_key: CLAIM-9B2E08FD0D2B82C0
    claim_text: A billing account can own at most 50 organizations in the Papra Cloud back office
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 81
    subjects:
      - backoffice.organizations
  - claim_key: CLAIM-441789201020C56C
    claim_text: the limit is configured per deployment and 50 is the default
    role: descriptive
    status: modeled
    span:
      start: 83
      end: 143
    subjects:
      - backoffice.organizations
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-228'
  recorded_at: '2025-03-13T13:42:46.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
id: REQ-backoffice-organizations-maximum-count
type: req
---
A billing account can own at most 50 organizations in the Papra Cloud back office; the limit is configured per deployment and 50 is the default.

## Context

Reason not stated.

## Source

> feat(backoffice): limit organizations per billing account (OPS-228)

Source: Papra Cloud back office handbook - OPS-228
