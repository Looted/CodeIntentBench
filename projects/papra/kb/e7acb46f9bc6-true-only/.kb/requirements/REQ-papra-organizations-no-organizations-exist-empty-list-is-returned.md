---
title: When no organizations exist, an empty list is returned.
status: active
semantic_text: When no organizations exist, an empty list is returned.
semantic_clauses:
  - When no organizations exist, an empty list is returned
logic_claims:
  - CLAIM-B8F1FFE04A0CE983
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 195aadfaf25e8f8363a687a8a986da6acad14e3908d48deff4365c36378e8afd
semantic_inventory:
  - claim_key: CLAIM-B8F1FFE04A0CE983
    claim_text: When no organizations exist, an empty list is returned
    role: condition
    status: modeled
    span:
      start: 0
      end: 54
    subjects:
      - organizations.list_organizations
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1500'
  recorded_at: '2026-07-25T12:38:17.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-no-organizations-exist-empty-list-is-returned
type: req
---
When no organizations exist, an empty list is returned.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.repository.test.ts (organizations repository > listOrganizations).

## Source

Source: Papra server behaviour notes - SRV-1500
