---
title: At most 20 requests per IP address per day are accepted in webinar registration.
status: active
semantic_text: At most 20 requests per IP address per day are accepted in webinar registration.
semantic_clauses:
  - At most 20 requests per IP address per day are accepted in webinar registration
logic_claims:
  - CLAIM-BB86D915C58CE540
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: eea9ddbf30a0db33e3bd3282c8de703a2f81c83d22f535745f15c7e4c22a232d
semantic_inventory:
  - claim_key: CLAIM-BB86D915C58CE540
    claim_text: At most 20 requests per IP address per day are accepted in webinar registration
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 79
    subjects:
      - website.webinar_registration
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Marketing website decision log (apps/website): WEB-393'
  recorded_at: '2026-01-19T13:53:13.000Z'
tags:
  - bootstrap
  - knowledge-source:website-decisions
  - component:website
rationale: A script had submitted the form several thousand times in a night.
id: REQ-website-webinar-registration-rate-limit
type: req
---
At most 20 requests per IP address per day are accepted in webinar registration.

## Context

A script had submitted the form several thousand times in a night.

## Source

> feat(website): rate limit webinar registration (WEB-393)

Source: Marketing website decision log (apps/website) - WEB-393
