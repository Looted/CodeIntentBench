---
title: Uses default purge delay of 30 days when not specified.
status: active
semantic_text: Uses default purge delay of 30 days when not specified.
semantic_clauses:
  - Uses default purge delay of 30 days when not specified
logic_claims:
  - CLAIM-B4158138100925B5
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c2ddaef76153a02569caa17e723f3b26e5c5d44511224520563afad58c7c2bc7
semantic_inventory:
  - claim_key: CLAIM-B4158138100925B5
    claim_text: Uses default purge delay of 30 days when not specified
    role: normative
    status: modeled
    span:
      start: 0
      end: 54
    subjects:
      - organizations.soft_delete_organization
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1491'
  recorded_at: '2026-06-11T11:43:52.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-uses-default-purge-delay-of-30-days
type: req
---
Uses default purge delay of 30 days when not specified.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.repository.test.ts (organizations repository > softDeleteOrganization).

## Source

Source: Papra server behaviour notes - SRV-1491
