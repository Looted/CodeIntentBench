---
title: When updating existing settings, the updatedAt timestamp should be updated.
status: active
semantic_text: When updating existing settings, the updatedAt timestamp should be updated.
semantic_clauses:
  - When updating existing settings, the updatedAt timestamp should be updated
logic_claims:
  - CLAIM-8ECAFB489A9F190D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c4c2b8bb82cdbe11b866c30248f82a76717d265a51ffeeeb45f0850ff616fec7
semantic_inventory:
  - claim_key: CLAIM-8ECAFB489A9F190D
    claim_text: When updating existing settings, the updatedAt timestamp should be updated
    role: condition
    status: modeled
    span:
      start: 0
      end: 74
    subjects:
      - organizations.create_or_update_organization_settings
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1462'
  recorded_at: '2026-04-26T10:14:13.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-updating-existing-settings-updatedat-timestamp-should-be
type: req
---
When updating existing settings, the updatedAt timestamp should be updated.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organization-settings/organization-settings.repository.test.ts (organization-settings.repository > createOrUpdateOrganizationSettings).

## Source

Source: Papra server behaviour notes - SRV-1462
