---
title: The app scheme can either be a comma separated string or an array of strings.
status: active
semantic_text: The app scheme can either be a comma separated string or an array of strings.
semantic_clauses:
  - The app scheme can either be a comma separated string or an array of strings
logic_claims:
  - CLAIM-5431BBED57AC10A1
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 7f13e83b0da9889a1621c4da40383897aaba2211aa5312b51d2f7d0c727e7d06
semantic_inventory:
  - claim_key: CLAIM-5431BBED57AC10A1
    claim_text: The app scheme can either be a comma separated string or an array of strings
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 76
    subjects:
      - config.app_scheme_schema
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-591'
  recorded_at: '2026-08-24T09:05:02.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:config
id: REQ-papra-config-app-scheme-can-either-be-comma-separated
type: req
---
The app scheme can either be a comma separated string or an array of strings.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/config/config.schemas.test.ts (config schemas > appSchemeSchema).

## Source

Source: Papra server behaviour notes - SRV-591
