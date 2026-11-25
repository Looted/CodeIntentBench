---
title: An old invitation cannot be resent when another active invitation exists.
status: active
semantic_text: An old invitation cannot be resent when another active invitation exists.
semantic_clauses:
  - An old invitation cannot be resent when another active invitation exists
logic_claims:
  - CLAIM-8AE168F9B398C8B5
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a537ebcd1d88cc6adc89f1b913d4a3a3869b67fd442c0a9b4e4248e9ade32cc7
semantic_inventory:
  - claim_key: CLAIM-8AE168F9B398C8B5
    claim_text: An old invitation cannot be resent when another active invitation exists
    role: normative
    status: modeled
    span:
      start: 0
      end: 72
    subjects:
      - organizations.resend_organization_invitation
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1541'
  recorded_at: '2026-02-03T08:04:57.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-old-invitation-cannot-be-resent-when-another
type: req
---
An old invitation cannot be resent when another active invitation exists.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.usecases.test.ts (organizations usecases > resendOrganizationInvitation).

## Source

Source: Papra server behaviour notes - SRV-1541
