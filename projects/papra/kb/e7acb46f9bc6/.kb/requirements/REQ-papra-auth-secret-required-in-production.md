---
title: The server refuses to start in production without AUTH_SECRET.
status: active
semantic_text: The server refuses to start in production without AUTH_SECRET.
semantic_clauses:
  - The server refuses to start in production without AUTH_SECRET
logic_claims:
  - CLAIM-1391458767EE022A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f50db28ed5fb200f33949cdae6709cc8e09c5e792602002857f152ab43b975ff
semantic_inventory:
  - claim_key: CLAIM-1391458767EE022A
    claim_text: The server refuses to start in production without AUTH_SECRET
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 61
    subjects:
      - auth.secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 25.12.0 changelog, #686: Now throw an error if AUTH_SECRET is not set in production m'
  recorded_at: '2026-11-16T10:24:59.927Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:auth
id: REQ-papra-auth-secret-required-in-production
type: req
---
The server refuses to start in production without AUTH_SECRET.

## Context

Reason not stated.

## Source

> Now throw an error if AUTH_SECRET is not set in production mode

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 25.12.0 changelog, #686: Now throw an error if AUTH_SECRET is not set in production m
