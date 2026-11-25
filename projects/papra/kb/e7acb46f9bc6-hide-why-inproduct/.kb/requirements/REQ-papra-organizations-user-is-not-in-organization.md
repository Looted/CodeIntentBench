---
title: The user is not in the organization.
status: active
semantic_text: The user is not in the organization.
semantic_clauses:
  - The user is not in the organization
logic_claims:
  - CLAIM-BA587FEDF2234D7A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 5f72cdefb3afd07a4479ca06907092afee815c7cb5c62f9150018b82e1720656
semantic_inventory:
  - claim_key: CLAIM-BA587FEDF2234D7A
    claim_text: The user is not in the organization
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 35
    subjects:
      - organizations.ensure_user_is_in_organization
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1618'
  recorded_at: '2026-07-19T08:01:37.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-user-is-not-in-organization
type: req
---
The user is not in the organization.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.usecases.test.ts (organizations usecases > ensureUserIsInOrganization > checks if user is in organization and the organization exists, an error is thrown if the user is not in the organization).

## Source

Source: Papra server behaviour notes - SRV-1618
