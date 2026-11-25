---
title: An organization with no tagging rules will not apply any tag to a document.
status: active
semantic_text: An organization with no tagging rules will not apply any tag to a document.
semantic_clauses:
  - An organization with no tagging rules will not apply any tag to a document
logic_claims:
  - CLAIM-2708C8A12199BC7F
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 28a2397ed4e2075e723ea352b01262720c7616eb6de68192e6879dffdb908bd3
semantic_inventory:
  - claim_key: CLAIM-2708C8A12199BC7F
    claim_text: An organization with no tagging rules will not apply any tag to a document
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 74
    subjects:
      - tagging_rules.apply_tagging_rules
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1808'
  recorded_at: '2026-02-07T13:38:51.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:tagging-rules
id: REQ-papra-tagging-rules-organization-with-no-tagging-rules-will-not
type: req
---
An organization with no tagging rules will not apply any tag to a document.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/tagging-rules/tagging-rules.usecases.test.ts (tagging-rules usecases > applyTaggingRules).

## Source

Source: Papra server behaviour notes - SRV-1808
