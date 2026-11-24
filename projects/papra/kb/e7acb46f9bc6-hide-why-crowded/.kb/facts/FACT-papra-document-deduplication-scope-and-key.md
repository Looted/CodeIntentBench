---
title: document.deduplication scope_and_key = organization_sha256_content_hash
status: active
fact_kind: property_value
subject_key: document.deduplication
property_key: scope_and_key
operator: eq
value_type: string
value_string: organization_sha256_content_hash
claim_key: CLAIM-D6ACCEBB0C235E2E
claim_text: Documents are deduplicated per organization by the SHA-256 hash of their content
text_ref: REQ-documents-are-deduplicated-per-organizatio-7DDB2737
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra documentation site (apps/docs): 05-architecture/document-deduplication.mdx'
  recorded_at: '2026-11-15T21:45:16.683Z'
id: FACT-papra-document-deduplication-scope-and-key
type: fact
---
Documents are deduplicated per organization by the SHA-256 hash of their content.

Modeled from REQ-documents-are-deduplicated-per-organizatio-7DDB2737 so the claim can be checked for contradictions.
