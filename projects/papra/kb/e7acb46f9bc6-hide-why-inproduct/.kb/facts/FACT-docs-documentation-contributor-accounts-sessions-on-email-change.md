---
title: docs.documentation_contributor_accounts sessions_on_email_change = others ended
status: active
fact_kind: property_value
subject_key: docs.documentation_contributor_accounts
property_key: sessions_on_email_change
operator: eq
value_type: string
value_string: others ended
claim_key: CLAIM-9168FEC66288AF0C
claim_text: Changing the email address of a documentation contributor account signs out every other session
text_ref: REQ-docs-documentation-contributor-accounts-email-change
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-206'
  recorded_at: '2025-12-17T13:13:00.000Z'
id: FACT-docs-documentation-contributor-accounts-sessions-on-email-change
type: fact
---
Changing the email address of a documentation contributor account signs out every other session.

Modeled from REQ-docs-documentation-contributor-accounts-email-change so the claim can be checked for contradictions.
