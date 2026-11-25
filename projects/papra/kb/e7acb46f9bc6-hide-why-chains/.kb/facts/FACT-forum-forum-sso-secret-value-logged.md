---
title: forum.forum_sso_secret value_logged = False
status: active
fact_kind: property_value
subject_key: forum.forum_sso_secret
property_key: value_logged
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-C4C86AEB51B7BAF4
claim_text: The forum sign-in bridge never writes FORUM_SSO_SECRET or a value derived from it to its logs
text_ref: REQ-forum-forum-sso-secret-never-logged
tags:
  - lane:strict
  - knowledge-source:forum-decisions
origin:
  kind: agent
  ref: 'Community forum operations notes: FRM-247'
  recorded_at: '2026-01-15T16:25:19.000Z'
id: FACT-forum-forum-sso-secret-value-logged
type: fact
---
The forum sign-in bridge never writes FORUM_SSO_SECRET or a value derived from it to its logs.

Modeled from REQ-forum-forum-sso-secret-never-logged so the claim can be checked for contradictions.
