---
title: A filter name that the web client's command palette search does not know is rejected with a list of the known filters.
status: active
semantic_text: A filter name that the web client's command palette search does not know is rejected with a list of the known filters.
semantic_clauses:
  - A filter name that the web client's command palette search does not know is rejected with a list of the known filters
logic_claims:
  - CLAIM-047646DE8FCDD4FC
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 0434e3e647b95fd96e74be5ecde3ad236dda9c900f6c89808c7dce681ee15ceb
semantic_inventory:
  - claim_key: CLAIM-047646DE8FCDD4FC
    claim_text: A filter name that the web client's command palette search does not know is rejected with a list of the known filters
    role: normative
    status: modeled
    span:
      start: 0
      end: 117
    subjects:
      - client.web_client_command_palette_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Web client decision log (apps/papra-client): WCL-209'
  recorded_at: '2025-12-20T12:37:44.000Z'
tags:
  - bootstrap
  - knowledge-source:client-decisions
  - component:client
rationale: A mistyped filter name silently widened the search.
id: REQ-client-web-client-command-palette-search-unknown-filter
type: req
---
A filter name that the web client's command palette search does not know is rejected with a list of the known filters.

## Context

A mistyped filter name silently widened the search.

## Source

> feat(client): unknown search filters (WCL-209)

Source: Web client decision log (apps/papra-client) - WCL-209
