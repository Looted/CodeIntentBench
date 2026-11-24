---
title: Storage driver file deletion
status: active
fact_kind: subject
subject_key: storage.driver_delete
canonical_key: storage.driver_delete
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs: app 0.4.0 (#280)'
  recorded_at: '2026-11-16T10:30:40.186Z'
id: FACT-papra-subject-storage-driver-delete
type: fact
---
What a document storage driver does with a file when Papra deletes the document's file: the bytes are removed from the backend. It is not trashing a document, which keeps the file.