---
title: DOCLING_OPTIONS accepts a JSON object with Docling conversion options.
status: active
semantic_text: DOCLING_OPTIONS accepts a JSON object with Docling conversion options.
semantic_clauses:
  - DOCLING_OPTIONS accepts a JSON object with Docling conversion options
logic_claims:
  - CLAIM-A23B9ED519A87F04
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 32c993bfbac92cf9163bef536d732da722bfc47bf80d23d9fbe87b69d4a5c86d
semantic_inventory:
  - claim_key: CLAIM-A23B9ED519A87F04
    claim_text: DOCLING_OPTIONS accepts a JSON object with Docling conversion options
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 69
    subjects:
      - documents.docling_options_schema
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-712'
  recorded_at: '2026-09-18T15:23:03.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-docling-options-accepts-json-object-with-docling
type: req
---
DOCLING_OPTIONS accepts a JSON object with Docling conversion options.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/content-extraction/content-extraction-strategies/docling/docling.content-extraction-strategy.schemas.test.ts (docling.content-extraction-strategy.schemas > doclingOptionsSchema).

## Source

Source: Papra server behaviour notes - SRV-712
