---
title: When multiple organizations exist, all organizations are returned with member counts.
status: active
semantic_text: When multiple organizations exist, all organizations are returned with member counts.
semantic_clauses:
  - When multiple organizations exist, all organizations are returned with member counts
logic_claims:
  - CLAIM-1B23BEC0D9993A13
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c1480eb978b6bacedaebc74018096f759ec766d8de90b6f7335d59e925ebe5b4
semantic_inventory:
  - claim_key: CLAIM-1B23BEC0D9993A13
    claim_text: When multiple organizations exist, all organizations are returned with member counts
    role: condition
    status: modeled
    span:
      start: 0
      end: 84
    subjects:
      - organizations.list_organizations
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1496'
  recorded_at: '2026-06-11T10:49:35.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-multiple-organizations-exist-all-organizations-are-returned
type: req
---
When multiple organizations exist, all organizations are returned with member counts.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.repository.test.ts (organizations repository > listOrganizations).

## Source

Source: Papra server behaviour notes - SRV-1496
