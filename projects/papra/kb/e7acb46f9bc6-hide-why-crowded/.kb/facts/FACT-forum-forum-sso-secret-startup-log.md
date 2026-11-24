---
title: forum.forum_sso_secret startup_log = presence only
status: active
fact_kind: property_value
subject_key: forum.forum_sso_secret
property_key: startup_log
operator: eq
value_type: string
value_string: presence only
claim_key: CLAIM-2AB50BBAACA14801
claim_text: startup logs show only whether it is set
text_ref: REQ-forum-forum-sso-secret-never-logged
tags:
  - lane:strict
  - knowledge-source:forum-decisions
origin:
  kind: agent
  ref: 'Community forum operations notes: FRM-247'
  recorded_at: '2026-01-15T16:25:19.000Z'
id: FACT-forum-forum-sso-secret-startup-log
type: fact
---
Startup logs show only whether it is set.

Modeled from REQ-forum-forum-sso-secret-never-logged so the claim can be checked for contradictions.
