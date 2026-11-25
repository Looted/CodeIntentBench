---
title: By default the trusted origins are only the baseUrl.
status: active
semantic_text: By default the trusted origins are only the baseUrl.
semantic_clauses:
  - By default the trusted origins are only the baseUrl
logic_claims:
  - CLAIM-04F5CF96E7BF55DC
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: dcfbb2f5a6161d6b64dec2b91372aaaecef2c31ca9026e76cbc6e4aaa4d643f7
semantic_inventory:
  - claim_key: CLAIM-04F5CF96E7BF55DC
    claim_text: By default the trusted origins are only the baseUrl
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 51
    subjects:
      - auth.get_trusted_origins
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-488'
  recorded_at: '2026-02-09T13:17:38.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:auth
id: REQ-papra-auth-by-default-trusted-origins-are-only-baseurl
type: req
---
By default the trusted origins are only the baseUrl.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/app/auth/auth.models.test.ts (auth models > getTrustedOrigins).

## Source

Source: Papra server behaviour notes - SRV-488
