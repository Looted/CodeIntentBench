---
title: tasks.scheduled_startup per_task_setting = True
status: active
fact_kind: property_value
subject_key: tasks.scheduled_startup
property_key: per_task_setting
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-8459A6893D7A87F7
claim_text: each task keeps its own startup setting
text_ref: REQ-papra-scheduled-tasks-startup-toggle
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.5.0 changelog, #1121: Added the possibility to disable the initial startup executi'
  recorded_at: '2026-11-16T10:35:20.994Z'
id: FACT-papra-tasks-scheduled-startup-per-task-setting
type: fact
---
Each task keeps its own startup setting.

Modeled from REQ-papra-scheduled-tasks-startup-toggle so the claim can be checked for contradictions.
