---
title: An organization can create at most 100 tags.
status: closed
semantic_text: An organization can create at most 100 tags.
semantic_clauses:
  - An organization can create at most 100 tags
logic_claims:
  - CLAIM-EE91308C106AF803
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 947f86f963b3864540adc43a2d86af1f9f67d4e13796f8ac1d3d06712686e8ef
semantic_inventory:
  - claim_key: CLAIM-EE91308C106AF803
    claim_text: An organization can create at most 100 tags
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 43
    subjects:
      - tags.per_organization_limit
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server decision log: SRV-118'
  recorded_at: '2025-07-14T09:12:40.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-decisions
  - component:tags
id: REQ-papra-organization-tag-count-cap
type: req
---
An organization can create at most 100 tags.

## Context

Reason not stated.

## Source

> Organizations are capped at 100 tags. (SRV-118)

Source: Papra server decision log - SRV-118
