---
title: Only members of an organization can list its tags and webhooks.
status: active
semantic_text: Only members of an organization can list its tags and webhooks.
semantic_clauses:
  - Only members of an organization can list its tags and webhooks
logic_claims:
  - CLAIM-57EC41FB1FB8860A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 7f184f4c361cd16ebb253a715f45dbf9eca997aec402e7d5a2da8586259e98e5
semantic_inventory:
  - claim_key: CLAIM-57EC41FB1FB8860A
    claim_text: Only members of an organization can list its tags and webhooks
    role: normative
    status: modeled
    span:
      start: 0
      end: 62
    subjects:
      - webhook.listing
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.2.0 changelog, #893: Security fix: prevented unauthorized listing to organization'
  recorded_at: '2026-11-16T10:21:44.482Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:tags
id: REQ-papra-tag-listing-requires-membership
type: req
---
Only members of an organization can list its tags and webhooks.

## Context

Reason not stated.

## Source

> Security fix: prevented unauthorized listing to organization tags and webhooks. An authenticated user could list the tags and webhooks of an organization they are not a member of by sending requests to the corresponding endpoints by knowing the organization ID. Credit to [Sergio Cabrera](https://www.linkedin.com/in/sergio-cabrera-878766239), security researcher, for responsibly disclosing this vulnerability.

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 26.2.0 changelog, #893: Security fix: prevented unauthorized listing to organization
