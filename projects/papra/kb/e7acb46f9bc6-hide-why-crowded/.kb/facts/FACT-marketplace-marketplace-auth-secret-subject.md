---
title: MARKETPLACE_AUTH_SECRET, the session signing secret of the template marketplace
status: active
fact_kind: subject
subject_key: marketplace.marketplace_auth_secret
canonical_key: marketplace.marketplace_auth_secret
tags:
  - lane:strict
  - knowledge-source:marketplace-decisions
origin:
  kind: agent
  ref: Template marketplace decision log
  recorded_at: '2026-05-26T17:53:07.000Z'
id: FACT-marketplace-marketplace-auth-secret-subject
type: fact
---
MARKETPLACE_AUTH_SECRET holds the session signing secret that the template marketplace reads when it starts. It is a setting of that service alone and is not AUTH_SECRET, the secret of the Papra server.
