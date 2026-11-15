---
title: Only the organization owner can delete an organization.
status: active
semantic_text: Only the organization owner can delete an organization. Admins and members cannot, even though admins can manage everything else.
semantic_clauses:
  - Only the organization owner can delete an organization
  - Admins and members cannot, even though admins can manage everything else
logic_claims:
  - CLAIM-6D1A016ED2CEAD61
  - CLAIM-C55AC6F16857440B
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 5b4f07f82971afdad5bde9e2b2f51488d8dd00a3ec94f6c43bd0ec42eedb4b55
semantic_inventory:
  - claim_key: CLAIM-6D1A016ED2CEAD61
    claim_text: Only the organization owner can delete an organization
    role: normative
    status: modeled
    span:
      start: 0
      end: 54
    subjects:
      - organizations.organization
  - claim_key: CLAIM-C55AC6F16857440B
    claim_text: Admins and members cannot, even though admins can manage everything else
    role: normative
    status: modeled
    span:
      start: 56
      end: 128
    subjects:
      - organizations.organization
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server test suite (apps/papra-server/src/modules): organizations/organizations.usecases.test.ts#only-owner-deletes-organization'
  recorded_at: '2026-11-15T23:00:55.997Z'
tags:
  - bootstrap
  - knowledge-source:papra-tests
  - component:organizations
  - rule:only-owner-deletes-organization
id: REQ-papra-only-owner-deletes-organization
type: req
---
Only the organization owner can delete an organization. Admins and members cannot, even though admins can manage everything else.

## Context

Reason not stated.

## Source

> only owner can delete organization, admins and members cannot
> throws an error if the user is not the owner of the organization

Source: Papra server test suite (apps/papra-server/src/modules) - organizations/organizations.usecases.test.ts#only-owner-deletes-organization
