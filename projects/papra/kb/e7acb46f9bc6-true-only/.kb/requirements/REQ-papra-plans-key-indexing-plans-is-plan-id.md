---
title: The key indexing the plans is the plan id.
status: active
semantic_text: The key indexing the plans is the plan id.
semantic_clauses:
  - The key indexing the plans is the plan id
logic_claims:
  - CLAIM-0DB5E43DF9932805
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 891e60b792dfaf347f779f5a775c33b015839461cd7d003c9760e6a60ba21866
semantic_inventory:
  - claim_key: CLAIM-0DB5E43DF9932805
    claim_text: The key indexing the plans is the plan id
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 41
    subjects:
      - plans.get_organization_plans_records
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1685'
  recorded_at: '2026-02-10T11:11:08.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:plans
id: REQ-papra-plans-key-indexing-plans-is-plan-id
type: req
---
The key indexing the plans is the plan id.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/plans/plans.repository.test.ts (plans repository > getOrganizationPlansRecords > generates a map of organization plans, used in the organization plan repository).

## Source

Source: Papra server behaviour notes - SRV-1685
