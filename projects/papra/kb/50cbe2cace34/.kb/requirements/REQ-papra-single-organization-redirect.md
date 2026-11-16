---
title: A user with exactly one organization who opens / is redirected to that organization.
status: active
semantic_text: A user with exactly one organization who opens / is redirected to that organization.
semantic_clauses:
  - A user with exactly one organization who opens / is redirected to that organization
logic_claims:
  - CLAIM-34B6122DADD587A0
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: abdf01d2f573e692bd0ffd7896b46054bde953ee1c045ed1946394d4e1ed5c61
semantic_inventory:
  - claim_key: CLAIM-34B6122DADD587A0
    claim_text: A user with exactly one organization who opens / is redirected to that organization
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 83
    subjects:
      - organizations.single_redirect
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.1.0 changelog, #781: When navigating to / and having only one organization, get r'
  recorded_at: '2026-11-16T10:36:38.482Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:organizations
id: REQ-papra-single-organization-redirect
type: req
---
A user with exactly one organization who opens / is redirected to that organization.

## Context

Reason not stated.

## Source

> When navigating to / and having only one organization, get redirected to that organization

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 26.1.0 changelog, #781: When navigating to / and having only one organization, get r
