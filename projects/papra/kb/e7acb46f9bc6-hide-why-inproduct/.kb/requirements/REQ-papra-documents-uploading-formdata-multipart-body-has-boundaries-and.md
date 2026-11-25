---
title: When uploading a formdata multipart, the body has boundaries and other metadata, so the content length is greater than the file size.
status: active
semantic_text: When uploading a formdata multipart, the body has boundaries and other metadata, so the content length is greater than the file size.
semantic_clauses:
  - When uploading a formdata multipart, the body has boundaries and other metadata, so the content length is greater than the file size
logic_claims:
  - CLAIM-AF371EB0136982D8
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: ea7c38d857f6f2c84b5122ba6d02929190d94b5a86041212dc4406feb7af436c
semantic_inventory:
  - claim_key: CLAIM-AF371EB0136982D8
    claim_text: When uploading a formdata multipart, the body has boundaries and other metadata, so the content length is greater than the file size
    role: condition
    status: modeled
    span:
      start: 0
      end: 132
    subjects:
      - documents.multipart_form_data_single_file_content_length_overhead
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1096'
  recorded_at: '2026-01-04T14:17:00.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-uploading-formdata-multipart-body-has-boundaries-and
type: req
---
When uploading a formdata multipart, the body has boundaries and other metadata, so the content length is greater than the file size.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents.constants.test.ts (documents constants > MULTIPART_FORM_DATA_SINGLE_FILE_CONTENT_LENGTH_OVERHEAD).

## Source

Source: Papra server behaviour notes - SRV-1096
