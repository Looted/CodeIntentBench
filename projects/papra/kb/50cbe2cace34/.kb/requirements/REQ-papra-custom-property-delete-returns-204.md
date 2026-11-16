---
title: Deleting a custom property definition returns 204 with no body.
status: active
semantic_text: Deleting a custom property definition returns 204 with no body.
semantic_clauses:
  - Deleting a custom property definition returns 204 with no body
logic_claims:
  - CLAIM-C746CA13D3969F51
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 2774f2f1f9a77ec78c493f1ab5389de74f5638184a0490235f0e48de101f46b6
semantic_inventory:
  - claim_key: CLAIM-C746CA13D3969F51
    claim_text: Deleting a custom property definition returns 204 with no body
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 62
    subjects:
      - custom_properties.delete_response
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.5.0 changelog, #1141: Custom property definition deletion endpoint (`DELETE /api/o'
  recorded_at: '2026-11-16T10:36:31.339Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:custom-properties
id: REQ-papra-custom-property-delete-returns-204
type: req
---
Deleting a custom property definition returns 204 with no body.

## Context

Reason not stated.

## Source

> Custom property definition deletion endpoint (`DELETE /api/organizations/:organizationId/custom-properties/:propertyDefinitionId`) now returns a 204 with no body instead of a 200 with an empty object.

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 26.5.0 changelog, #1141: Custom property definition deletion endpoint (`DELETE /api/o
