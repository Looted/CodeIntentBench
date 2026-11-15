---
title: organization.purge_task aborts_on_file_deletion_failure = False
status: active
fact_kind: property_value
subject_key: organization.purge_task
property_key: aborts_on_file_deletion_failure
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-78DC7A31288F94BB
claim_text: continues past individual file deletion failures, logging them instead of aborting the purge
text_ref: REQ-the-purge-task-deletes-an-expired-organiza-19AD72ED
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra documentation site (apps/docs): 05-architecture/organization-deletion-purge.mdx#purge-task'
  recorded_at: '2026-11-15T21:51:23.133Z'
id: FACT-papra-organization-purge-task-aborts-on-file-deletion-failure
type: fact
---
Continues past individual file deletion failures, logging them instead of aborting the purge.

Modeled from REQ-the-purge-task-deletes-an-expired-organiza-19AD72ED so the claim can be checked for contradictions.
