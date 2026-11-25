---
title: Deletes all members from the specified organization.
status: active
semantic_text: Deletes all members from the specified organization.
semantic_clauses:
  - Deletes all members from the specified organization
logic_claims:
  - CLAIM-ADC088CEAFECCC58
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 9f620d6032971ca37321521c7d9896c2683235b3ae58e932bef23f20450f7de5
semantic_inventory:
  - claim_key: CLAIM-ADC088CEAFECCC58
    claim_text: Deletes all members from the specified organization
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 51
    subjects:
      - organizations.delete_all_members_from_organization
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1480'
  recorded_at: '2025-03-06T10:35:32.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-deletes-all-members-from-specified-organization
type: req
---
Deletes all members from the specified organization.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.repository.test.ts (organizations repository > deleteAllMembersFromOrganization).

## Source

Source: Papra server behaviour notes - SRV-1480
