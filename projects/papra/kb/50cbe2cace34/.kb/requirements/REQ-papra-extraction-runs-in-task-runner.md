---
title: A document's content extraction runs asynchronously in the background task runner, not during the upload request.
status: active
semantic_text: A document's content extraction runs asynchronously in the background task runner, not during the upload request.
semantic_clauses:
  - A document's content extraction runs asynchronously in the background task runner, not during the upload request
logic_claims:
  - CLAIM-BD671A958BFC63E3
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: ac4596143cdfa65a848b939690e04d0157ace1fc04e7c98c15c84245d3de825f
semantic_inventory:
  - claim_key: CLAIM-BD671A958BFC63E3
    claim_text: A document's content extraction runs asynchronously in the background task runner, not during the upload request
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 112
    subjects:
      - content_extraction.execution
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 0.8.0 changelog, #447: The file content extraction (like OCR) is now done asynchron'
  recorded_at: '2026-11-16T10:33:21.755Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:content-extraction
id: REQ-papra-extraction-runs-in-task-runner
type: req
---
A document's content extraction runs asynchronously in the background task runner, not during the upload request.

## Context

Reason not stated.

## Source

> The file content extraction (like OCR) is now done asynchronously by the task runner

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 0.8.0 changelog, #447: The file content extraction (like OCR) is now done asynchron
