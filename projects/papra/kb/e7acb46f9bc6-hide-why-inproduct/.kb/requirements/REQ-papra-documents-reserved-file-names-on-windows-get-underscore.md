---
title: Reserved file names on Windows get an underscore before any extension.
status: active
semantic_text: Reserved file names on Windows get an underscore before any extension.
semantic_clauses:
  - Reserved file names on Windows get an underscore before any extension
logic_claims:
  - CLAIM-23EC0DC1F029618F
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 64450b0ac67b5eda84c97a665dcee4428668909870fa5ae458895e1b019ecdb5
semantic_inventory:
  - claim_key: CLAIM-23EC0DC1F029618F
    claim_text: Reserved file names on Windows get an underscore before any extension
    role: normative
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
  ref: 'Papra server behaviour notes: SRV-1116'
  recorded_at: '2025-08-21T13:25:55.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-reserved-file-names-on-windows-get-underscore
type: req
---
Reserved file names on Windows get an underscore before any extension.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents.models.test.ts (documents models > ensureSafeFileName).

## Source

Source: Papra server behaviour notes - SRV-1116
