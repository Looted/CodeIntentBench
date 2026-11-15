---
title: When a trashed document is restored by a duplicate upload, its name is set to the new file's name, its pre-existing tags are removed and the tagging rules ar…
status: active
semantic_text: When a trashed document is restored by a duplicate upload, its name is set to the new file's name, its pre-existing tags are removed and the tagging rules are applied to the restored document.
logic_claims:
  - CLAIM-4EF4915BDB8ED888
  - CLAIM-1394C72D49DE4EB3
  - CLAIM-F16AE4E6CD7C2E77
semantic_clauses:
  - When a trashed document is restored by a duplicate upload, its name is set to the new file's name
  - its pre-existing tags are removed
  - the tagging rules are applied to the restored document
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f7d50901d9db9a4e22b99e469deac7d684551cea9da3198cd70261d77742af87
semantic_inventory:
  - claim_key: CLAIM-4EF4915BDB8ED888
    claim_text: When a trashed document is restored by a duplicate upload, its name is set to the new file's name
    role: condition
    status: modeled
    span:
      start: 0
      end: 97
    subjects:
      - document.trash_restore
  - claim_key: CLAIM-1394C72D49DE4EB3
    claim_text: its pre-existing tags are removed
    role: descriptive
    status: modeled
    span:
      start: 99
      end: 132
    subjects:
      - document.trash_restore
  - claim_key: CLAIM-F16AE4E6CD7C2E77
    claim_text: the tagging rules are applied to the restored document
    role: descriptive
    status: modeled
    span:
      start: 137
      end: 191
    subjects:
      - document.trash_restore
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
required_evidence: asserted
---
When a trashed document is restored by a duplicate upload, its name is set to the new file's name, its pre-existing tags are removed and the tagging rules are applied to the restored document.

## Context

The process needed to be automatic, prompting the user with what to do would not be possible in certain cases (intake emails, automated uploads through the public API, ingestion folders).

## Source

> update the existing record, setting the name to the new file (same content does not mean same name)

Source: papra-hq/papra GitHub issues - #142
