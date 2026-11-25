---
title: This schema validates and coerces a comma separated string to an array of urls.
status: active
semantic_text: This schema validates and coerces a comma separated string to an array of urls.
semantic_clauses:
  - This schema validates and coerces a comma separated string to an array of urls
logic_claims:
  - CLAIM-D3266D170D2BB081
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 9c18a1a5267ec74748124ea268011fa0a6fb50b742a9e66979fc6ff2791a6ea1
semantic_inventory:
  - claim_key: CLAIM-D3266D170D2BB081
    claim_text: This schema validates and coerces a comma separated string to an array of urls
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 78
    subjects:
      - config.coerced_url_list_schema
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-593'
  recorded_at: '2025-05-16T08:10:28.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:config
id: REQ-papra-config-this-schema-validates-and-coerces-comma-separated
type: req
---
This schema validates and coerces a comma separated string to an array of urls.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/config/config.schemas.test.ts (config schemas > coercedUrlListSchema).

## Source

Source: Papra server behaviour notes - SRV-593
