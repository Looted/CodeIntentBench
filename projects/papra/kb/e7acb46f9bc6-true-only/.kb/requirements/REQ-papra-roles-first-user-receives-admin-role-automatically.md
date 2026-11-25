---
title: When the feature is enabled, the first user receives the admin role automatically.
status: active
semantic_text: When the feature is enabled, the first user receives the admin role automatically.
semantic_clauses:
  - When the feature is enabled, the first user receives the admin role automatically
logic_claims:
  - CLAIM-9D96060751FCB14C
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 0e576a76fa36a2ee0f1ced3552a80fd7a11c0d4bae4aedc09b7c308de28690d7
semantic_inventory:
  - claim_key: CLAIM-9D96060751FCB14C
    claim_text: When the feature is enabled, the first user receives the admin role automatically
    role: condition
    status: modeled
    span:
      start: 0
      end: 81
    subjects:
      - roles.first_user_admin_assignment
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1700'
  recorded_at: '2025-12-20T15:43:04.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:roles
id: REQ-papra-roles-first-user-receives-admin-role-automatically
type: req
---
When the feature is enabled, the first user receives the admin role automatically.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/roles/event-handlers/first-user-admin.user-created.test.ts (first user admin assignment > when the feature is enabled).

## Source

Source: Papra server behaviour notes - SRV-1700
