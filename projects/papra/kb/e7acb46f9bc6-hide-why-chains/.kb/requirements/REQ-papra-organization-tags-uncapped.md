---
title: An organization can create any number of tags.
status: closed
semantic_text: An organization can create any number of tags.
semantic_clauses:
  - An organization can create any number of tags
logic_claims:
  - CLAIM-406FE166D1F8B5A1
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: aaad8b1085f6b5f477cbfbf8f3116202ad6ea115fbfe8e29f36fa88083928367
semantic_inventory:
  - claim_key: CLAIM-406FE166D1F8B5A1
    claim_text: An organization can create any number of tags
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 45
    subjects:
      - tags.per_organization_limit
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server decision log: SRV-164'
  recorded_at: '2025-12-02T10:41:05.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-decisions
  - component:tags
id: REQ-papra-organization-tags-uncapped
type: req
---
An organization can create any number of tags.

## Context

Reason not stated.

## Why this changed

Teams importing existing archives hit the 100-tag cap on their first import.

## Source

> Removed the cap on the number of tags in an organization. (SRV-164)

Source: Papra server decision log - SRV-164
