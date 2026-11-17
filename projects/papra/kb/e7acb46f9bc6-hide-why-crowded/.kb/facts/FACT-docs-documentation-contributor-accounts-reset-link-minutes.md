---
title: docs.documentation_contributor_accounts reset_link_minutes = 1440
status: active
fact_kind: property_value
subject_key: docs.documentation_contributor_accounts
property_key: reset_link_minutes
operator: eq
value_type: int
value_int: 1440
claim_key: CLAIM-EDA45B89365D0969
claim_text: Password reset links for documentation contributor accounts are valid for 1440 minutes
text_ref: REQ-docs-documentation-contributor-accounts-reset-link-validity
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-367'
  recorded_at: '2025-07-02T11:31:01.000Z'
id: FACT-docs-documentation-contributor-accounts-reset-link-minutes
type: fact
---
Password reset links for documentation contributor accounts are valid for 1440 minutes.

Modeled from REQ-docs-documentation-contributor-accounts-reset-link-validity so the claim can be checked for contradictions.
