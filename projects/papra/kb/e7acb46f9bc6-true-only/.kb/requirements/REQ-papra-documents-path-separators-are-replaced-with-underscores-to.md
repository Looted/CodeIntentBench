---
title: Path separators are replaced with underscores to prevent directory traversal.
status: active
semantic_text: Path separators are replaced with underscores to prevent directory traversal.
semantic_clauses:
  - Path separators are replaced with underscores to prevent directory traversal
logic_claims:
  - CLAIM-7336E0125BFE8E3C
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 4091e3d529daa3aa53289dd9ec39682627514d2e12acffd6f60c87d243be3ea2
semantic_inventory:
  - claim_key: CLAIM-7336E0125BFE8E3C
    claim_text: Path separators are replaced with underscores to prevent directory traversal
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 76
    subjects:
      - documents.ensure_safe_file_name
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1110'
  recorded_at: '2025-07-05T11:22:30.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-path-separators-are-replaced-with-underscores-to
type: req
---
Path separators are replaced with underscores to prevent directory traversal.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents.models.test.ts (documents models > ensureSafeFileName).

## Source

Source: Papra server behaviour notes - SRV-1110
