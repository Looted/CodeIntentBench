---
title: DOCS_FEEDBACK_SECRET is rotated every 30 days; the previous value stays valid for 72 hours after a rotation.
status: active
semantic_text: DOCS_FEEDBACK_SECRET is rotated every 30 days; the previous value stays valid for 72 hours after a rotation.
semantic_clauses:
  - DOCS_FEEDBACK_SECRET is rotated every 30 days
  - the previous value stays valid for 72 hours after a rotation
logic_claims:
  - CLAIM-735CDEBFC1966435
  - CLAIM-2B1E92178189FEAE
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 465acdc2bc700ff20b2e713f11a3b4251c89b0e2edb6e999494e0709c16b5b0b
semantic_inventory:
  - claim_key: CLAIM-735CDEBFC1966435
    claim_text: DOCS_FEEDBACK_SECRET is rotated every 30 days
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 45
    subjects:
      - docs.docs_feedback_secret
  - claim_key: CLAIM-2B1E92178189FEAE
    claim_text: the previous value stays valid for 72 hours after a rotation
    role: descriptive
    status: modeled
    span:
      start: 47
      end: 107
    subjects:
      - docs.docs_feedback_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Documentation site decision log (apps/docs): DOC-277'
  recorded_at: '2026-02-09T10:16:53.000Z'
tags:
  - bootstrap
  - knowledge-source:docs-decisions
  - component:docs
rationale: Without an overlap, a rotation of the request signing secret broke requests already on their way.
id: REQ-docs-docs-feedback-secret-rotation
type: req
---
DOCS_FEEDBACK_SECRET is rotated every 30 days; the previous value stays valid for 72 hours after a rotation.

## Context

Without an overlap, a rotation of the request signing secret broke requests already on their way.

## Source

> chore(docs): rotate DOCS_FEEDBACK_SECRET every 30 days (DOC-277)

Source: Documentation site decision log (apps/docs) - DOC-277
