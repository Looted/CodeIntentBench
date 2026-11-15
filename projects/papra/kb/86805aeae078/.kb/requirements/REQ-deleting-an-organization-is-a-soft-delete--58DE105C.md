---
title: 'Deleting an organization is a soft delete: members and pending invitations are removed, deletedAt and deletedBy are recorded and a purge is scheduled 30 days…'
status: active
semantic_text: 'Deleting an organization is a soft delete: members and pending invitations are removed, deletedAt and deletedBy are recorded and a purge is scheduled 30 days later (scheduledPurgeAt); the organization row stays until the purge.'
logic_claims:
  - CLAIM-9BA71E79736927F6
  - CLAIM-0C34C6C92767337A
  - CLAIM-0EFB5252E03951AA
  - CLAIM-5088EFD427372AB7
semantic_clauses:
  - 'Deleting an organization is a soft delete: members and pending invitations are removed'
  - deletedAt and deletedBy are recorded
  - a purge is scheduled 30 days later (scheduledPurgeAt)
  - the organization row stays until the purge
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: d65f6cf6bac2036dd5d87d6374a8c7f41e70e8d8318a4358bcbabbb0ad88ddc1
semantic_inventory:
  - claim_key: CLAIM-9BA71E79736927F6
    claim_text: 'Deleting an organization is a soft delete: members and pending invitations are removed'
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 86
    subjects:
      - organization.soft_delete
  - claim_key: CLAIM-0C34C6C92767337A
    claim_text: deletedAt and deletedBy are recorded
    role: descriptive
    status: modeled
    span:
      start: 88
      end: 124
    subjects:
      - organization.soft_delete
  - claim_key: CLAIM-0EFB5252E03951AA
    claim_text: a purge is scheduled 30 days later (scheduledPurgeAt)
    role: descriptive
    status: modeled
    span:
      start: 129
      end: 182
    subjects:
      - organization.soft_delete
  - claim_key: CLAIM-5088EFD427372AB7
    claim_text: the organization row stays until the purge
    role: descriptive
    status: modeled
    span:
      start: 184
      end: 226
    subjects:
      - organization.soft_delete
firmness: firm
origin:
  kind: import
  ref: 'Papra documentation site (apps/docs): 05-architecture/organization-deletion-purge.mdx#soft-delete'
  recorded_at: '2026-10-14T12:10:50.466Z'
rationale: This provides a grace period for recovery while ensuring eventual cleanup of resources.
tags:
  - bootstrap
  - knowledge-source:papra-docs
  - component:organizations
id: REQ-deleting-an-organization-is-a-soft-delete--58DE105C
type: req
required_evidence: asserted
---
Deleting an organization is a soft delete: members and pending invitations are removed, deletedAt and deletedBy are recorded and a purge is scheduled 30 days later (scheduledPurgeAt); the organization row stays until the purge.

## Context

This provides a grace period for recovery while ensuring eventual cleanup of resources.

## Source

> `scheduledPurgeAt`: Future date when hard deletion will occur (default: 30 days)

Source: Papra documentation site (apps/docs) - 05-architecture/organization-deletion-purge.mdx#soft-delete
