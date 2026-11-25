---
title: A search query is limited to 256 characters.
status: closed
semantic_text: A search query is limited to 256 characters.
semantic_clauses:
  - A search query is limited to 256 characters
logic_claims:
  - CLAIM-24A4853CC5ADEA0F
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 6bf99219d7218e21f56d4748e2e08b030b936bd6436747ed43dedb43fb1639fb
semantic_inventory:
  - claim_key: CLAIM-24A4853CC5ADEA0F
    claim_text: A search query is limited to 256 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 43
    subjects:
      - search.query_length
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server decision log: SRV-109'
  recorded_at: '2025-06-09T10:22:36.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-decisions
  - component:search
id: REQ-papra-search-text-256-characters
type: req
---
A search query is limited to 256 characters.

## Context

Reason not stated.

## Source

> Search text longer than 256 characters is refused. (SRV-109)

Source: Papra server decision log - SRV-109
