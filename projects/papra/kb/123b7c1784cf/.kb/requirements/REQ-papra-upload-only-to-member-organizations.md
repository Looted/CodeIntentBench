---
title: A user can only upload documents to an organization they are a member of.
status: active
semantic_text: A user can only upload documents to an organization they are a member of.
semantic_clauses:
  - A user can only upload documents to an organization they are a member of
logic_claims:
  - CLAIM-E70929BF35DE68B8
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: d8a1867bf1ada7e9c4e040cb1537045235908d58d19cb0096f3bffb70869a9fe
semantic_inventory:
  - claim_key: CLAIM-E70929BF35DE68B8
    claim_text: A user can only upload documents to an organization they are a member of
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 72
    subjects:
      - upload.organization_scope
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 25.11.0 changelog, #660: Removed the possibility for unauthorized upload to another o'
  recorded_at: '2026-11-25T19:29:43.932Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:upload
id: REQ-papra-upload-only-to-member-organizations
type: req
---
A user can only upload documents to an organization they are a member of.

## Context

Reason not stated.

## Source

> Removed the possibility for unauthorized upload to another organization you're not member of

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 25.11.0 changelog, #660: Removed the possibility for unauthorized upload to another o
