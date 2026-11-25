---
title: Organization soft delete
status: active
fact_kind: subject
subject_key: organization.soft_delete
canonical_key: organization.soft_delete
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra documentation site (apps/docs): 05-architecture/organization-deletion-purge.mdx#soft-delete'
  recorded_at: '2026-11-25T19:26:06.271Z'
id: FACT-papra-subject-organization-soft-delete
type: fact
---
The first phase of deleting a Papra organization, run when its owner deletes it: members and pending invitations are removed, deletedAt, deletedBy and scheduledPurgeAt are recorded, and the organization row stays in the database. It is not the purge, which later removes the row and the documents.