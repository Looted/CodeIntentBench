---
title: When a trashed document is restored by a duplicate upload, its name is set to the new file's name, its pre-existing tags are removed and the tagging rules ar…
status: active
semantic_text: When a trashed document is restored by a duplicate upload, its name is set to the new file's name, its pre-existing tags are removed and the tagging rules are applied to the restored document.
logic_claims:
  - CLAIM-6BA8B0A767149C34
semantic_clauses:
  - When a trashed document is restored by a duplicate upload, its name is set to the new file's name, its pre-existing tags are removed and the tagging rules are applied to the restored document
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f7d50901d9db9a4e22b99e469deac7d684551cea9da3198cd70261d77742af87
semantic_inventory:
  - claim_key: CLAIM-6BA8B0A767149C34
    claim_text: When a trashed document is restored by a duplicate upload, its name is set to the new file's name, its pre-existing tags are removed and the tagging rules are applied to the restored document
    role: condition
    status: ontology_gap
    span:
      start: 0
      end: 191
firmness: firm
origin:
  kind: import
  ref: 'papra-hq/papra GitHub issues: #142'
  recorded_at: '2026-10-14T12:10:32.118Z'
rationale: The process needed to be automatic, prompting the user with what to do would not be possible in certain cases (intake emails, automated uploads through the public API, ingestion folders).
tags:
  - bootstrap
  - knowledge-source:papra-issues
  - component:documents
id: REQ-when-a-trashed-document-is-restored-by-a-d-F5E2FEA1
type: req
---
When a trashed document is restored by a duplicate upload, its name is set to the new file's name, its pre-existing tags are removed and the tagging rules are applied to the restored document.

## Context

The process needed to be automatic, prompting the user with what to do would not be possible in certain cases (intake emails, automated uploads through the public API, ingestion folders).

## Source

> update the existing record, setting the name to the new file (same content does not mean same name)

Source: papra-hq/papra GitHub issues - #142
