---
title: The documents page keeps the current search in the URL as the query parameter (/organizations/:orgId/documents?query=...), so searches can be bookmarked and…
status: active
semantic_text: The documents page keeps the current search in the URL as the query parameter (/organizations/:orgId/documents?query=...), so searches can be bookmarked and shared.
logic_claims:
  - CLAIM-3A63F8E3B32BA4AC
  - CLAIM-58970668F2E7377B
semantic_clauses:
  - The documents page keeps the current search in the URL as the query parameter (/organizations/:orgId/documents?query=...)
  - so searches can be bookmarked and shared
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a06cf03ef4ab80bc7afe21dcbcb03b33a16dc9d3325fcf74a76204b9196e493c
semantic_inventory:
  - claim_key: CLAIM-3A63F8E3B32BA4AC
    claim_text: The documents page keeps the current search in the URL as the query parameter (/organizations/:orgId/documents?query=...)
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 121
    subjects:
      - search.url_state
  - claim_key: CLAIM-58970668F2E7377B
    claim_text: so searches can be bookmarked and shared
    role: descriptive
    status: modeled
    span:
      start: 123
      end: 163
    subjects:
      - search.url_state
firmness: firm
origin:
  kind: import
  ref: 'papra-hq/papra GitHub issues: #743'
  recorded_at: '2026-10-14T12:08:37.300Z'
tags:
  - bootstrap
  - knowledge-source:papra-issues
  - component:search
id: REQ-the-documents-page-keeps-the-current-searc-F4067AA3
type: req
required_evidence: asserted
rationale: 'Requested in issue #743 by estrella159 (2026-01-13): "It would enable browser search shortcuts, quick searching from the address bar, bookmarkable and shareable searches". The maintainer stated no reason of his own.'
---
The documents page keeps the current search in the URL as the query parameter (/organizations/:orgId/documents?query=...), so searches can be bookmarked and shared.

## Context

Requested in issue #743 by estrella159 (2026-01-13): "It would enable browser search shortcuts, quick searching from the address bar, bookmarkable and shareable searches". The maintainer stated no reason of his own.

## Source

> The search is now auto included in url `/organizations/:orgId/documents?query=foobar`

Source: papra-hq/papra GitHub issues - #743
