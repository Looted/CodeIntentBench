---
title: Getting enabled tagging rules includes all related conditions and actions.
status: active
semantic_text: Getting enabled tagging rules includes all related conditions and actions.
semantic_clauses:
  - Getting enabled tagging rules includes all related conditions and actions
logic_claims:
  - CLAIM-9D850A52973AF6C1
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: b5d7d98de2b4e9fd6ce26d2f32066567426781bb1184284867c32bdcd766434d
semantic_inventory:
  - claim_key: CLAIM-9D850A52973AF6C1
    claim_text: Getting enabled tagging rules includes all related conditions and actions
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 73
    subjects:
      - tagging_rules.get_organization_enabled_tagging_rules
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1788'
  recorded_at: '2025-08-09T15:28:11.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:tagging-rules
id: REQ-papra-tagging-rules-getting-enabled-tagging-rules-includes-all-related
type: req
---
Getting enabled tagging rules includes all related conditions and actions.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/tagging-rules/tagging-rules.repository.test.ts (tagging-rules repository > getOrganizationEnabledTaggingRules).

## Source

Source: Papra server behaviour notes - SRV-1788
