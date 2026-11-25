---
title: PARTNER_PORTAL_JWT_SECRET, the token signing secret of the partner portal
status: active
fact_kind: subject
subject_key: portal.partner_portal_jwt_secret
canonical_key: portal.partner_portal_jwt_secret
distinct_from:
  - portal.partner_portal_accounts
  - portal.partner_portal_client_search
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: Partner portal decision log
  recorded_at: '2026-07-23T09:19:12.000Z'
id: FACT-portal-partner-portal-jwt-secret-subject
type: fact
---
PARTNER_PORTAL_JWT_SECRET holds the token signing secret that the partner portal reads when it starts. It is a setting of that service alone and is not AUTH_SECRET, the secret of the Papra server.
