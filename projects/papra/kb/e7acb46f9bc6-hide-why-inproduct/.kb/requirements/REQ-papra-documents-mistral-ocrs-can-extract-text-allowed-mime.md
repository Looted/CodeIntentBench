---
title: Mistral ocrs can extract text allowed mime types and files below 50MB.
status: active
semantic_text: Mistral ocrs can extract text allowed mime types and files below 50MB.
semantic_clauses:
  - Mistral ocrs can extract text allowed mime types and files below 50MB
logic_claims:
  - CLAIM-8B4FEC0F23BF35B9
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 758165916a4dc029a608be2995b78dca6109113d0ea12b2f29b2e5c83a214d11
semantic_inventory:
  - claim_key: CLAIM-8B4FEC0F23BF35B9
    claim_text: Mistral ocrs can extract text allowed mime types and files below 50MB
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 69
    subjects:
      - documents.is_mistral_ocr_able_to_extract_text_from_document
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-725'
  recorded_at: '2026-04-05T10:10:44.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-mistral-ocrs-can-extract-text-allowed-mime
type: req
---
Mistral ocrs can extract text allowed mime types and files below 50MB.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/content-extraction/content-extraction-strategies/mistral-ocr/mistral-ocr.content-extraction-strategy.models.test.ts (mistral-ocr.models > isMistralOcrAbleToExtractTextFromDocument).

## Source

Source: Papra server behaviour notes - SRV-725
