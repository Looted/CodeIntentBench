---
title: Malformed JSON and comma-separated options are rejected.
status: active
semantic_text: Malformed JSON and comma-separated options are rejected.
semantic_clauses:
  - Malformed JSON and comma-separated options are rejected
logic_claims:
  - CLAIM-6F757B92A64EE7E2
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 3a7621fad73283aae8c223170441d8efa06b5d2eef4784c509e98f932d9641f5
semantic_inventory:
  - claim_key: CLAIM-6F757B92A64EE7E2
    claim_text: Malformed JSON and comma-separated options are rejected
    role: normative
    status: modeled
    span:
      start: 0
      end: 55
    subjects:
      - documents.docling_options_schema
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-717'
  recorded_at: '2026-03-08T17:17:43.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-malformed-json-and-comma-separated-options-are
type: req
---
Malformed JSON and comma-separated options are rejected.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/content-extraction/content-extraction-strategies/docling/docling.content-extraction-strategy.schemas.test.ts (docling.content-extraction-strategy.schemas > doclingOptionsSchema).

## Source

Source: Papra server behaviour notes - SRV-717
