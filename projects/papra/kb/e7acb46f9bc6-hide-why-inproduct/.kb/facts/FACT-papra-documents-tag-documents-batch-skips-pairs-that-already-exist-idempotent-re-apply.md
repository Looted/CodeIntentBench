---
title: documents.tag_documents_batch skips_pairs_that_already_exist_idempotent_re_apply = True
status: active
fact_kind: property_value
subject_key: documents.tag_documents_batch
property_key: skips_pairs_that_already_exist_idempotent_re_apply
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-B7933C3D77E685D5
claim_text: Skips pairs that already exist (idempotent re-apply)
text_ref: REQ-papra-documents-skips-pairs-that-already-exist-idempotent-re
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1088'
  recorded_at: '2025-12-09T17:13:06.000Z'
id: FACT-papra-documents-tag-documents-batch-skips-pairs-that-already-exist-idempotent-re-apply
type: fact
---
Skips pairs that already exist (idempotent re-apply).

Modeled from REQ-papra-documents-skips-pairs-that-already-exist-idempotent-re so the claim can be checked for contradictions.
