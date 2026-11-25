---
title: Tagging rules without conditions are properly retrieved with empty conditions array.
status: active
semantic_text: Tagging rules without conditions are properly retrieved with empty conditions array.
semantic_clauses:
  - Tagging rules without conditions are properly retrieved with empty conditions array
logic_claims:
  - CLAIM-F62CFA6B1C4DB5A9
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 8c107457c3b9ce192a66dfb7b188e3819a9dfe50785b54338bfb868fbbe9f246
semantic_inventory:
  - claim_key: CLAIM-F62CFA6B1C4DB5A9
    claim_text: Tagging rules without conditions are properly retrieved with empty conditions array
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 83
    subjects:
      - tagging_rules.get_organization_enabled_tagging_rules
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1801'
  recorded_at: '2025-09-18T10:52:05.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:tagging-rules
id: REQ-papra-tagging-rules-tagging-rules-without-conditions-are-properly-retrieved
type: req
---
Tagging rules without conditions are properly retrieved with empty conditions array.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/tagging-rules/tagging-rules.repository.test.ts (tagging-rules repository > getOrganizationEnabledTaggingRules).

## Source

Source: Papra server behaviour notes - SRV-1801
