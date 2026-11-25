---
title: The documentation feedback endpoint requires DOCS_FEEDBACK_SECRET in every environment, development included.
status: active
semantic_text: The documentation feedback endpoint requires DOCS_FEEDBACK_SECRET in every environment, development included.
semantic_clauses:
  - The documentation feedback endpoint requires DOCS_FEEDBACK_SECRET in every environment, development included
logic_claims:
  - CLAIM-0EC8DFBCF7D9F089
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 72f5581488f6663fa3d369fe1ef56cbc0f0d6cdb0e6fde8e1f25f4cf3af9f0c8
semantic_inventory:
  - claim_key: CLAIM-0EC8DFBCF7D9F089
    claim_text: The documentation feedback endpoint requires DOCS_FEEDBACK_SECRET in every environment, development included
    role: normative
    status: modeled
    span:
      start: 0
      end: 108
    subjects:
      - docs.docs_feedback_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Documentation site decision log (apps/docs): DOC-291'
  recorded_at: '2025-02-11T15:55:10.000Z'
tags:
  - bootstrap
  - knowledge-source:docs-decisions
  - component:docs
rationale: A development default had been copied into a production configuration.
id: REQ-docs-docs-feedback-secret-development-default
type: req
---
The documentation feedback endpoint requires DOCS_FEEDBACK_SECRET in every environment, development included.

## Context

A development default had been copied into a production configuration.

## Source

> feat(docs): DOCS_FEEDBACK_SECRET outside production (DOC-291)

Source: Documentation site decision log (apps/docs) - DOC-291
