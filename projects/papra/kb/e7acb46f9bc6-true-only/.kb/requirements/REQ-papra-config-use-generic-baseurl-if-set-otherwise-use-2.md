---
title: Use the generic baseUrl if set, otherwise use the server baseUrl.
status: active
semantic_text: Use the generic baseUrl if set, otherwise use the server baseUrl.
semantic_clauses:
  - Use the generic baseUrl if set, otherwise use the server baseUrl
logic_claims:
  - CLAIM-398E7407C6386B14
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: d03a143e29480c2f846ea51e84fe8c895e953e94a8b716ad7aa7f2642e707ffe
semantic_inventory:
  - claim_key: CLAIM-398E7407C6386B14
    claim_text: Use the generic baseUrl if set, otherwise use the server baseUrl
    role: normative
    status: modeled
    span:
      start: 0
      end: 64
    subjects:
      - config.get_server_base_url
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-590'
  recorded_at: '2025-02-01T17:18:05.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:config
id: REQ-papra-config-use-generic-baseurl-if-set-otherwise-use-2
type: req
---
Use the generic baseUrl if set, otherwise use the server baseUrl.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/config/config.models.test.ts (config models > getServerBaseUrl).

## Source

Source: Papra server behaviour notes - SRV-590
