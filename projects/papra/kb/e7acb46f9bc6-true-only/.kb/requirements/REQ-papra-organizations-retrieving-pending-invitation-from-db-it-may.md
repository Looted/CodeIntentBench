---
title: When retrieving a pending invitation from the db, it may be just expired.
status: active
semantic_text: When retrieving a pending invitation from the db, it may be just expired.
semantic_clauses:
  - When retrieving a pending invitation from the db, it may be just expired
logic_claims:
  - CLAIM-CAB8808BA4A0261E
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 93a33c5ee6fde7580ce39188c8c3c9d058aed10748d2b222a1d77a79a1421cd4
semantic_inventory:
  - claim_key: CLAIM-CAB8808BA4A0261E
    claim_text: When retrieving a pending invitation from the db, it may be just expired
    role: condition
    status: modeled
    span:
      start: 0
      end: 72
    subjects:
      - organizations.ensure_invitation_status
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1470'
  recorded_at: '2025-02-21T13:17:07.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-retrieving-pending-invitation-from-db-it-may
type: req
---
When retrieving a pending invitation from the db, it may be just expired.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.repository.models.test.ts (organizations repository models > ensureInvitationStatus).

## Source

Source: Papra server behaviour notes - SRV-1470
