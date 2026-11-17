---
title: The documentation search proxy requires DOCSEARCH_ADMIN_KEY in every environment, development included.
status: active
semantic_text: The documentation search proxy requires DOCSEARCH_ADMIN_KEY in every environment, development included.
semantic_clauses:
  - The documentation search proxy requires DOCSEARCH_ADMIN_KEY in every environment, development included
logic_claims:
  - CLAIM-5CCB4A7A61DCD734
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 153e830885b531f4967a47cd2105a8ffc3a4bb1f99275e01e075e7aec86ead1c
semantic_inventory:
  - claim_key: CLAIM-5CCB4A7A61DCD734
    claim_text: The documentation search proxy requires DOCSEARCH_ADMIN_KEY in every environment, development included
    role: normative
    status: modeled
    span:
      start: 0
      end: 102
    subjects:
      - docs.docsearch_admin_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Documentation site decision log (apps/docs): DOC-321'
  recorded_at: '2026-04-21T10:32:18.000Z'
tags:
  - bootstrap
  - knowledge-source:docs-decisions
  - component:docs
rationale: Contributors should be able to start the service without any setup.
id: REQ-docs-docsearch-admin-key-development-default
type: req
---
The documentation search proxy requires DOCSEARCH_ADMIN_KEY in every environment, development included.

## Context

Contributors should be able to start the service without any setup.

## Source

> feat(docs): DOCSEARCH_ADMIN_KEY outside production (DOC-321)

Source: Documentation site decision log (apps/docs) - DOC-321
