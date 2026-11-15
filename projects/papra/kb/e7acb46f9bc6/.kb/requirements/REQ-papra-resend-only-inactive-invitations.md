---
title: An invitation can be resent only when it is expired, cancelled or rejected.
status: active
semantic_text: An invitation can be resent only when it is expired, cancelled or rejected. Pending invitations cannot be resent, and accepted invitations are historical records that can never be resent.
semantic_clauses:
  - An invitation can be resent only when it is expired, cancelled or rejected
  - Pending invitations cannot be resent
  - accepted invitations are historical records that can never be resent
logic_claims:
  - CLAIM-ADF33B013D75E721
  - CLAIM-26C07D3ECB519889
  - CLAIM-942C51878E315FC7
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 3ac01a1316fb712113c5e84425084ec66f841c2bbb1823b884f4c6ffa45c70dc
semantic_inventory:
  - claim_key: CLAIM-ADF33B013D75E721
    claim_text: An invitation can be resent only when it is expired, cancelled or rejected
    role: normative
    status: modeled
    span:
      start: 0
      end: 74
    subjects:
      - invitations.invitation
  - claim_key: CLAIM-26C07D3ECB519889
    claim_text: Pending invitations cannot be resent
    role: normative
    status: modeled
    span:
      start: 76
      end: 112
    subjects:
      - invitations.invitation
  - claim_key: CLAIM-942C51878E315FC7
    claim_text: accepted invitations are historical records that can never be resent
    role: descriptive
    status: modeled
    span:
      start: 118
      end: 186
    subjects:
      - invitations.invitation
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server test suite (apps/papra-server/src/modules): organizations/organizations.usecases.test.ts#resend-only-inactive-invitations'
  recorded_at: '2026-11-15T22:58:11.106Z'
tags:
  - bootstrap
  - knowledge-source:papra-tests
  - component:invitations
  - rule:resend-only-inactive-invitations
id: REQ-papra-resend-only-inactive-invitations
type: req
---
An invitation can be resent only when it is expired, cancelled or rejected. Pending invitations cannot be resent, and accepted invitations are historical records that can never be resent.

## Context

Reason not stated.

## Source

> accepted invitations remain historical and cannot be resent
> an old invitation cannot be resent to a current member

Source: Papra server test suite (apps/papra-server/src/modules) - organizations/organizations.usecases.test.ts#resend-only-inactive-invitations
