---
title: docs.documentation_contributor_accounts session_idle_minutes = 60
status: active
fact_kind: property_value
subject_key: docs.documentation_contributor_accounts
property_key: session_idle_minutes
operator: eq
value_type: int
value_int: 60
claim_key: CLAIM-F3D76F855733BF57
claim_text: they end after 60 minutes without activity
text_ref: REQ-docs-documentation-contributor-accounts-session-lifetime
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-211'
  recorded_at: '2025-12-28T13:41:28.000Z'
id: FACT-docs-documentation-contributor-accounts-session-idle-minutes
type: fact
---
They end after 60 minutes without activity.

Modeled from REQ-docs-documentation-contributor-accounts-session-lifetime so the claim can be checked for contradictions.
