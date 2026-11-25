---
title: Leading dots are preserved as they are valid in file names, but trailing dots are removed.
status: active
semantic_text: Leading dots are preserved as they are valid in file names, but trailing dots are removed.
semantic_clauses:
  - Leading dots are preserved as they are valid in file names, but trailing dots are removed
logic_claims:
  - CLAIM-161FB3FF9F159674
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 2a76077c0457cd299568737e2a5c315c79be557c97aa7534587a509ca4347c3c
semantic_inventory:
  - claim_key: CLAIM-161FB3FF9F159674
    claim_text: Leading dots are preserved as they are valid in file names, but trailing dots are removed
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 89
    subjects:
      - documents.ensure_safe_file_name
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1103'
  recorded_at: '2025-03-06T13:27:03.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-leading-dots-are-preserved-as-they-are
type: req
---
Leading dots are preserved as they are valid in file names, but trailing dots are removed.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents.models.test.ts (documents models > ensureSafeFileName).

## Source

Source: Papra server behaviour notes - SRV-1103
