---
title: SUPPORT_SSO_SECRET is rotated every 60 days; the previous value stays valid for 48 hours after a rotation.
status: active
semantic_text: SUPPORT_SSO_SECRET is rotated every 60 days; the previous value stays valid for 48 hours after a rotation.
semantic_clauses:
  - SUPPORT_SSO_SECRET is rotated every 60 days
  - the previous value stays valid for 48 hours after a rotation
logic_claims:
  - CLAIM-30A49D7600A51B26
  - CLAIM-40B0302E57698F6D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 65804fa9c662fcffed54b57a98a15552f05937f5f5041762dc057daa00168eda
semantic_inventory:
  - claim_key: CLAIM-30A49D7600A51B26
    claim_text: SUPPORT_SSO_SECRET is rotated every 60 days
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 43
    subjects:
      - support.support_sso_secret
  - claim_key: CLAIM-40B0302E57698F6D
    claim_text: the previous value stays valid for 48 hours after a rotation
    role: descriptive
    status: modeled
    span:
      start: 45
      end: 105
    subjects:
      - support.support_sso_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Support portal decision log: SUP-245'
  recorded_at: '2026-06-15T15:59:23.000Z'
tags:
  - bootstrap
  - knowledge-source:support-decisions
  - component:support
rationale: Without an overlap, a rotation of the single sign-on secret broke requests already on their way.
id: REQ-support-support-sso-secret-rotation
type: req
---
SUPPORT_SSO_SECRET is rotated every 60 days; the previous value stays valid for 48 hours after a rotation.

## Context

Without an overlap, a rotation of the single sign-on secret broke requests already on their way.

## Source

> chore(support): rotate SUPPORT_SSO_SECRET every 60 days (SUP-245)

Source: Support portal decision log - SUP-245
