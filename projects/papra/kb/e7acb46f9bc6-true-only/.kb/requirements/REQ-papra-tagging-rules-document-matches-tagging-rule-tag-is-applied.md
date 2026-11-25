---
title: When a document matches a tagging rule, the tag is applied to the document.
status: active
semantic_text: When a document matches a tagging rule, the tag is applied to the document.
semantic_clauses:
  - When a document matches a tagging rule, the tag is applied to the document
logic_claims:
  - CLAIM-328A2D69BBA45024
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: ee359a62a0c370a990fc18044b73668d34ad1e052a6b135ab06296df224c0ffd
semantic_inventory:
  - claim_key: CLAIM-328A2D69BBA45024
    claim_text: When a document matches a tagging rule, the tag is applied to the document
    role: condition
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
  ref: 'Papra server behaviour notes: SRV-1819'
  recorded_at: '2026-02-15T13:57:22.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:tagging-rules
id: REQ-papra-tagging-rules-document-matches-tagging-rule-tag-is-applied
type: req
---
When a document matches a tagging rule, the tag is applied to the document.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/tagging-rules/tagging-rules.usecases.test.ts (tagging-rules usecases > applyTaggingRules).

## Source

Source: Papra server behaviour notes - SRV-1819
