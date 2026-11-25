---
title: Use the generic baseUrl if set, otherwise use the client baseUrl.
status: active
semantic_text: Use the generic baseUrl if set, otherwise use the client baseUrl.
semantic_clauses:
  - Use the generic baseUrl if set, otherwise use the client baseUrl
logic_claims:
  - CLAIM-372D186AB5DAC2B5
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: dad331e9214f19b09a0528cca4739ca960452ec3ff3b385ec30f010b381c471d
semantic_inventory:
  - claim_key: CLAIM-372D186AB5DAC2B5
    claim_text: Use the generic baseUrl if set, otherwise use the client baseUrl
    role: normative
    status: modeled
    span:
      start: 0
      end: 64
    subjects:
      - config.get_client_base_url
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-587'
  recorded_at: '2026-02-12T14:02:16.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:config
id: REQ-papra-config-use-generic-baseurl-if-set-otherwise-use
type: req
---
Use the generic baseUrl if set, otherwise use the client baseUrl.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/config/config.models.test.ts (config models > getClientBaseUrl).

## Source

Source: Papra server behaviour notes - SRV-587
