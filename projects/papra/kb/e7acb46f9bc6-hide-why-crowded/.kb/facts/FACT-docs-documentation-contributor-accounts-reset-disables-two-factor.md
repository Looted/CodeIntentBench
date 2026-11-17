---
title: docs.documentation_contributor_accounts reset_disables_two_factor = True
status: active
fact_kind: property_value
subject_key: docs.documentation_contributor_accounts
property_key: reset_disables_two_factor
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-ABBDE30B49B4D091
claim_text: Resetting the password of a documentation contributor account turns off two-factor authentication, which must be set up again
text_ref: REQ-docs-documentation-contributor-accounts-reset-and-two-factor
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-398'
  recorded_at: '2025-02-07T12:34:32.000Z'
id: FACT-docs-documentation-contributor-accounts-reset-disables-two-factor
type: fact
---
Resetting the password of a documentation contributor account turns off two-factor authentication, which must be set up again.

Modeled from REQ-docs-documentation-contributor-accounts-reset-and-two-factor so the claim can be checked for contradictions.
