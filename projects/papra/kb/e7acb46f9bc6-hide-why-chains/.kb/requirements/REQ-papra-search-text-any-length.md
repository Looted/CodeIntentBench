---
title: A search query can be of any length.
status: closed
semantic_text: A search query can be of any length.
semantic_clauses:
  - A search query can be of any length
logic_claims:
  - CLAIM-85B5119BBD963A6D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 564c3a8920e3ba1cc448bd88128dbbc6c0da7645ba8f7ce27b8a0d767d44cb48
semantic_inventory:
  - claim_key: CLAIM-85B5119BBD963A6D
    claim_text: A search query can be of any length
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 35
    subjects:
      - search.query_length
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server decision log: SRV-160'
  recorded_at: '2025-11-18T15:47:21.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-decisions
  - component:search
id: REQ-papra-search-text-any-length
type: req
---
A search query can be of any length.

## Context

Reason not stated.

## Why this changed

Users combining many filters with OR ran into the 256-character limit.

## Source

> Removed the length limit on search text. (SRV-160)

Source: Papra server decision log - SRV-160
