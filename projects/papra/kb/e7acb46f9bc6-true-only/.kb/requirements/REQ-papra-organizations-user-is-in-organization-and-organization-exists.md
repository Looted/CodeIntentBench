---
title: The user is in the organization and the organization exists.
status: active
semantic_text: The user is in the organization and the organization exists.
semantic_clauses:
  - The user is in the organization and the organization exists
logic_claims:
  - CLAIM-8B7EA223753C4E77
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c5db5259894d642b8c24698082abfd604d252f95c4c0cb8a26ed3c003802cb73
semantic_inventory:
  - claim_key: CLAIM-8B7EA223753C4E77
    claim_text: The user is in the organization and the organization exists
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 59
    subjects:
      - organizations.ensure_user_is_in_organization
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1615'
  recorded_at: '2025-05-14T15:29:42.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-user-is-in-organization-and-organization-exists
type: req
---
The user is in the organization and the organization exists.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.usecases.test.ts (organizations usecases > ensureUserIsInOrganization > checks if user is in organization and the organization exists, an error is thrown if the user is not in the organization).

## Source

Source: Papra server behaviour notes - SRV-1615
