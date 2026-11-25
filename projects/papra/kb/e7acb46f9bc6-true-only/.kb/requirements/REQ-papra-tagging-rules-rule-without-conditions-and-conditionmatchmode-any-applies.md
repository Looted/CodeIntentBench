---
title: A rule without conditions and conditionMatchMode "any" applies tags to all documents.
status: active
semantic_text: A rule without conditions and conditionMatchMode "any" applies tags to all documents.
semantic_clauses:
  - A rule without conditions and conditionMatchMode "any" applies tags to all documents
logic_claims:
  - CLAIM-C659D22D38259DC7
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: b706a7d64ae143d0b4195c576b7ce7ee83e29a321b0b06d2182ee44d266466d9
semantic_inventory:
  - claim_key: CLAIM-C659D22D38259DC7
    claim_text: A rule without conditions and conditionMatchMode "any" applies tags to all documents
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 84
    subjects:
      - tagging_rules.apply_tagging_rules
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1804'
  recorded_at: '2026-04-17T14:25:08.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:tagging-rules
id: REQ-papra-tagging-rules-rule-without-conditions-and-conditionmatchmode-any-applies
type: req
---
A rule without conditions and conditionMatchMode "any" applies tags to all documents.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/tagging-rules/tagging-rules.usecases.test.ts (tagging-rules usecases > applyTaggingRules).

## Source

Source: Papra server behaviour notes - SRV-1804
