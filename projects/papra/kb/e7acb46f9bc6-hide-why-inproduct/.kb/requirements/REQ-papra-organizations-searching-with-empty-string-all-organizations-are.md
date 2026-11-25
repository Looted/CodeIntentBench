---
title: When searching with an empty string, all organizations are returned.
status: active
semantic_text: When searching with an empty string, all organizations are returned.
semantic_clauses:
  - When searching with an empty string, all organizations are returned
logic_claims:
  - CLAIM-0BDBAABD4EFEB171
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 8857c8f66c0b67e98218749e98c5fa0c06c465a30c1990e3686f2143b9f93c52
semantic_inventory:
  - claim_key: CLAIM-0BDBAABD4EFEB171
    claim_text: When searching with an empty string, all organizations are returned
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
  ref: 'Papra server behaviour notes: SRV-1507'
  recorded_at: '2025-11-25T15:16:21.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-searching-with-empty-string-all-organizations-are
type: req
---
When searching with an empty string, all organizations are returned.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.repository.test.ts (organizations repository > listOrganizations).

## Source

Source: Papra server behaviour notes - SRV-1507
