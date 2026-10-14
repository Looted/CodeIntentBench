---
title: A soft-deleted organization can be restored before scheduledPurgeAt, and only by the user who deleted it; after that date recovery is refused even if the pur…
status: active
semantic_text: A soft-deleted organization can be restored before scheduledPurgeAt, and only by the user who deleted it; after that date recovery is refused even if the purge has not run yet.
logic_claims:
  - CLAIM-82905C543C112A8C
  - CLAIM-95535DA0BC6C61AD
semantic_clauses:
  - A soft-deleted organization can be restored before scheduledPurgeAt, and only by the user who deleted it
  - after that date recovery is refused even if the purge has not run yet
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: e5ac9598b89c429073eec1ef632f63e72b65edce658479435ff0bf721d3d99f0
semantic_inventory:
  - claim_key: CLAIM-82905C543C112A8C
    claim_text: A soft-deleted organization can be restored before scheduledPurgeAt, and only by the user who deleted it
    role: normative
    status: ontology_gap
    span:
      start: 0
      end: 104
  - claim_key: CLAIM-95535DA0BC6C61AD
    claim_text: after that date recovery is refused even if the purge has not run yet
    role: normative
    status: ontology_gap
    span:
      start: 106
      end: 175
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
---
A soft-deleted organization can be restored before scheduledPurgeAt, and only by the user who deleted it; after that date recovery is refused even if the purge has not run yet.

## Context

Reason not stated.

## Source

> Organizations can be restored before the `scheduledPurgeAt` date is reached, but only by the user who deleted them (the previous owner). After this date, recovery is no longer possible, even if the purge has not yet occurred.

Source: Papra documentation site (apps/docs) - 05-architecture/organization-deletion-purge.mdx#recovery
