---
title: An organization that already has a customer id, will not have a new customer created.
status: active
semantic_text: An organization that already has a customer id, will not have a new customer created.
semantic_clauses:
  - An organization that already has a customer id, will not have a new customer created
logic_claims:
  - CLAIM-49B4DF7D6134F169
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c02e649a6b662d2602b02c439d524948ad75277b329dd7ad25900b216957ecbf
semantic_inventory:
  - claim_key: CLAIM-49B4DF7D6134F169
    claim_text: An organization that already has a customer id, will not have a new customer created
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 84
    subjects:
      - organizations.get_or_create_organization_customer_id
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1544'
  recorded_at: '2025-02-05T10:58:02.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-organization-that-already-has-customer-id-will
type: req
---
An organization that already has a customer id, will not have a new customer created.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.usecases.test.ts (organizations usecases > getOrCreateOrganizationCustomerId > in order to handle organization subscriptions, we need a stripe customer id per organization
              as stripe require an email per customer, we use the organization owner's email).

## Source

Source: Papra server behaviour notes - SRV-1544
