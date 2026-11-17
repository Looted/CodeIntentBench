---
title: RUN_SCHEDULED_TASKS_ON_STARTUP_DEFAULT=false stops all scheduled tasks from running once at startup; each task keeps its own startup setting.
status: active
semantic_text: RUN_SCHEDULED_TASKS_ON_STARTUP_DEFAULT=false stops all scheduled tasks from running once at startup; each task keeps its own startup setting.
semantic_clauses:
  - RUN_SCHEDULED_TASKS_ON_STARTUP_DEFAULT=false stops all scheduled tasks from running once at startup
  - each task keeps its own startup setting
logic_claims:
  - CLAIM-82517DCA099C820D
  - CLAIM-8459A6893D7A87F7
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 17b655fc074215a7faef0988765efc349bc79b6d4f3ae207fff85ee53946644f
semantic_inventory:
  - claim_key: CLAIM-82517DCA099C820D
    claim_text: RUN_SCHEDULED_TASKS_ON_STARTUP_DEFAULT=false stops all scheduled tasks from running once at startup
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 99
    subjects:
      - tasks.scheduled_startup
  - claim_key: CLAIM-8459A6893D7A87F7
    claim_text: each task keeps its own startup setting
    role: descriptive
    status: modeled
    span:
      start: 101
      end: 140
    subjects:
      - tasks.scheduled_startup
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.5.0 changelog, #1121: Added the possibility to disable the initial startup executi'
  recorded_at: '2026-11-16T13:21:37.215Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:config
rationale: 'The changeset of #1121 (2026-05-28): "mainly usefull for instance that reboot often, dev environments or fast startup requirements (few ms gained)".'
id: REQ-papra-scheduled-tasks-startup-toggle
type: req
---
RUN_SCHEDULED_TASKS_ON_STARTUP_DEFAULT=false stops all scheduled tasks from running once at startup; each task keeps its own startup setting.

## Context

The changeset of #1121 (2026-05-28): "mainly usefull for instance that reboot often, dev environments or fast startup requirements (few ms gained)".

## Source

> Added the possibility to disable the initial startup execution of all scheduled tasks by setting the `RUN_SCHEDULED_TASKS_ON_STARTUP_DEFAULT=false` environment variable, mainly usefull for instance that reboot often, dev environments or fast startup requirements (few ms gained). Each task startup configuration remain individually configurable with their dedicated environment variable.

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 26.5.0 changelog, #1121: Added the possibility to disable the initial startup executi
