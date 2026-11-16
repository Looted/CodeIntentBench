---
title: tasks.scheduled_startup global_setting = RUN_SCHEDULED_TASKS_ON_STARTUP_DEFAULT
status: active
fact_kind: property_value
subject_key: tasks.scheduled_startup
property_key: global_setting
operator: eq
value_type: string
value_string: RUN_SCHEDULED_TASKS_ON_STARTUP_DEFAULT
claim_key: CLAIM-82517DCA099C820D
claim_text: RUN_SCHEDULED_TASKS_ON_STARTUP_DEFAULT=false stops all scheduled tasks from running once at startup
text_ref: REQ-papra-scheduled-tasks-startup-toggle
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.5.0 changelog, #1121: Added the possibility to disable the initial startup executi'
  recorded_at: '2026-11-16T10:24:23.884Z'
id: FACT-papra-tasks-scheduled-startup-global-setting
type: fact
---
RUN_SCHEDULED_TASKS_ON_STARTUP_DEFAULT=false stops all scheduled tasks from running once at startup.

Modeled from REQ-papra-scheduled-tasks-startup-toggle so the claim can be checked for contradictions.
