---
title: BACKOFFICE_SESSION_SECRET, the session signing secret of the back office
status: active
fact_kind: subject
subject_key: backoffice.backoffice_session_secret
canonical_key: backoffice.backoffice_session_secret
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: Papra Cloud back office handbook
  recorded_at: '2025-11-10T09:30:08.000Z'
id: FACT-backoffice-backoffice-session-secret-subject
type: fact
---
BACKOFFICE_SESSION_SECRET holds the session signing secret that the back office reads when it starts. It is a setting of that service alone and is not AUTH_SECRET, the secret of the Papra server.
