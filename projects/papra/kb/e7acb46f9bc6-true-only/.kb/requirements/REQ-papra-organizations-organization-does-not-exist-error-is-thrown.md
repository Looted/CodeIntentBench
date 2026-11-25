---
title: If the organization does not exist, an error is thrown.
status: active
semantic_text: If the organization does not exist, an error is thrown.
semantic_clauses:
  - If the organization does not exist, an error is thrown
logic_claims:
  - CLAIM-A6552BE41E5837EA
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 87a3390298b9e9ca76c6a04765a5700f5c79c8915dbf7e85368491a64b2056c6
semantic_inventory:
  - claim_key: CLAIM-A6552BE41E5837EA
    claim_text: If the organization does not exist, an error is thrown
    role: condition
    status: modeled
    span:
      start: 0
      end: 54
    subjects:
      - organizations.get_or_create_organization_customer_id
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1574'
  recorded_at: '2025-04-27T10:13:06.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-organization-does-not-exist-error-is-thrown
type: req
---
If the organization does not exist, an error is thrown.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.usecases.test.ts (organizations usecases > getOrCreateOrganizationCustomerId > in order to handle organization subscriptions, we need a stripe customer id per organization
              as stripe require an email per customer, we use the organization owner's email).

## Source

Source: Papra server behaviour notes - SRV-1574
