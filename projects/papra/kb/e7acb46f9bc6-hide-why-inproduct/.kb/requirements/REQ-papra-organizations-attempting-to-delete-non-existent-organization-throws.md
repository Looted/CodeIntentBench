---
title: Attempting to delete a non-existent organization throws an error.
status: active
semantic_text: Attempting to delete a non-existent organization throws an error.
semantic_clauses:
  - Attempting to delete a non-existent organization throws an error
logic_claims:
  - CLAIM-6FA56619757F961A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 69cc2c1f08a682fc781d40ea27cace3c559953c48d888db62ef0b91533f38b7d
semantic_inventory:
  - claim_key: CLAIM-6FA56619757F961A
    claim_text: Attempting to delete a non-existent organization throws an error
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 64
    subjects:
      - organizations.soft_delete_organization
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1548'
  recorded_at: '2026-03-12T17:48:16.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-attempting-to-delete-non-existent-organization-throws
type: req
---
Attempting to delete a non-existent organization throws an error.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.usecases.test.ts (organizations usecases > softDeleteOrganization > when an organization owner wants to delete their organization, the organization is soft-deleted to allow for recovery within a grace period).

## Source

Source: Papra server behaviour notes - SRV-1548
