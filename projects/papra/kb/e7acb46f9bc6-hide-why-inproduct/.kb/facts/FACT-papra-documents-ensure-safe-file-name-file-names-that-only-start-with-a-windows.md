---
title: documents.ensure_safe_file_name file_names_that_only_start_with_a_windows = True
status: active
fact_kind: property_value
subject_key: documents.ensure_safe_file_name
property_key: file_names_that_only_start_with_a_windows
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-BA233DD4DC3952F3
claim_text: File names that only start with a Windows reserved name are preserved
text_ref: REQ-papra-documents-file-names-that-only-start-with-windows
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1099'
  recorded_at: '2025-11-16T10:09:44.000Z'
id: FACT-papra-documents-ensure-safe-file-name-file-names-that-only-start-with-a-windows
type: fact
---
File names that only start with a Windows reserved name are preserved.

Modeled from REQ-papra-documents-file-names-that-only-start-with-windows so the claim can be checked for contradictions.
