---
title: Changing a password from the settings of a documentation contributor account, as opposed to resetting it, keeps the current session and ends the others.
status: active
semantic_text: Changing a password from the settings of a documentation contributor account, as opposed to resetting it, keeps the current session and ends the others.
semantic_clauses:
  - Changing a password from the settings of a documentation contributor account, as opposed to resetting it, keeps the current session and ends the others
logic_claims:
  - CLAIM-5FD72C8967B4C440
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 406e37190808ed1413aaac6350ad3f761079e13c97bcd702b2bc1341c9ee47fd
semantic_inventory:
  - claim_key: CLAIM-5FD72C8967B4C440
    claim_text: Changing a password from the settings of a documentation contributor account, as opposed to resetting it, keeps the current session and ends the others
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 151
    subjects:
      - docs.documentation_contributor_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Documentation site decision log (apps/docs): DOC-399'
  recorded_at: '2025-12-21T12:38:47.000Z'
tags:
  - bootstrap
  - knowledge-source:docs-decisions
  - component:docs
rationale: The person changing it is signed in and knows the old password, so the case differs from a reset.
id: REQ-docs-documentation-contributor-accounts-password-change
type: req
---
Changing a password from the settings of a documentation contributor account, as opposed to resetting it, keeps the current session and ends the others.

## Context

The person changing it is signed in and knows the old password, so the case differs from a reset.

## Source

> feat(docs): sessions after a password change (DOC-399)

Source: Documentation site decision log (apps/docs) - DOC-399
