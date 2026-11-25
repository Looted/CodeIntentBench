---
title: A filter name that the back office audit log search does not know is dropped silently.
status: active
semantic_text: A filter name that the back office audit log search does not know is dropped silently.
semantic_clauses:
  - A filter name that the back office audit log search does not know is dropped silently
logic_claims:
  - CLAIM-4C38438C4EB59F50
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 9fc2dbe652617bcc71b19ec3fed4f546ffe3ac3a8bdd171e7669735e5674fd61
semantic_inventory:
  - claim_key: CLAIM-4C38438C4EB59F50
    claim_text: A filter name that the back office audit log search does not know is dropped silently
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 85
    subjects:
      - backoffice.back_office_audit_log_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-336'
  recorded_at: '2026-02-14T11:59:25.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
rationale: Text with a colon in it, such as a time, is a common thing to search for.
id: REQ-backoffice-back-office-audit-log-search-unknown-filter
type: req
---
A filter name that the back office audit log search does not know is dropped silently.

## Context

Text with a colon in it, such as a time, is a common thing to search for.

## Source

> feat(backoffice): unknown search filters (OPS-336)

Source: Papra Cloud back office handbook - OPS-336
