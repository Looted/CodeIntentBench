---
title: An address given in webinar registration counts only after it is confirmed through an emailed link.
status: active
semantic_text: An address given in webinar registration counts only after it is confirmed through an emailed link.
semantic_clauses:
  - An address given in webinar registration counts only after it is confirmed through an emailed link
logic_claims:
  - CLAIM-F5E77341D24E2E62
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 80771950573ddeb173992ab97b62c2087b9c381aa780005b16c49fd978226f51
semantic_inventory:
  - claim_key: CLAIM-F5E77341D24E2E62
    claim_text: An address given in webinar registration counts only after it is confirmed through an emailed link
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 98
    subjects:
      - website.webinar_registration
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Marketing website decision log (apps/website): WEB-288'
  recorded_at: '2025-04-19T16:04:55.000Z'
tags:
  - bootstrap
  - knowledge-source:website-decisions
  - component:website
rationale: A confirmation step halved completed sign-ups for no measured benefit.
id: REQ-website-webinar-registration-email-confirmation
type: req
---
An address given in webinar registration counts only after it is confirmed through an emailed link.

## Context

A confirmation step halved completed sign-ups for no measured benefit.

## Source

> feat(website): email confirmation for webinar registration (WEB-288)

Source: Marketing website decision log (apps/website) - WEB-288
