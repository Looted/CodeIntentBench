---
title: When called with valid settings, it should create or update the organization settings.
status: active
semantic_text: When called with valid settings, it should create or update the organization settings.
semantic_clauses:
  - When called with valid settings, it should create or update the organization settings
logic_claims:
  - CLAIM-5051AE613EBD332B
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: d33b7f069aba40c7b2642c73c4446466da2c116f76506426bf80b787c1020753
semantic_inventory:
  - claim_key: CLAIM-5051AE613EBD332B
    claim_text: When called with valid settings, it should create or update the organization settings
    role: condition
    status: modeled
    span:
      start: 0
      end: 85
    subjects:
      - organizations.create_or_update_organization_settings
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1461'
  recorded_at: '2026-08-25T14:23:35.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-called-with-valid-settings-it-should-create
type: req
---
When called with valid settings, it should create or update the organization settings.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organization-settings/organization-settings.repository.test.ts (organization-settings.repository > createOrUpdateOrganizationSettings).

## Source

Source: Papra server behaviour notes - SRV-1461
