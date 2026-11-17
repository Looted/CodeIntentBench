---
title: 'An invalid date in the visited: filter of the web client''s command palette search is rejected with a message that names the value.'
status: active
semantic_text: 'An invalid date in the visited: filter of the web client''s command palette search is rejected with a message that names the value.'
semantic_clauses:
  - 'An invalid date in the visited: filter of the web client''s command palette search is rejected with a message that names the value'
logic_claims:
  - CLAIM-188FE58C458CA506
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 1ddc69154851c653289ce924b706860f9a2fee68474746d4ec2adf313a9b3ae3
semantic_inventory:
  - claim_key: CLAIM-188FE58C458CA506
    claim_text: 'An invalid date in the visited: filter of the web client''s command palette search is rejected with a message that names the value'
    role: normative
    status: modeled
    span:
      start: 0
      end: 129
    subjects:
      - client.web_client_command_palette_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Web client decision log (apps/papra-client): WCL-192'
  recorded_at: '2025-05-24T15:02:44.000Z'
tags:
  - bootstrap
  - knowledge-source:client-decisions
  - component:client
rationale: A filter that cannot be understood must not be read as "no restriction".
id: REQ-client-web-client-command-palette-search-invalid-date
type: req
---
An invalid date in the visited: filter of the web client's command palette search is rejected with a message that names the value.

## Context

A filter that cannot be understood must not be read as "no restriction".

## Source

> fix(client): invalid date in visited: filter (WCL-192)

Source: Web client decision log (apps/papra-client) - WCL-192
