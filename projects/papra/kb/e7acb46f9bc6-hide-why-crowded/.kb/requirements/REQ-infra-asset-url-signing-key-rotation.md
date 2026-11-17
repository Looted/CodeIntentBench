---
title: ASSET_URL_SIGNING_KEY is rotated every 180 days; the previous value stays valid for 24 hours after a rotation.
status: active
semantic_text: ASSET_URL_SIGNING_KEY is rotated every 180 days; the previous value stays valid for 24 hours after a rotation.
semantic_clauses:
  - ASSET_URL_SIGNING_KEY is rotated every 180 days
  - the previous value stays valid for 24 hours after a rotation
logic_claims:
  - CLAIM-EB3E83A34BD11DC6
  - CLAIM-A45280A30BC5D577
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 859e5988179f9b0f686563a12c1c3891349b7ba94dd6462fb694c2711053cd36
semantic_inventory:
  - claim_key: CLAIM-EB3E83A34BD11DC6
    claim_text: ASSET_URL_SIGNING_KEY is rotated every 180 days
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 47
    subjects:
      - infra.asset_url_signing_key
  - claim_key: CLAIM-A45280A30BC5D577
    claim_text: the previous value stays valid for 24 hours after a rotation
    role: descriptive
    status: modeled
    span:
      start: 49
      end: 109
    subjects:
      - infra.asset_url_signing_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Infrastructure runbook: INF-124'
  recorded_at: '2026-03-16T12:03:15.000Z'
tags:
  - bootstrap
  - knowledge-source:infra-decisions
  - component:infra
rationale: Without an overlap, a rotation of the URL signing key broke requests already on their way.
id: REQ-infra-asset-url-signing-key-rotation
type: req
---
ASSET_URL_SIGNING_KEY is rotated every 180 days; the previous value stays valid for 24 hours after a rotation.

## Context

Without an overlap, a rotation of the URL signing key broke requests already on their way.

## Source

> chore(infra): rotate ASSET_URL_SIGNING_KEY every 180 days (INF-124)

Source: Infrastructure runbook - INF-124
