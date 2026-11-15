---
title: Accounts can enable two-factor authentication.
status: active
semantic_text: Accounts can enable two-factor authentication.
logic_claims:
  - CLAIM-4B20F6C274F78F44
semantic_clauses:
  - Accounts can enable two-factor authentication
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 0bf7bc4fc39598d558230cbb5c7049f337e986fc3fe9dfbca696a428efd9dc67
semantic_inventory:
  - claim_key: CLAIM-4B20F6C274F78F44
    claim_text: Accounts can enable two-factor authentication
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 45
    subjects:
      - auth.two_factor
firmness: firm
origin:
  kind: import
  ref: 'papra-hq/papra GitHub issues: #695'
  recorded_at: '2026-10-14T12:09:03.337Z'
tags:
  - bootstrap
  - knowledge-source:papra-issues
  - component:auth
id: REQ-accounts-can-enable-two-factor-authenticat-63D00769
type: req
required_evidence: asserted
rationale: 'Requested in issue #695 by elte0 (2025-12-20): "this is crucial for an app that stores highly sensitive documents." The maintainer stated no reason of his own; the issue was closed as a duplicate of #652.'
---
Accounts can enable two-factor authentication.

## Context

Requested in issue #695 by elte0 (2025-12-20): "this is crucial for an app that stores highly sensitive documents." The maintainer stated no reason of his own; the issue was closed as a duplicate of #652.

## Source

> Kinda duplicate of #652, but yes it's planned to add 2FA.

Source: papra-hq/papra GitHub issues - #695
