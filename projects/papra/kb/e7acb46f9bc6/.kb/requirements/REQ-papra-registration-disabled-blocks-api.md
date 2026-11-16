---
title: With AUTH_IS_REGISTRATION_ENABLED=false the authentication API also refuses email and password registrations.
status: active
semantic_text: With AUTH_IS_REGISTRATION_ENABLED=false the authentication API also refuses email and password registrations.
semantic_clauses:
  - With AUTH_IS_REGISTRATION_ENABLED=false the authentication API also refuses email and password registrations
logic_claims:
  - CLAIM-545025D231FAE6FE
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 38bb6f26d9ead27fea47a3bc0e536ae1c1ab8dd2a60a9a2bc039f3da0f772ebb
semantic_inventory:
  - claim_key: CLAIM-545025D231FAE6FE
    claim_text: With AUTH_IS_REGISTRATION_ENABLED=false the authentication API also refuses email and password registrations
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 108
    subjects:
      - auth.registration
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.6.2 changelog, #1453: Fixed an issue where setting `AUTH_IS_REGISTRATION_ENABLED=f'
  recorded_at: '2026-11-16T10:25:07.261Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:auth
id: REQ-papra-registration-disabled-blocks-api
type: req
---
With AUTH_IS_REGISTRATION_ENABLED=false the authentication API also refuses email and password registrations.

## Context

Reason not stated.

## Source

> Fixed an issue where setting `AUTH_IS_REGISTRATION_ENABLED=false` hid the sign-up interface but did not block email and password registrations made directly through the authentication API.

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 26.6.2 changelog, #1453: Fixed an issue where setting `AUTH_IS_REGISTRATION_ENABLED=f
