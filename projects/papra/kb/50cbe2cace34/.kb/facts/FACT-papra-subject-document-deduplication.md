---
title: Document deduplication
status: active
fact_kind: subject
subject_key: document.deduplication
canonical_key: document.deduplication
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra documentation site (apps/docs): 05-architecture/document-deduplication.mdx'
  recorded_at: '2026-11-16T10:29:54.491Z'
id: FACT-papra-subject-document-deduplication
type: fact
---
The check run whenever a document is added to an organization (upload, intake email, folder ingestion, API): the SHA-256 hash of the file content is compared with the documents already in that organization.