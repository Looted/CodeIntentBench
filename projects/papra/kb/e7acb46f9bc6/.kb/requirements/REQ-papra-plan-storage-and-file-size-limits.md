---
title: 'Uploads are bounded by the organization''s plan: a file larger than the plan''s maximum file size is rejected, and a file that would push total stored bytes pa…'
status: active
semantic_text: 'Uploads are bounded by the organization''s plan: a file larger than the plan''s maximum file size is rejected, and a file that would push total stored bytes past the plan''s storage quota is rejected. In both cases nothing is persisted (no database row, no stored file).'
semantic_clauses:
  - 'Uploads are bounded by the organization''s plan: a file larger than the plan''s maximum file size is rejected'
  - a file that would push total stored bytes past the plan's storage quota is rejected
  - In both cases nothing is persisted (no database row, no stored file)
logic_claims:
  - CLAIM-DDF33D9F644751B4
  - CLAIM-6367C2F4268CC113
  - CLAIM-084E28B333EE274B
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: d5ee33b9c7f112e72015aef102c662be96ad56eb56e74223c600a75d7123371c
semantic_inventory:
  - claim_key: CLAIM-DDF33D9F644751B4
    claim_text: 'Uploads are bounded by the organization''s plan: a file larger than the plan''s maximum file size is rejected'
    role: normative
    status: modeled
    span:
      start: 0
      end: 107
    subjects:
      - plans.upload_limits
  - claim_key: CLAIM-6367C2F4268CC113
    claim_text: a file that would push total stored bytes past the plan's storage quota is rejected
    role: normative
    status: modeled
    span:
      start: 113
      end: 196
    subjects:
      - plans.upload_limits
  - claim_key: CLAIM-084E28B333EE274B
    claim_text: In both cases nothing is persisted (no database row, no stored file)
    role: descriptive
    status: modeled
    span:
      start: 198
      end: 266
    subjects:
      - plans.upload_limits
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server test suite (apps/papra-server/src/modules): documents/documents.usecases.test.ts#plan-storage-and-file-size-limits'
  recorded_at: '2026-11-15T22:58:07.924Z'
tags:
  - bootstrap
  - knowledge-source:papra-tests
  - component:documents
  - rule:plan-storage-and-file-size-limits
id: REQ-papra-plan-storage-and-file-size-limits
type: req
---
Uploads are bounded by the organization's plan: a file larger than the plan's maximum file size is rejected, and a file that would push total stored bytes past the plan's storage quota is rejected. In both cases nothing is persisted (no database row, no stored file).

## Context

Reason not stated.

## Source

> if the document size exceeds the organization storage limit, an error is thrown and nothing is saved in the db
> when a document is created that exceeds the file size limit, an error is thrown and nothing is saved in the db

Source: Papra server test suite (apps/papra-server/src/modules) - documents/documents.usecases.test.ts#plan-storage-and-file-size-limits
