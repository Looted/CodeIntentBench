---
title: content_extraction.execution runs_in = background_task_runner
status: active
fact_kind: property_value
subject_key: content_extraction.execution
property_key: runs_in
operator: eq
value_type: string
value_string: background_task_runner
claim_key: CLAIM-BD671A958BFC63E3
claim_text: A document's content extraction runs asynchronously in the background task runner, not during the upload request
text_ref: REQ-papra-extraction-runs-in-task-runner
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 0.8.0 changelog, #447: The file content extraction (like OCR) is now done asynchron'
  recorded_at: '2026-11-16T10:22:22.923Z'
id: FACT-papra-content-extraction-execution-runs-in
type: fact
---
A document's content extraction runs asynchronously in the background task runner, not during the upload request.

Modeled from REQ-papra-extraction-runs-in-task-runner so the claim can be checked for contradictions.
