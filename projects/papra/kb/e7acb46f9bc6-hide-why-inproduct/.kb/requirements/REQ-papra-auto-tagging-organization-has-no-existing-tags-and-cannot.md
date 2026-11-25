---
title: When the organization has no existing tags and cannot create new ones, the document is not tagged and the AI is not called.
status: active
semantic_text: When the organization has no existing tags and cannot create new ones, the document is not tagged and the AI is not called.
semantic_clauses:
  - When the organization has no existing tags and cannot create new ones, the document is not tagged and the AI is not called
logic_claims:
  - CLAIM-5AB0B493C6F6F36D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 45da3c25be6fd025383120bdf929e31e651a6a25a90272a6f2415427a6edef91
semantic_inventory:
  - claim_key: CLAIM-5AB0B493C6F6F36D
    claim_text: When the organization has no existing tags and cannot create new ones, the document is not tagged and the AI is not called
    role: condition
    status: modeled
    span:
      start: 0
      end: 122
    subjects:
      - auto_tagging.auto_tag_document
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-578'
  recorded_at: '2025-10-04T08:10:56.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:auto-tagging
id: REQ-papra-auto-tagging-organization-has-no-existing-tags-and-cannot
type: req
---
When the organization has no existing tags and cannot create new ones, the document is not tagged and the AI is not called.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/auto-tagging/auto-tagging.usecases.test.ts (auto-tagging usecases > autoTagDocument).

## Source

Source: Papra server behaviour notes - SRV-578
