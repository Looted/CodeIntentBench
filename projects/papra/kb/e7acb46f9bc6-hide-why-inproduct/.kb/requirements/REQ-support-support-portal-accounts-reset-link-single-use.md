---
title: A password reset link for support portal accounts works once; requesting a new link invalidates the earlier ones.
status: active
semantic_text: A password reset link for support portal accounts works once; requesting a new link invalidates the earlier ones.
semantic_clauses:
  - A password reset link for support portal accounts works once
  - requesting a new link invalidates the earlier ones
logic_claims:
  - CLAIM-11CECC0C05D830BA
  - CLAIM-A6758D585E12B6CF
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 2126d58af5883968646546e70fa183009b8af0f83d489e33e0e5e1ee3e93e776
semantic_inventory:
  - claim_key: CLAIM-11CECC0C05D830BA
    claim_text: A password reset link for support portal accounts works once
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 60
    subjects:
      - support.support_portal_accounts
  - claim_key: CLAIM-A6758D585E12B6CF
    claim_text: requesting a new link invalidates the earlier ones
    role: descriptive
    status: modeled
    span:
      start: 62
      end: 112
    subjects:
      - support.support_portal_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Support portal decision log: SUP-217'
  recorded_at: '2025-10-20T14:39:26.000Z'
tags:
  - bootstrap
  - knowledge-source:support-decisions
  - component:support
rationale: An old link found in a mailbox months later still worked.
id: REQ-support-support-portal-accounts-reset-link-single-use
type: req
---
A password reset link for support portal accounts works once; requesting a new link invalidates the earlier ones.

## Context

An old link found in a mailbox months later still worked.

## Source

> feat(support): single-use reset links (SUP-217)

Source: Support portal decision log - SUP-217
