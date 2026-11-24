---
title: The template gallery search runs only once the query has at least 3 characters.
status: active
semantic_text: The template gallery search runs only once the query has at least 3 characters.
semantic_clauses:
  - The template gallery search runs only once the query has at least 3 characters
logic_claims:
  - CLAIM-FFC83807C553F050
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 4d785a7fcb99c450aee328b752d51383c1cf343e28bc7fc830bb933ebcc1402d
semantic_inventory:
  - claim_key: CLAIM-FFC83807C553F050
    claim_text: The template gallery search runs only once the query has at least 3 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 78
    subjects:
      - website.template_gallery_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Marketing website decision log (apps/website): WEB-265'
  recorded_at: '2025-03-10T15:42:50.000Z'
tags:
  - bootstrap
  - knowledge-source:website-decisions
  - component:website
rationale: One-letter queries matched nearly everything and were slow to render.
id: REQ-website-template-gallery-search-minimum-length
type: req
---
The template gallery search runs only once the query has at least 3 characters.

## Context

One-letter queries matched nearly everything and were slow to render.

## Source

> feat(website): minimum query length 3 (WEB-265)

Source: Marketing website decision log (apps/website) - WEB-265
