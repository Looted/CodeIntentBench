---
title: Resending an invitation respects organization capacity.
status: active
semantic_text: Resending an invitation respects organization capacity.
semantic_clauses:
  - Resending an invitation respects organization capacity
logic_claims:
  - CLAIM-9CC4EC402CD57BAB
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: d143f8ebd6a4cf81c9841c50b267ee2de8b5b84d67dd833125c03c430f4a864b
semantic_inventory:
  - claim_key: CLAIM-9CC4EC402CD57BAB
    claim_text: Resending an invitation respects organization capacity
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 54
    subjects:
      - organizations.resend_organization_invitation
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1598'
  recorded_at: '2026-01-27T08:41:19.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-resending-invitation-respects-organization-capacity
type: req
---
Resending an invitation respects organization capacity.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.usecases.test.ts (organizations usecases > resendOrganizationInvitation).

## Source

Source: Papra server behaviour notes - SRV-1598
