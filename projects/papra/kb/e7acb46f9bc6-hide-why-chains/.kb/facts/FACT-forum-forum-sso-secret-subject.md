---
title: FORUM_SSO_SECRET, the single sign-on secret of the forum sign-in bridge
status: active
fact_kind: subject
subject_key: forum.forum_sso_secret
canonical_key: forum.forum_sso_secret
distinct_from:
  - forum.community_forum_accounts
  - forum.community_forum_member_search
  - forum.community_forum_post_search
  - forum.forum_categories
  - forum.forum_groups
  - forum.forum_registration
tags:
  - lane:strict
  - knowledge-source:forum-decisions
origin:
  kind: agent
  ref: Community forum operations notes
  recorded_at: '2025-10-11T09:37:23.000Z'
id: FACT-forum-forum-sso-secret-subject
type: fact
---
FORUM_SSO_SECRET holds the single sign-on secret that the forum sign-in bridge reads when it starts. It is a setting of that service alone and is not AUTH_SECRET, the secret of the Papra server.
