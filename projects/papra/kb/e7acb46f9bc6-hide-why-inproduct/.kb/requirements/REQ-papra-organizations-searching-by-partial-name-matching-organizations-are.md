---
title: When searching by partial name, matching organizations are returned.
status: active
semantic_text: When searching by partial name, matching organizations are returned.
semantic_clauses:
  - When searching by partial name, matching organizations are returned
logic_claims:
  - CLAIM-3DAED987403B414C
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: be15e870a0130057c2527a07a3f4c6866bc73c350076b5b243da2f48c138c500
semantic_inventory:
  - claim_key: CLAIM-3DAED987403B414C
    claim_text: When searching by partial name, matching organizations are returned
    role: condition
    status: modeled
    span:
      start: 0
      end: 67
    subjects:
      - organizations.list_organizations
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1504'
  recorded_at: '2025-05-12T12:33:45.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-searching-by-partial-name-matching-organizations-are
type: req
---
When searching by partial name, matching organizations are returned.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.repository.test.ts (organizations repository > listOrganizations).

## Source

Source: Papra server behaviour notes - SRV-1504
