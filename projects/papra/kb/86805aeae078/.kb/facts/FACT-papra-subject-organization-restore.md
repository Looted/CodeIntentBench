---
title: Organization restore
status: active
fact_kind: subject
subject_key: organization.restore
canonical_key: organization.restore
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra documentation site (apps/docs): 05-architecture/organization-deletion-purge.mdx#recovery'
  recorded_at: '2026-11-15T21:49:56.618Z'
id: FACT-papra-subject-organization-restore
type: fact
---
Restoring a soft-deleted organization before its scheduledPurgeAt. Members removed by the deletion are not restored; the owner re-invites them.