---
title: Only the organization owner can delete an organization; admins and members cannot.
status: active
semantic_text: Only the organization owner can delete an organization; admins and members cannot.
logic_claims:
  - CLAIM-6D1A016ED2CEAD61
  - CLAIM-EDE700438E1D8C87
semantic_clauses:
  - Only the organization owner can delete an organization
  - admins and members cannot
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: da792bd80f34704115949f985da1114b5783ea5277c5a64cbc4d3db387d23da7
semantic_inventory:
  - claim_key: CLAIM-6D1A016ED2CEAD61
    claim_text: Only the organization owner can delete an organization
    role: normative
    status: modeled
    span:
      start: 0
      end: 54
  - claim_key: CLAIM-EDE700438E1D8C87
    claim_text: admins and members cannot
    role: normative
    status: ontology_gap
    span:
      start: 56
      end: 81
firmness: firm
origin:
  kind: import
  ref: 'Papra documentation site (apps/docs): 05-architecture/organization-deletion-purge.mdx#who-can-delete'
  recorded_at: '2026-10-14T12:10:48.286Z'
tags:
  - bootstrap
  - knowledge-source:papra-docs
  - component:organizations
id: REQ-only-the-organization-owner-can-delete-an--8207027D
type: req
---
Only the organization owner can delete an organization; admins and members cannot.

## Context

Reason not stated.

## Source

> Only the **organization owner** can delete an organization. Admins and members do not have this permission.

Source: Papra documentation site (apps/docs) - 05-architecture/organization-deletion-purge.mdx#who-can-delete
