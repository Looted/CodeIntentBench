---
title: Only the entitlements of the given user are returned, including expired ones.
status: active
semantic_text: Only the entitlements of the given user are returned, including expired ones.
semantic_clauses:
  - Only the entitlements of the given user are returned, including expired ones
logic_claims:
  - CLAIM-645A18444EC36D09
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: d809caf6bf69589bcc56243f47ba45b401ded3185f0d8216ce0fbd6e42cfdfdc
semantic_inventory:
  - claim_key: CLAIM-645A18444EC36D09
    claim_text: Only the entitlements of the given user are returned, including expired ones
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 76
    subjects:
      - plan_entitlements.get_user_plan_entitlements
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1627'
  recorded_at: '2026-09-06T16:51:05.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:plan-entitlements
id: REQ-papra-plan-entitlements-only-entitlements-of-given-user-are-returned
type: req
---
Only the entitlements of the given user are returned, including expired ones.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/plan-entitlements/plan-entitlements.repository.test.ts (plan-entitlements repository > getUserPlanEntitlements).

## Source

Source: Papra server behaviour notes - SRV-1627
