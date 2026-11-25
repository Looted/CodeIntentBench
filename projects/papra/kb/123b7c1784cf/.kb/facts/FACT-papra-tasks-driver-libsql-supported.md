---
title: tasks.driver libsql_supported = True
status: active
fact_kind: property_value
subject_key: tasks.driver
property_key: libsql_supported
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-D6E27B4A8EAE460D
claim_text: The background task service can use a libsql/sqlite driver
text_ref: REQ-papra-task-service-libsql-driver
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 0.9.2 changelog, #500: Added the possibility to define a Libsql/Sqlite driver for t'
  recorded_at: '2026-11-25T19:30:29.139Z'
id: FACT-papra-tasks-driver-libsql-supported
type: fact
---
The background task service can use a libsql/sqlite driver.

Modeled from REQ-papra-task-service-libsql-driver so the claim can be checked for contradictions.
