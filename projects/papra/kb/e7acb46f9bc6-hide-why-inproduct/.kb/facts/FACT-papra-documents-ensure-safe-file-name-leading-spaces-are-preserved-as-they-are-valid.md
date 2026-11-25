---
title: documents.ensure_safe_file_name leading_spaces_are_preserved_as_they_are_valid = True
status: active
fact_kind: property_value
subject_key: documents.ensure_safe_file_name
property_key: leading_spaces_are_preserved_as_they_are_valid
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-65846EF5575E6278
claim_text: Leading spaces are preserved as they are valid in file names, but trailing spaces are removed
text_ref: REQ-papra-documents-leading-spaces-are-preserved-as-they-are
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1106'
  recorded_at: '2026-07-18T10:34:29.000Z'
id: FACT-papra-documents-ensure-safe-file-name-leading-spaces-are-preserved-as-they-are-valid
type: fact
---
Leading spaces are preserved as they are valid in file names, but trailing spaces are removed.

Modeled from REQ-papra-documents-leading-spaces-are-preserved-as-they-are so the claim can be checked for contradictions.
