---
title: SUPPORT_SSO_SECRET, the single sign-on secret of the support portal
status: active
fact_kind: subject
subject_key: support.support_sso_secret
canonical_key: support.support_sso_secret
distinct_from:
  - support.support_account_creation
  - support.support_contacts
  - support.support_portal_accounts
  - support.support_portal_ticket_search
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: Support portal decision log
  recorded_at: '2025-05-07T16:02:34.000Z'
id: FACT-support-support-sso-secret-subject
type: fact
---
SUPPORT_SSO_SECRET holds the single sign-on secret that the support portal reads when it starts. It is a setting of that service alone and is not AUTH_SECRET, the secret of the Papra server.
