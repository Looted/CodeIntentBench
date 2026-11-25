---
title: A support team can hold at most 50 support macros in the Papra Cloud back office; the limit is configurable and 50 is the default.
status: active
semantic_text: A support team can hold at most 50 support macros in the Papra Cloud back office; the limit is configurable and 50 is the default.
semantic_clauses:
  - A support team can hold at most 50 support macros in the Papra Cloud back office
  - the limit is configurable and 50 is the default
logic_claims:
  - CLAIM-A93720A1748FF743
  - CLAIM-2611853812894871
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 00f837489d80ef1e14cee022b1d6713c591bb59bf037b789e3ea3839e0848024
semantic_inventory:
  - claim_key: CLAIM-A93720A1748FF743
    claim_text: A support team can hold at most 50 support macros in the Papra Cloud back office
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 80
    subjects:
      - backoffice.support_macros
  - claim_key: CLAIM-2611853812894871
    claim_text: the limit is configurable and 50 is the default
    role: descriptive
    status: modeled
    span:
      start: 82
      end: 129
    subjects:
      - backoffice.support_macros
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-109'
  recorded_at: '2026-07-23T12:19:05.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
rationale: Lists of support macros are loaded in one request, and beyond a few hundred the screen became slow.
id: REQ-backoffice-support-macros-maximum-count
type: req
---
A support team can hold at most 50 support macros in the Papra Cloud back office; the limit is configurable and 50 is the default.

## Context

Lists of support macros are loaded in one request, and beyond a few hundred the screen became slow.

## Why this changed

OPS-109 replaced the value recorded in OPS-39 and gives this reason for the change: The earlier limit of 10 was reached by ordinary use within a few weeks of release.

## Source

> feat(backoffice): limit support macros per support team (OPS-109)

Source: Papra Cloud back office handbook - OPS-109
