---
title: When searching with pagination, the total count reflects the search results.
status: active
semantic_text: When searching with pagination, the total count reflects the search results.
semantic_clauses:
  - When searching with pagination, the total count reflects the search results
logic_claims:
  - CLAIM-61E7BBB64AD63708
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 25c89a1cb258d6dca7cad8b426e880d798f379e372c189b90568cbd8175c28a7
semantic_inventory:
  - claim_key: CLAIM-61E7BBB64AD63708
    claim_text: When searching with pagination, the total count reflects the search results
    role: condition
    status: modeled
    span:
      start: 0
      end: 75
    subjects:
      - organizations.list_organizations
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1509'
  recorded_at: '2026-04-26T10:57:50.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-searching-with-pagination-total-count-reflects-search
type: req
---
When searching with pagination, the total count reflects the search results.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.repository.test.ts (organizations repository > listOrganizations).

## Source

Source: Papra server behaviour notes - SRV-1509
