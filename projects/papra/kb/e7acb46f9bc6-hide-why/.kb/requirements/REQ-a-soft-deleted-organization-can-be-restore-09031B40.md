---
title: A soft-deleted organization can be restored before scheduledPurgeAt, and only by the user who deleted it; after that date recovery is refused even if the pur…
status: active
semantic_text: A soft-deleted organization can be restored before scheduledPurgeAt, and only by the user who deleted it; after that date recovery is refused even if the purge has not run yet.
logic_claims:
  - CLAIM-594F4DD77BE8CBBC
  - CLAIM-F713E037940A04C6
  - CLAIM-95535DA0BC6C61AD
semantic_clauses:
  - A soft-deleted organization can be restored before scheduledPurgeAt
  - only by the user who deleted it
  - after that date recovery is refused even if the purge has not run yet
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: e5ac9598b89c429073eec1ef632f63e72b65edce658479435ff0bf721d3d99f0
semantic_inventory:
  - claim_key: CLAIM-594F4DD77BE8CBBC
    claim_text: A soft-deleted organization can be restored before scheduledPurgeAt
    role: normative
    status: modeled
    span:
      start: 0
      end: 67
    subjects:
      - organization.restore
  - claim_key: CLAIM-F713E037940A04C6
    claim_text: only by the user who deleted it
    role: descriptive
    status: modeled
    span:
      start: 73
      end: 104
    subjects:
      - organization.restore
  - claim_key: CLAIM-95535DA0BC6C61AD
    claim_text: after that date recovery is refused even if the purge has not run yet
    role: normative
    status: modeled
    span:
      start: 106
      end: 175
    subjects:
      - organization.restore
firmness: firm
origin:
  kind: import
  ref: 'Papra documentation site (apps/docs): 05-architecture/organization-deletion-purge.mdx#recovery'
  recorded_at: '2026-10-14T12:08:07.237Z'
tags:
  - bootstrap
  - knowledge-source:papra-docs
  - component:organizations
id: REQ-a-soft-deleted-organization-can-be-restore-09031B40
type: req
required_evidence: asserted
rationale: 'The organization deletion docs say the two-phase deletion "provides a grace period for recovery while ensuring eventual cleanup of resources". Why only the deleting user may restore, and why recovery ends at scheduledPurgeAt even before the purge runs: reason not stated.'
---
A soft-deleted organization can be restored before scheduledPurgeAt, and only by the user who deleted it; after that date recovery is refused even if the purge has not run yet.

## Context

The organization deletion docs say the two-phase deletion "provides a grace period for recovery while ensuring eventual cleanup of resources". Why only the deleting user may restore, and why recovery ends at scheduledPurgeAt even before the purge runs: reason not stated.

## Source

> Organizations can be restored before the `scheduledPurgeAt` date is reached, but only by the user who deleted them (the previous owner). After this date, recovery is no longer possible, even if the purge has not yet occurred.

Source: Papra documentation site (apps/docs) - 05-architecture/organization-deletion-purge.mdx#recovery
