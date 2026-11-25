---
title: Returns error when tagging rule does not exist.
status: active
semantic_text: Returns error when tagging rule does not exist.
semantic_clauses:
  - Returns error when tagging rule does not exist
logic_claims:
  - CLAIM-E33C44CDC2A9D0FA
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 218e74fd8a60198e068f2b31fd2de6d7ef4dab7fa3c1f3599adefa813751868a
semantic_inventory:
  - claim_key: CLAIM-E33C44CDC2A9D0FA
    claim_text: Returns error when tagging rule does not exist
    role: normative
    status: modeled
    span:
      start: 0
      end: 46
    subjects:
      - tagging_rules.apply_tagging_rule_to_existing_documents
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1816'
  recorded_at: '2025-10-09T15:39:50.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:tagging-rules
id: REQ-papra-tagging-rules-returns-error-when-tagging-rule-does-not
type: req
---
Returns error when tagging rule does not exist.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/tagging-rules/tagging-rules.usecases.test.ts (tagging-rules usecases > applyTaggingRuleToExistingDocuments).

## Source

Source: Papra server behaviour notes - SRV-1816
