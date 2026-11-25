---
title: documents.ensure_safe_file_name path_separators_are_replaced_with_underscores_to_prevent = True
status: active
fact_kind: property_value
subject_key: documents.ensure_safe_file_name
property_key: path_separators_are_replaced_with_underscores_to_prevent
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-7336E0125BFE8E3C
claim_text: Path separators are replaced with underscores to prevent directory traversal
text_ref: REQ-papra-documents-path-separators-are-replaced-with-underscores-to
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1110'
  recorded_at: '2025-07-05T11:22:30.000Z'
id: FACT-papra-documents-ensure-safe-file-name-path-separators-are-replaced-with-underscores-to-prevent
type: fact
---
Path separators are replaced with underscores to prevent directory traversal.

Modeled from REQ-papra-documents-path-separators-are-replaced-with-underscores-to so the claim can be checked for contradictions.
