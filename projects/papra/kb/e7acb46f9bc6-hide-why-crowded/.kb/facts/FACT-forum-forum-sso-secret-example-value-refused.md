---
title: forum.forum_sso_secret example_value_refused = True
status: active
fact_kind: property_value
subject_key: forum.forum_sso_secret
property_key: example_value_refused
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-5AC34643E5A33FC1
claim_text: The forum sign-in bridge refuses the example value of FORUM_SSO_SECRET from its documentation, in every environment
text_ref: REQ-forum-forum-sso-secret-example-value-refused
tags:
  - lane:strict
  - knowledge-source:forum-decisions
origin:
  kind: agent
  ref: 'Community forum operations notes: FRM-236'
  recorded_at: '2025-02-07T10:54:33.000Z'
id: FACT-forum-forum-sso-secret-example-value-refused
type: fact
---
The forum sign-in bridge refuses the example value of FORUM_SSO_SECRET from its documentation, in every environment.

Modeled from REQ-forum-forum-sso-secret-example-value-refused so the claim can be checked for contradictions.
