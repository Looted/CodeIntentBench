---
title: When no users exist in the database, the count is zero.
status: active
semantic_text: When no users exist in the database, the count is zero.
semantic_clauses:
  - When no users exist in the database, the count is zero
logic_claims:
  - CLAIM-62A8D924B34F7B46
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f497cdb046704b67c397f573048d65289397be9da40bfbd647a97f961f6df929
semantic_inventory:
  - claim_key: CLAIM-62A8D924B34F7B46
    claim_text: When no users exist in the database, the count is zero
    role: condition
    status: modeled
    span:
      start: 0
      end: 54
    subjects:
      - users.get_user_count
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1857'
  recorded_at: '2026-08-01T08:23:15.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:users
id: REQ-papra-users-no-users-exist-in-database-count-is
type: req
---
When no users exist in the database, the count is zero.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/users/users.repository.test.ts (users repository > getUserCount).

## Source

Source: Papra server behaviour notes - SRV-1857
