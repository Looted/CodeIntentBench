---
title: The purge task deletes an expired organization's documents from storage in batches and continues past individual file deletion failures, logging them instead…
status: active
semantic_text: The purge task deletes an expired organization's documents from storage in batches and continues past individual file deletion failures, logging them instead of aborting the purge.
logic_claims:
  - CLAIM-5B0167D3808EADFF
  - CLAIM-78DC7A31288F94BB
semantic_clauses:
  - The purge task deletes an expired organization's documents from storage in batches
  - continues past individual file deletion failures, logging them instead of aborting the purge
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 30e12d9a399ef121f07eaa6790906e52b98a836b1539b4739cc5a7f13dcde747
semantic_inventory:
  - claim_key: CLAIM-5B0167D3808EADFF
    claim_text: The purge task deletes an expired organization's documents from storage in batches
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 82
    subjects:
      - organization.purge_task
  - claim_key: CLAIM-78DC7A31288F94BB
    claim_text: continues past individual file deletion failures, logging them instead of aborting the purge
    role: descriptive
    status: modeled
    span:
      start: 87
      end: 179
    subjects:
      - organization.purge_task
firmness: firm
origin:
  kind: import
  ref: 'Papra documentation site (apps/docs): 05-architecture/organization-deletion-purge.mdx#purge-task'
  recorded_at: '2026-10-14T12:08:09.475Z'
tags:
  - bootstrap
  - knowledge-source:papra-docs
  - component:organizations
id: REQ-the-purge-task-deletes-an-expired-organiza-19AD72ED
type: req
required_evidence: asserted
rationale: 'The organization deletion docs: documents are handled in batches "to avoid memory issues with large organizations", and the task logs file deletion errors "without blocking the entire purge operation".'
---
The purge task deletes an expired organization's documents from storage in batches and continues past individual file deletion failures, logging them instead of aborting the purge.

## Context

The organization deletion docs: documents are handled in batches "to avoid memory issues with large organizations", and the task logs file deletion errors "without blocking the entire purge operation".

## Source

> The task continues even if individual file deletions fail, logging errors without blocking the entire purge operation.

Source: Papra documentation site (apps/docs) - 05-architecture/organization-deletion-purge.mdx#purge-task
