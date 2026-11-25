---
title: An organization that does not have a customer id, will have one created and saved.
status: active
semantic_text: An organization that does not have a customer id, will have one created and saved.
semantic_clauses:
  - An organization that does not have a customer id, will have one created and saved
logic_claims:
  - CLAIM-B7B330976D38884B
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 0971850518a40b27b629011efc33f6c3b851c8af8ea434e6570ed54327a38358
semantic_inventory:
  - claim_key: CLAIM-B7B330976D38884B
    claim_text: An organization that does not have a customer id, will have one created and saved
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 81
    subjects:
      - organizations.get_or_create_organization_customer_id
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1545'
  recorded_at: '2025-02-05T17:53:41.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-organization-that-does-not-have-customer-id
type: req
---
An organization that does not have a customer id, will have one created and saved.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.usecases.test.ts (organizations usecases > getOrCreateOrganizationCustomerId > in order to handle organization subscriptions, we need a stripe customer id per organization
              as stripe require an email per customer, we use the organization owner's email).

## Source

Source: Papra server behaviour notes - SRV-1545
