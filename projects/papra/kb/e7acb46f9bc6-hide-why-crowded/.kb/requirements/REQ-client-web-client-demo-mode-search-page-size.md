---
title: The web client's demo-mode search returns at most 200 results per page.
status: active
semantic_text: The web client's demo-mode search returns at most 200 results per page.
semantic_clauses:
  - The web client's demo-mode search returns at most 200 results per page
logic_claims:
  - CLAIM-EDBADEEB5D3B7035
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 45af70b973ea21a313a0590a88685655f42f5585d2ed48b695d29e2f17d71181
semantic_inventory:
  - claim_key: CLAIM-EDBADEEB5D3B7035
    claim_text: The web client's demo-mode search returns at most 200 results per page
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 70
    subjects:
      - client.web_client_demo_mode_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Web client decision log (apps/papra-client): WCL-237'
  recorded_at: '2025-07-17T12:11:00.000Z'
tags:
  - bootstrap
  - knowledge-source:client-decisions
  - component:client
rationale: The response of a larger page was too big for mobile connections.
id: REQ-client-web-client-demo-mode-search-page-size
type: req
---
The web client's demo-mode search returns at most 200 results per page.

## Context

The response of a larger page was too big for mobile connections.

## Source

> feat(client): 200 results per page (WCL-237)

Source: Web client decision log (apps/papra-client) - WCL-237
