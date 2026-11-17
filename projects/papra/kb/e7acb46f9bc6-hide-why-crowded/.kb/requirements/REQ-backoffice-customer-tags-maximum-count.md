---
title: At most 30 customer tags can be created per support team in the Papra Cloud back office; the limit is fixed.
status: active
semantic_text: At most 30 customer tags can be created per support team in the Papra Cloud back office; the limit is fixed.
semantic_clauses:
  - At most 30 customer tags can be created per support team in the Papra Cloud back office
  - the limit is fixed
logic_claims:
  - CLAIM-61E0846452D69F79
  - CLAIM-9B85215C347D6099
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: d9897639028bbff06ea3ce61076aa2f7dd7fbbe72409da653cc1f61d48d8364d
semantic_inventory:
  - claim_key: CLAIM-61E0846452D69F79
    claim_text: At most 30 customer tags can be created per support team in the Papra Cloud back office
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 87
    subjects:
      - backoffice.customer_tags
  - claim_key: CLAIM-9B85215C347D6099
    claim_text: the limit is fixed
    role: descriptive
    status: modeled
    span:
      start: 89
      end: 107
    subjects:
      - backoffice.customer_tags
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-105'
  recorded_at: '2026-02-09T09:50:10.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
rationale: Lists of customer tags are loaded in one request, and beyond a few hundred the screen became slow.
id: REQ-backoffice-customer-tags-maximum-count
type: req
---
At most 30 customer tags can be created per support team in the Papra Cloud back office; the limit is fixed.

## Context

Lists of customer tags are loaded in one request, and beyond a few hundred the screen became slow.

## Why this changed

OPS-105 replaced the value recorded in OPS-65 and gives this reason for the change: The earlier limit of 10 was reached by ordinary use within a few weeks of release.

## Source

> feat(backoffice): limit customer tags per support team (OPS-105)

Source: Papra Cloud back office handbook - OPS-105
