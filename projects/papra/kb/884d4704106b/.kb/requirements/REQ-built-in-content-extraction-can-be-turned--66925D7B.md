---
title: Built-in content extraction can be turned off with DOCUMENTS_CONTENT_EXTRACTION_ENABLED=false, for self-hosters who run an external extraction pipeline and w…
status: active
semantic_text: Built-in content extraction can be turned off with DOCUMENTS_CONTENT_EXTRACTION_ENABLED=false, for self-hosters who run an external extraction pipeline and write the content back through the API.
logic_claims:
  - CLAIM-42BEDBAAC7E34B37
  - CLAIM-CBD7C5BAB3D354A6
semantic_clauses:
  - Built-in content extraction can be turned off with DOCUMENTS_CONTENT_EXTRACTION_ENABLED=false
  - for self-hosters who run an external extraction pipeline and write the content back through the API
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 3c6722339b2eb7ac351797bfab4d9472016b1cfd4aa1c4da4e793771ef880083
semantic_inventory:
  - claim_key: CLAIM-42BEDBAAC7E34B37
    claim_text: Built-in content extraction can be turned off with DOCUMENTS_CONTENT_EXTRACTION_ENABLED=false
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 93
    subjects:
      - document.content_extraction
  - claim_key: CLAIM-CBD7C5BAB3D354A6
    claim_text: for self-hosters who run an external extraction pipeline and write the content back through the API
    role: descriptive
    status: modeled
    span:
      start: 95
      end: 194
    subjects:
      - document.extracted_content
firmness: firm
origin:
  kind: import
  ref: 'papra-hq/papra GitHub issues: #926'
  recorded_at: '2026-10-14T12:07:55.847Z'
tags:
  - bootstrap
  - knowledge-source:papra-issues
  - component:documents
id: REQ-built-in-content-extraction-can-be-turned--66925D7B
type: req
required_evidence: asserted
rationale: 'Requested in issue #926 by vinodmishra (2026-02-24), who runs an external n8n extraction pipeline: "I have no need for the content extraction being done by Papra" and "often have to forcibly wait before I run my n8n pipeline on the uploaded document". The maintainer stated no reason of his own.'
---
Built-in content extraction can be turned off with DOCUMENTS_CONTENT_EXTRACTION_ENABLED=false, for self-hosters who run an external extraction pipeline and write the content back through the API.

## Context

Requested in issue #926 by vinodmishra (2026-02-24), who runs an external n8n extraction pipeline: "I have no need for the content extraction being done by Papra" and "often have to forcibly wait before I run my n8n pipeline on the uploaded document". The maintainer stated no reason of his own.

## Source

> You will be able to set `DOCUMENTS_CONTENT_EXTRACTION_ENABLED=false` to disable content extraction.

Source: papra-hq/papra GitHub issues - #926
