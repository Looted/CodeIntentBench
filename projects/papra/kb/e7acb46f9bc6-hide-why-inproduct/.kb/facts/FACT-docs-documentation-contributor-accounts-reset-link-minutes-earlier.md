---
title: docs.documentation_contributor_accounts reset_link_minutes = 60
status: deprecated
fact_kind: property_value
subject_key: docs.documentation_contributor_accounts
property_key: reset_link_minutes
operator: eq
value_type: int
value_int: 60
claim_key: CLAIM-9529019E074AD0F3
claim_text: Password reset links for documentation contributor accounts are valid for 60 minutes
text_ref: REQ-docs-documentation-contributor-accounts-reset-link-validity-earlier
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-133'
  recorded_at: '2025-03-12T09:03:40.000Z'
id: FACT-docs-documentation-contributor-accounts-reset-link-minutes-earlier
type: fact
---
Password reset links for documentation contributor accounts are valid for 60 minutes.

Modeled from REQ-docs-documentation-contributor-accounts-reset-link-validity-earlier so the claim can be checked for contradictions.
