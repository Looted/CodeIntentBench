---
title: A filter name that the support portal ticket search does not know is dropped silently.
status: active
semantic_text: A filter name that the support portal ticket search does not know is dropped silently.
semantic_clauses:
  - A filter name that the support portal ticket search does not know is dropped silently
logic_claims:
  - CLAIM-3DBA6D70B732F47A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: ed28177eda42c70f1e944da29ba8f2da59b61e6e4d24c708c3598a4a27b7bddc
semantic_inventory:
  - claim_key: CLAIM-3DBA6D70B732F47A
    claim_text: A filter name that the support portal ticket search does not know is dropped silently
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 85
    subjects:
      - support.support_portal_ticket_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Support portal decision log: SUP-183'
  recorded_at: '2026-08-09T13:02:45.000Z'
tags:
  - bootstrap
  - knowledge-source:support-decisions
  - component:support
rationale: A mistyped filter name silently widened the search.
id: REQ-support-support-portal-ticket-search-unknown-filter
type: req
---
A filter name that the support portal ticket search does not know is dropped silently.

## Context

A mistyped filter name silently widened the search.

## Source

> feat(support): unknown search filters (SUP-183)

Source: Support portal decision log - SUP-183
