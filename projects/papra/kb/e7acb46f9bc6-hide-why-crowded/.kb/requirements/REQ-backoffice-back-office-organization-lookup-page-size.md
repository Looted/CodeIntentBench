---
title: The back office organization lookup returns at most 200 results per page.
status: active
semantic_text: The back office organization lookup returns at most 200 results per page.
semantic_clauses:
  - The back office organization lookup returns at most 200 results per page
logic_claims:
  - CLAIM-5B5110BF491490FE
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 0afe3767d55d3752d0616e4aefe6ac2d1c3f771dcae7dfae779c19cb5afca481
semantic_inventory:
  - claim_key: CLAIM-5B5110BF491490FE
    claim_text: The back office organization lookup returns at most 200 results per page
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 72
    subjects:
      - backoffice.back_office_organization_lookup
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-261'
  recorded_at: '2026-06-19T12:49:57.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
rationale: The response of a larger page was too big for mobile connections.
id: REQ-backoffice-back-office-organization-lookup-page-size
type: req
---
The back office organization lookup returns at most 200 results per page.

## Context

The response of a larger page was too big for mobile connections.

## Source

> feat(backoffice): 200 results per page (OPS-261)

Source: Papra Cloud back office handbook - OPS-261
