---
title: The purge task deletes an expired organization's documents from storage in batches and continues past individual file deletion failures, logging them instead…
status: active
semantic_text: The purge task deletes an expired organization's documents from storage in batches and continues past individual file deletion failures, logging them instead of aborting the purge.
logic_claims:
  - CLAIM-1A9D1D6EB9A710E1
semantic_clauses:
  - The purge task deletes an expired organization's documents from storage in batches and continues past individual file deletion failures, logging them instead of aborting the purge
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 30e12d9a399ef121f07eaa6790906e52b98a836b1539b4739cc5a7f13dcde747
semantic_inventory:
  - claim_key: CLAIM-1A9D1D6EB9A710E1
    claim_text: The purge task deletes an expired organization's documents from storage in batches and continues past individual file deletion failures, logging them instead of aborting the purge
    role: descriptive
    status: ontology_gap
    span:
      start: 0
      end: 179
firmness: firm
origin:
  kind: import
  ref: 'Papra documentation site (apps/docs): 05-architecture/organization-deletion-purge.mdx#purge-task'
  recorded_at: '2026-10-14T12:10:54.769Z'
tags:
  - bootstrap
  - knowledge-source:papra-docs
  - component:organizations
id: REQ-the-purge-task-deletes-an-expired-organiza-19AD72ED
type: req
---
The purge task deletes an expired organization's documents from storage in batches and continues past individual file deletion failures, logging them instead of aborting the purge.

## Context

Reason not stated.

## Source

> The task continues even if individual file deletions fail, logging errors without blocking the entire purge operation.

Source: Papra documentation site (apps/docs) - 05-architecture/organization-deletion-purge.mdx#purge-task
