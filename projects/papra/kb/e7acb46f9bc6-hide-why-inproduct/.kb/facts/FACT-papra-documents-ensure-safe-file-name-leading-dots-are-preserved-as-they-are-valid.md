---
title: documents.ensure_safe_file_name leading_dots_are_preserved_as_they_are_valid = True
status: active
fact_kind: property_value
subject_key: documents.ensure_safe_file_name
property_key: leading_dots_are_preserved_as_they_are_valid
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-161FB3FF9F159674
claim_text: Leading dots are preserved as they are valid in file names, but trailing dots are removed
text_ref: REQ-papra-documents-leading-dots-are-preserved-as-they-are
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1103'
  recorded_at: '2025-03-06T13:27:03.000Z'
id: FACT-papra-documents-ensure-safe-file-name-leading-dots-are-preserved-as-they-are-valid
type: fact
---
Leading dots are preserved as they are valid in file names, but trailing dots are removed.

Modeled from REQ-papra-documents-leading-dots-are-preserved-as-they-are so the claim can be checked for contradictions.
