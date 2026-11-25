---
title: Owner can soft-delete organization with all metadata set correctly.
status: active
semantic_text: Owner can soft-delete organization with all metadata set correctly.
semantic_clauses:
  - Owner can soft-delete organization with all metadata set correctly
logic_claims:
  - CLAIM-2E081F88383630BA
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 25be22206a11fb25db24eee0ff04e85e30bcd2f9e75febe5becdf8d4f2936ac7
semantic_inventory:
  - claim_key: CLAIM-2E081F88383630BA
    claim_text: Owner can soft-delete organization with all metadata set correctly
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 66
    subjects:
      - organizations.soft_delete_organization
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1588'
  recorded_at: '2026-04-05T15:37:52.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-owner-can-soft-delete-organization-with-all
type: req
---
Owner can soft-delete organization with all metadata set correctly.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.usecases.test.ts (organizations usecases > softDeleteOrganization > when an organization owner wants to delete their organization, the organization is soft-deleted to allow for recovery within a grace period).

## Source

Source: Papra server behaviour notes - SRV-1588
