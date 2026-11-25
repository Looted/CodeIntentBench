---
title: Applying rule to existing documents tags only matching ones.
status: active
semantic_text: Applying rule to existing documents tags only matching ones.
semantic_clauses:
  - Applying rule to existing documents tags only matching ones
logic_claims:
  - CLAIM-9AA98ED165E84906
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: df9b0c294b6173ab9227ca60da51dc4aab9b203e7262ba7b543d54ea4f85811d
semantic_inventory:
  - claim_key: CLAIM-9AA98ED165E84906
    claim_text: Applying rule to existing documents tags only matching ones
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 59
    subjects:
      - tagging_rules.apply_tagging_rule_to_existing_documents
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1812'
  recorded_at: '2026-02-06T09:25:30.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:tagging-rules
id: REQ-papra-tagging-rules-applying-rule-to-existing-documents-tags-only
type: req
---
Applying rule to existing documents tags only matching ones.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/tagging-rules/tagging-rules.usecases.test.ts (tagging-rules usecases > applyTaggingRuleToExistingDocuments).

## Source

Source: Papra server behaviour notes - SRV-1812
