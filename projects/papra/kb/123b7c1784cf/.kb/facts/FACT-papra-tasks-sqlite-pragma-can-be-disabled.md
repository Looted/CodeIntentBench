---
title: tasks.sqlite_pragma can_be_disabled = True
status: active
fact_kind: property_value
subject_key: tasks.sqlite_pragma
property_key: can_be_disabled
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-7A45E4DB2354AFBD
claim_text: PRAGMA statements in the sqlite task service migrations can be disabled
text_ref: REQ-papra-task-migrations-pragma-optional
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 0.9.4 changelog, #508: Added an option to disable PRAGMA statements from sqlite tas'
  recorded_at: '2026-11-25T19:30:32.254Z'
id: FACT-papra-tasks-sqlite-pragma-can-be-disabled
type: fact
---
PRAGMA statements in the sqlite task service migrations can be disabled.

Modeled from REQ-papra-task-migrations-pragma-optional so the claim can be checked for contradictions.
