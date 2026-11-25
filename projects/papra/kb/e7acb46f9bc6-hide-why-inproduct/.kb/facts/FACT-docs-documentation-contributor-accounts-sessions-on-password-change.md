---
title: docs.documentation_contributor_accounts sessions_on_password_change = others ended
status: active
fact_kind: property_value
subject_key: docs.documentation_contributor_accounts
property_key: sessions_on_password_change
operator: eq
value_type: string
value_string: others ended
claim_key: CLAIM-5FD72C8967B4C440
claim_text: Changing a password from the settings of a documentation contributor account, as opposed to resetting it, keeps the current session and ends the others
text_ref: REQ-docs-documentation-contributor-accounts-password-change
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-220'
  recorded_at: '2025-12-21T12:38:47.000Z'
id: FACT-docs-documentation-contributor-accounts-sessions-on-password-change
type: fact
---
Changing a password from the settings of a documentation contributor account, as opposed to resetting it, keeps the current session and ends the others.

Modeled from REQ-docs-documentation-contributor-accounts-password-change so the claim can be checked for contradictions.
