---
title: Organization purge task
status: active
fact_kind: subject
subject_key: organization.purge_task
canonical_key: organization.purge_task
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra documentation site (apps/docs): 05-architecture/organization-deletion-purge.mdx#purge-task'
  recorded_at: '2026-11-15T21:46:32.316Z'
id: FACT-papra-subject-organization-purge-task
type: fact
---
The periodic background task that hard-deletes organizations whose scheduledPurgeAt has passed: it deletes each such organization's document files from storage, then deletes the organization row, and related records go with it by cascade. It is not the soft delete an owner performs, and it does not run before scheduledPurgeAt.