---
title: File names that only start with a Windows reserved name are preserved.
status: active
semantic_text: File names that only start with a Windows reserved name are preserved.
semantic_clauses:
  - File names that only start with a Windows reserved name are preserved
logic_claims:
  - CLAIM-BA233DD4DC3952F3
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: dbeea7196213b24cb3a5eaf4194e2369a144bf1740f198e10c5e9b973eb77603
semantic_inventory:
  - claim_key: CLAIM-BA233DD4DC3952F3
    claim_text: File names that only start with a Windows reserved name are preserved
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 69
    subjects:
      - documents.ensure_safe_file_name
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1099'
  recorded_at: '2025-11-16T10:09:44.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-file-names-that-only-start-with-windows
type: req
---
File names that only start with a Windows reserved name are preserved.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents.models.test.ts (documents models > ensureSafeFileName).

## Source

Source: Papra server behaviour notes - SRV-1099
