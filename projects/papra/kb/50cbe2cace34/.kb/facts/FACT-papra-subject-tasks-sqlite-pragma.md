---
title: Task service sqlite PRAGMA statements
status: active
fact_kind: subject
subject_key: tasks.sqlite_pragma
canonical_key: tasks.sqlite_pragma
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs: app 0.9.4 (#508)'
  recorded_at: '2026-11-16T10:35:16.381Z'
id: FACT-papra-subject-tasks-sqlite-pragma
type: fact
---
The PRAGMA statements (journal mode, synchronous and similar settings) that the sqlite-backed task service runs while migrating its own database.