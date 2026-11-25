---
title: docs.documentation_contributor_accounts new_link_invalidates_old = True
status: active
fact_kind: property_value
subject_key: docs.documentation_contributor_accounts
property_key: new_link_invalidates_old
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-A6758D585E12B6CF
claim_text: requesting a new link invalidates the earlier ones
text_ref: REQ-docs-documentation-contributor-accounts-reset-link-single-use
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-193'
  recorded_at: '2025-03-27T15:17:20.000Z'
id: FACT-docs-documentation-contributor-accounts-new-link-invalidates-old
type: fact
---
Requesting a new link invalidates the earlier ones.

Modeled from REQ-docs-documentation-contributor-accounts-reset-link-single-use so the claim can be checked for contradictions.
