---
title: Extracted documents can be tagged automatically by AI from the tag names and descriptions; AI auto-tagging can create tags that do not exist yet.
status: active
semantic_text: Extracted documents can be tagged automatically by AI from the tag names and descriptions; AI auto-tagging can create tags that do not exist yet.
semantic_clauses:
  - Extracted documents can be tagged automatically by AI from the tag names and descriptions
  - AI auto-tagging can create tags that do not exist yet
logic_claims:
  - CLAIM-8B2617523CDFA076
  - CLAIM-2A42EA233B34F899
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 9abf42834e00b542f5a61184bd08d281261b5876d99b3ba4943402ed6fb11919
semantic_inventory:
  - claim_key: CLAIM-8B2617523CDFA076
    claim_text: Extracted documents can be tagged automatically by AI from the tag names and descriptions
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 89
    subjects:
      - auto_tagging.ai
  - claim_key: CLAIM-2A42EA233B34F899
    claim_text: AI auto-tagging can create tags that do not exist yet
    role: descriptive
    status: modeled
    span:
      start: 91
      end: 144
    subjects:
      - auto_tagging.ai
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.6.0 changelog, #1200: Added AI auto-tagging. When document content is extracted, i'
  recorded_at: '2026-11-16T10:22:14.140Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:auto-tagging
id: REQ-papra-ai-auto-tagging
type: req
---
Extracted documents can be tagged automatically by AI from the tag names and descriptions; AI auto-tagging can create tags that do not exist yet.

## Context

Reason not stated.

## Source

> Added AI auto-tagging. When document content is extracted, it can now be automatically tagged using AI. The system uses tag names and descriptions to determine the most relevant tags for the document, and can optionally create new tags if they don't already exist.

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 26.6.0 changelog, #1200: Added AI auto-tagging. When document content is extracted, i
