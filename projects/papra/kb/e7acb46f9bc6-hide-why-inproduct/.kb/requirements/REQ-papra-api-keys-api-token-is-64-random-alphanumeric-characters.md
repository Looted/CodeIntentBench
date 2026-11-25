---
title: Api token is a 64 random alphanumeric characters string prefixed with "ppapi_".
status: active
semantic_text: Api token is a 64 random alphanumeric characters string prefixed with "ppapi_".
semantic_clauses:
  - Api token is a 64 random alphanumeric characters string prefixed with "ppapi_"
logic_claims:
  - CLAIM-2252431FD9A5C0A3
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 58f082c84dfd30b6dcc02745bdeaaf2fd8125e3dbb7af4e53db6667c8d64aa02
semantic_inventory:
  - claim_key: CLAIM-2252431FD9A5C0A3
    claim_text: Api token is a 64 random alphanumeric characters string prefixed with "ppapi_"
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 78
    subjects:
      - api_keys.generate_api_token
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-458'
  recorded_at: '2026-06-08T14:47:25.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:api-keys
id: REQ-papra-api-keys-api-token-is-64-random-alphanumeric-characters
type: req
---
Api token is a 64 random alphanumeric characters string prefixed with "ppapi_".

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/api-keys/api-keys.services.test.ts (api-keys services > generateApiToken).

## Source

Source: Papra server behaviour notes - SRV-458
