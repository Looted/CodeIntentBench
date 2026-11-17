---
title: Password reset links for documentation contributor accounts are valid for 1440 minutes.
status: active
semantic_text: Password reset links for documentation contributor accounts are valid for 1440 minutes.
semantic_clauses:
  - Password reset links for documentation contributor accounts are valid for 1440 minutes
logic_claims:
  - CLAIM-EDA45B89365D0969
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: cd1a29783fb5c7d62a0c2ebfc5e7a374f0d0f940ccbe56c636d995db3289335c
semantic_inventory:
  - claim_key: CLAIM-EDA45B89365D0969
    claim_text: Password reset links for documentation contributor accounts are valid for 1440 minutes
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 86
    subjects:
      - docs.documentation_contributor_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Documentation site decision log (apps/docs): DOC-367'
  recorded_at: '2025-07-02T11:31:01.000Z'
tags:
  - bootstrap
  - knowledge-source:docs-decisions
  - component:docs
rationale: A link in a mailbox is as good as the password for as long as it works.
id: REQ-docs-documentation-contributor-accounts-reset-link-validity
type: req
---
Password reset links for documentation contributor accounts are valid for 1440 minutes.

## Context

A link in a mailbox is as good as the password for as long as it works.

## Why this changed

DOC-367 replaced the value recorded in DOC-312 and gives this reason for the change: Mail to some providers took longer than that to arrive.

## Source

> feat(docs): reset links valid 1440 minutes (DOC-367)

Source: Documentation site decision log (apps/docs) - DOC-367
