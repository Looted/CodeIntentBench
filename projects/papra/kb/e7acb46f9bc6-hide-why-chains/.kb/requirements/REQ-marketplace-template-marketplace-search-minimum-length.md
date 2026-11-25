---
title: The template marketplace search runs only once the query has at least 1 character.
status: active
semantic_text: The template marketplace search runs only once the query has at least 1 character.
semantic_clauses:
  - The template marketplace search runs only once the query has at least 1 character
logic_claims:
  - CLAIM-D0800EB46C94CDD3
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 887b07163b61620742d6363d0cd8dc2fa2e89cde80e4826cef2c018e8b165f47
semantic_inventory:
  - claim_key: CLAIM-D0800EB46C94CDD3
    claim_text: The template marketplace search runs only once the query has at least 1 character
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 81
    subjects:
      - marketplace.template_marketplace_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Template marketplace decision log: MKT-166'
  recorded_at: '2025-12-19T14:08:15.000Z'
tags:
  - bootstrap
  - knowledge-source:marketplace-decisions
  - component:marketplace
rationale: One-letter queries matched nearly everything and were slow to render.
id: REQ-marketplace-template-marketplace-search-minimum-length
type: req
---
The template marketplace search runs only once the query has at least 1 character.

## Context

One-letter queries matched nearly everything and were slow to render.

## Source

> feat(marketplace): minimum query length 1 (MKT-166)

Source: Template marketplace decision log - MKT-166
