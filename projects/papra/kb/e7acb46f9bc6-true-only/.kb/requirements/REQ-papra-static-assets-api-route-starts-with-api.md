---
title: An api route starts with /api/*.
status: active
semantic_text: An api route starts with /api/*.
semantic_clauses:
  - An api route starts with /api/*
logic_claims:
  - CLAIM-CD7D1638E764AC83
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: b74d688cdce69f271c64f8a3c13098d3c15be980907435e84bc3dd5450028031
semantic_inventory:
  - claim_key: CLAIM-CD7D1638E764AC83
    claim_text: An api route starts with /api/*
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 31
    subjects:
      - static_assets.is_api_route
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-566'
  recorded_at: '2025-05-07T15:25:21.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:static-assets
id: REQ-papra-static-assets-api-route-starts-with-api
type: req
---
An api route starts with /api/*.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/app/static-assets/static-assets.models.test.ts (static-assets models > isApiRoute).

## Source

Source: Papra server behaviour notes - SRV-566
