---
title: An API key can only call routes whose required permissions are all explicitly granted to the key; a key missing any one of them is unauthorized.
status: active
semantic_text: An API key can only call routes whose required permissions are all explicitly granted to the key; a key missing any one of them is unauthorized. A key past its expiry date is treated as if it did not exist, while a key with no expiry never expires.
semantic_clauses:
  - An API key can only call routes whose required permissions are all explicitly granted to the key
  - a key missing any one of them is unauthorized
  - A key past its expiry date is treated as if it did not exist
  - a key with no expiry never expires
logic_claims:
  - CLAIM-19F9B9BDE09DB9C1
  - CLAIM-4ADF156CB91E4E55
  - CLAIM-A3F5D4723B15080E
  - CLAIM-3FA758643240966D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 0db147ac1c83562fa0a2a1999e3dc45b2dad73cf50321d7ba60cfcf5d59ed9f3
semantic_inventory:
  - claim_key: CLAIM-19F9B9BDE09DB9C1
    claim_text: An API key can only call routes whose required permissions are all explicitly granted to the key
    role: normative
    status: modeled
    span:
      start: 0
      end: 96
    subjects:
      - api_keys.key
  - claim_key: CLAIM-4ADF156CB91E4E55
    claim_text: a key missing any one of them is unauthorized
    role: descriptive
    status: modeled
    span:
      start: 98
      end: 143
    subjects:
      - api_keys.key
  - claim_key: CLAIM-A3F5D4723B15080E
    claim_text: A key past its expiry date is treated as if it did not exist
    role: normative
    status: modeled
    span:
      start: 145
      end: 205
    subjects:
      - api_keys.key
  - claim_key: CLAIM-3FA758643240966D
    claim_text: a key with no expiry never expires
    role: descriptive
    status: modeled
    span:
      start: 213
      end: 247
    subjects:
      - api_keys.key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server test suite (apps/papra-server/src/modules): app/auth/auth.models.test.ts#api-key-scope-and-expiry'
  recorded_at: '2026-11-16T10:29:53.248Z'
tags:
  - bootstrap
  - knowledge-source:papra-tests
  - component:api_keys
  - rule:api-key-scope-and-expiry
id: REQ-papra-api-key-scope-and-expiry
type: req
---
An API key can only call routes whose required permissions are all explicitly granted to the key; a key missing any one of them is unauthorized. A key past its expiry date is treated as if it did not exist, while a key with no expiry never expires.

## Context

Reason not stated.

## Source

> when the auth type is api-key, all permissions must match
> without the custom-properties:create permission, creating a custom property definition with an api key should fail
> when retrieving an api key by hash, it only returns the api key if it is not expired

Source: Papra server test suite (apps/papra-server/src/modules) - app/auth/auth.models.test.ts#api-key-scope-and-expiry
