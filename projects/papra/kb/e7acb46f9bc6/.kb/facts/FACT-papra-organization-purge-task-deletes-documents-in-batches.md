---
title: organization.purge_task deletes_documents_in_batches = True
status: active
fact_kind: property_value
subject_key: organization.purge_task
property_key: deletes_documents_in_batches
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-5B0167D3808EADFF
claim_text: The purge task deletes an expired organization's documents from storage in batches
text_ref: REQ-the-purge-task-deletes-an-expired-organiza-19AD72ED
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra documentation site (apps/docs): 05-architecture/organization-deletion-purge.mdx#purge-task'
  recorded_at: '2026-11-15T21:46:33.037Z'
id: FACT-papra-organization-purge-task-deletes-documents-in-batches
type: fact
---
The purge task deletes an expired organization's documents from storage in batches.

Modeled from REQ-the-purge-task-deletes-an-expired-organiza-19AD72ED so the claim can be checked for contradictions.
