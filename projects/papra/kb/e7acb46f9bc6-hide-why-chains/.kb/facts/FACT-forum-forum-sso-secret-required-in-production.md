---
title: forum.forum_sso_secret required_in_production = False
status: active
fact_kind: property_value
subject_key: forum.forum_sso_secret
property_key: required_in_production
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-BA9B346D6336C550
claim_text: The forum sign-in bridge generates a random single sign-on secret at startup when FORUM_SSO_SECRET is not set
text_ref: REQ-forum-forum-sso-secret-generated-when-missing
tags:
  - lane:strict
  - knowledge-source:forum-decisions
origin:
  kind: agent
  ref: 'Community forum operations notes: FRM-225'
  recorded_at: '2025-04-07T12:13:36.000Z'
id: FACT-forum-forum-sso-secret-required-in-production
type: fact
---
The forum sign-in bridge generates a random single sign-on secret at startup when FORUM_SSO_SECRET is not set.

Modeled from REQ-forum-forum-sso-secret-generated-when-missing so the claim can be checked for contradictions.
