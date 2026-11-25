---
title: Resending an invitation respects the senders daily invitation limit.
status: active
semantic_text: Resending an invitation respects the senders daily invitation limit.
semantic_clauses:
  - Resending an invitation respects the senders daily invitation limit
logic_claims:
  - CLAIM-4418C1671B799D63
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: eb43f57dcebeb090047b2149d11ae796e532bcc964f69dd49322403b4e5676c1
semantic_inventory:
  - claim_key: CLAIM-4418C1671B799D63
    claim_text: Resending an invitation respects the senders daily invitation limit
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 67
    subjects:
      - organizations.resend_organization_invitation
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1600'
  recorded_at: '2025-10-28T16:50:30.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-resending-invitation-respects-senders-daily-invitation-limit
type: req
---
Resending an invitation respects the senders daily invitation limit.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.usecases.test.ts (organizations usecases > resendOrganizationInvitation).

## Source

Source: Papra server behaviour notes - SRV-1600
