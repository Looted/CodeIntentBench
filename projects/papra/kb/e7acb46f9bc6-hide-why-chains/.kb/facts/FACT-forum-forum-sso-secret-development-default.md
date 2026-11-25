---
title: forum.forum_sso_secret development_default = always required
status: active
fact_kind: property_value
subject_key: forum.forum_sso_secret
property_key: development_default
operator: eq
value_type: string
value_string: always required
claim_key: CLAIM-2CC6F5FAE75F67E9
claim_text: The forum sign-in bridge requires FORUM_SSO_SECRET in every environment, development included
text_ref: REQ-forum-forum-sso-secret-development-default
tags:
  - lane:strict
  - knowledge-source:forum-decisions
origin:
  kind: agent
  ref: 'Community forum operations notes: FRM-255'
  recorded_at: '2026-07-12T17:16:58.000Z'
id: FACT-forum-forum-sso-secret-development-default
type: fact
---
The forum sign-in bridge requires FORUM_SSO_SECRET in every environment, development included.

Modeled from REQ-forum-forum-sso-secret-development-default so the claim can be checked for contradictions.
