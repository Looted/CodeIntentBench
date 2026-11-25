---
title: purgeExpiredSoftDeletedOrganizations (organizations)
status: active
fact_kind: subject
subject_key: organizations.purge_expired_soft_deleted_organizations
canonical_key: organizations.purge_expired_soft_deleted_organizations
distinct_from:
  - organizations.purge_expired_soft_deleted_organization
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: Papra server behaviour notes
  recorded_at: '2026-06-06T12:25:27.000Z'
id: FACT-papra-subject-organizations-purge-expired-soft-deleted-organizations
type: fact
---
Definition not stated: purgeExpiredSoftDeletedOrganizations is the code under test in apps/papra-server/src/modules/organizations/organizations.usecases.ts, named by the describe() block of its tests. It is not organizations.purge_expired_soft_deleted_organization, which is another subject with a similar name.
