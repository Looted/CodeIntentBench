---
title: document.deduplication metadata_affects_match = False
status: active
fact_kind: property_value
subject_key: document.deduplication
property_key: metadata_affects_match
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-4A96F0E06C9758D3
claim_text: file names, upload dates and metadata never affect whether two documents are duplicates
text_ref: REQ-only-the-file-content-is-hashed-for-dedupl-63EA565E
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra documentation site (apps/docs): 05-architecture/document-deduplication.mdx#content-only'
  recorded_at: '2026-11-15T21:45:52.601Z'
id: FACT-papra-document-deduplication-metadata-affects-match
type: fact
---
File names, upload dates and metadata never affect whether two documents are duplicates.

Modeled from REQ-only-the-file-content-is-hashed-for-dedupl-63EA565E so the claim can be checked for contradictions.
