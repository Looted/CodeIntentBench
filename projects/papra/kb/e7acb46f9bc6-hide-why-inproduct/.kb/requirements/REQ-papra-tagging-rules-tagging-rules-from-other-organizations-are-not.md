---
title: Tagging rules from other organizations are not included.
status: active
semantic_text: Tagging rules from other organizations are not included.
semantic_clauses:
  - Tagging rules from other organizations are not included
logic_claims:
  - CLAIM-25E88879B22CE21C
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 51ff87bb714ef365f16de91dcded4d4afa4673f9daae419a969bcdb85c0b6874
semantic_inventory:
  - claim_key: CLAIM-25E88879B22CE21C
    claim_text: Tagging rules from other organizations are not included
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 55
    subjects:
      - tagging_rules.get_organization_enabled_tagging_rules
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1798'
  recorded_at: '2025-03-24T15:52:46.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:tagging-rules
id: REQ-papra-tagging-rules-tagging-rules-from-other-organizations-are-not
type: req
---
Tagging rules from other organizations are not included.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/tagging-rules/tagging-rules.repository.test.ts (tagging-rules repository > getOrganizationEnabledTaggingRules).

## Source

Source: Papra server behaviour notes - SRV-1798
