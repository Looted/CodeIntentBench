---
title: When registration is disabled, custom OAuth providers do not create new accounts; existing users can still sign in with them.
status: active
semantic_text: When registration is disabled, custom OAuth providers do not create new accounts; existing users can still sign in with them.
semantic_clauses:
  - When registration is disabled, custom OAuth providers do not create new accounts
  - existing users can still sign in with them
logic_claims:
  - CLAIM-5C5B6058100121C0
  - CLAIM-177BE56B67A1F5F8
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 638294124b51ecd5735d4c4a94405121c152de83f8bb67548332c2b7b860e506
semantic_inventory:
  - claim_key: CLAIM-5C5B6058100121C0
    claim_text: When registration is disabled, custom OAuth providers do not create new accounts
    role: condition
    status: modeled
    span:
      start: 0
      end: 80
    subjects:
      - auth.oauth_custom_providers
  - claim_key: CLAIM-177BE56B67A1F5F8
    claim_text: existing users can still sign in with them
    role: descriptive
    status: modeled
    span:
      start: 82
      end: 124
    subjects:
      - auth.oauth_custom_providers
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.7.0 changelog, #1503: Security fix: Prevent custom OAuth providers from creating n'
  recorded_at: '2026-11-16T10:36:04.394Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:auth
id: REQ-papra-oauth-no-new-accounts-when-disabled
type: req
---
When registration is disabled, custom OAuth providers do not create new accounts; existing users can still sign in with them.

## Context

Reason not stated.

## Source

> Security fix: Prevent custom OAuth providers from creating new accounts when registration is disabled, while allowing existing users to sign in. Thanks to [白墨](https://github.com/5255fgh) for the responsible disclosure of this issue.

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 26.7.0 changelog, #1503: Security fix: Prevent custom OAuth providers from creating n
