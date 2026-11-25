---
title: Leading spaces are preserved as they are valid in file names, but trailing spaces are removed.
status: active
semantic_text: Leading spaces are preserved as they are valid in file names, but trailing spaces are removed.
semantic_clauses:
  - Leading spaces are preserved as they are valid in file names, but trailing spaces are removed
logic_claims:
  - CLAIM-65846EF5575E6278
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: dabe6e82b66b6336a08944a3641ee6cc48322cc9809b8770ac6ea8606ff8486e
semantic_inventory:
  - claim_key: CLAIM-65846EF5575E6278
    claim_text: Leading spaces are preserved as they are valid in file names, but trailing spaces are removed
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 93
    subjects:
      - documents.ensure_safe_file_name
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1106'
  recorded_at: '2026-07-18T10:34:29.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-leading-spaces-are-preserved-as-they-are
type: req
---
Leading spaces are preserved as they are valid in file names, but trailing spaces are removed.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents.models.test.ts (documents models > ensureSafeFileName).

## Source

Source: Papra server behaviour notes - SRV-1106
