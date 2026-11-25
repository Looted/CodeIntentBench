---
title: forum.forum_sso_secret value_source = file or environment
status: active
fact_kind: property_value
subject_key: forum.forum_sso_secret
property_key: value_source
operator: eq
value_type: string
value_string: file or environment
claim_key: CLAIM-73C3D5177582423D
claim_text: The forum sign-in bridge reads FORUM_SSO_SECRET from a file named by FORUM_SSO_SECRET_FILE when that variable is set
text_ref: REQ-forum-forum-sso-secret-source
tags:
  - lane:strict
  - knowledge-source:forum-decisions
origin:
  kind: agent
  ref: 'Community forum operations notes: FRM-242'
  recorded_at: '2025-09-15T13:01:04.000Z'
id: FACT-forum-forum-sso-secret-value-source
type: fact
---
The forum sign-in bridge reads FORUM_SSO_SECRET from a file named by FORUM_SSO_SECRET_FILE when that variable is set.

Modeled from REQ-forum-forum-sso-secret-source so the claim can be checked for contradictions.
