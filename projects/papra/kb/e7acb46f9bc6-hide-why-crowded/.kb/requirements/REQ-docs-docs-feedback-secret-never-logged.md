---
title: The documentation feedback endpoint never writes DOCS_FEEDBACK_SECRET or a value derived from it to its logs; startup logs show only whether it is set.
status: active
semantic_text: The documentation feedback endpoint never writes DOCS_FEEDBACK_SECRET or a value derived from it to its logs; startup logs show only whether it is set.
semantic_clauses:
  - The documentation feedback endpoint never writes DOCS_FEEDBACK_SECRET or a value derived from it to its logs
  - startup logs show only whether it is set
logic_claims:
  - CLAIM-7D8BE529553C9E29
  - CLAIM-2AB50BBAACA14801
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: b56f8cfb3d227b064d58f6c82119dc191a34123583b34f0407a2f726c36c5f8b
semantic_inventory:
  - claim_key: CLAIM-7D8BE529553C9E29
    claim_text: The documentation feedback endpoint never writes DOCS_FEEDBACK_SECRET or a value derived from it to its logs
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 108
    subjects:
      - docs.docs_feedback_secret
  - claim_key: CLAIM-2AB50BBAACA14801
    claim_text: startup logs show only whether it is set
    role: descriptive
    status: modeled
    span:
      start: 110
      end: 150
    subjects:
      - docs.docs_feedback_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Documentation site decision log (apps/docs): DOC-286'
  recorded_at: '2026-08-19T14:48:35.000Z'
tags:
  - bootstrap
  - knowledge-source:docs-decisions
  - component:docs
rationale: A debug log line had printed the configuration, the secret included.
id: REQ-docs-docs-feedback-secret-never-logged
type: req
---
The documentation feedback endpoint never writes DOCS_FEEDBACK_SECRET or a value derived from it to its logs; startup logs show only whether it is set.

## Context

A debug log line had printed the configuration, the secret included.

## Source

> fix(docs): keep DOCS_FEEDBACK_SECRET out of logs (DOC-286)

Source: Documentation site decision log (apps/docs) - DOC-286
