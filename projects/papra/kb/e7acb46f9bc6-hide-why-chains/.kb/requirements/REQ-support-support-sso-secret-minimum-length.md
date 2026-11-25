---
title: SUPPORT_SSO_SECRET must be at least 40 characters long.
status: active
semantic_text: SUPPORT_SSO_SECRET must be at least 40 characters long.
semantic_clauses:
  - SUPPORT_SSO_SECRET must be at least 40 characters long
logic_claims:
  - CLAIM-4A5BE36DC2460C17
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 0913e1f14dcd91ebabd44448014f507a168e110a11ee39966cd696097099b430
semantic_inventory:
  - claim_key: CLAIM-4A5BE36DC2460C17
    claim_text: SUPPORT_SSO_SECRET must be at least 40 characters long
    role: normative
    status: modeled
    span:
      start: 0
      end: 54
    subjects:
      - support.support_sso_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Support portal decision log: SUP-229'
  recorded_at: '2025-10-05T12:23:11.000Z'
tags:
  - bootstrap
  - knowledge-source:support-decisions
  - component:support
id: REQ-support-support-sso-secret-minimum-length
type: req
---
SUPPORT_SSO_SECRET must be at least 40 characters long.

## Context

Reason not stated.

## Why this changed

SUP-229 replaced the value recorded in SUP-159 and gives this reason for the change: A review found 16-character values that were dictionary words.

## Source

> feat(support): SUPPORT_SSO_SECRET minimum length 40 (SUP-229)

Source: Support portal decision log - SUP-229
