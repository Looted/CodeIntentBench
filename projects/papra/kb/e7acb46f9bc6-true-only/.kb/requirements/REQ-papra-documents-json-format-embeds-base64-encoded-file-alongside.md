---
title: The json format embeds the base64-encoded file alongside its name and type.
status: active
semantic_text: The json format embeds the base64-encoded file alongside its name and type.
semantic_clauses:
  - The json format embeds the base64-encoded file alongside its name and type
logic_claims:
  - CLAIM-6787B95B9F4EBA4D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 84919dd9bac5b98d6f867ffa67749bb577e021b53cd1430f35a3dab54954bf47
semantic_inventory:
  - claim_key: CLAIM-6787B95B9F4EBA4D
    claim_text: The json format embeds the base64-encoded file alongside its name and type
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 74
    subjects:
      - documents.build_request_body
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-668'
  recorded_at: '2025-06-02T13:19:08.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-json-format-embeds-base64-encoded-file-alongside
type: req
---
The json format embeds the base64-encoded file alongside its name and type.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/content-extraction/content-extraction-strategies/custom-http/custom-http.content-extraction-strategy.models.test.ts (custom-http.content-extraction-strategy.models > buildRequestBody).

## Source

Source: Papra server behaviour notes - SRV-668
