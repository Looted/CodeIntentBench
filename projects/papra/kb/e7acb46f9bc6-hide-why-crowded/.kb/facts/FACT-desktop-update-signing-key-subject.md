---
title: UPDATE_SIGNING_KEY, the update signing key of the desktop update server
status: active
fact_kind: subject
subject_key: desktop.update_signing_key
canonical_key: desktop.update_signing_key
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: Desktop sync client decision log
  recorded_at: '2026-06-13T10:48:57.000Z'
id: FACT-desktop-update-signing-key-subject
type: fact
---
UPDATE_SIGNING_KEY holds the update signing key that the desktop update server reads when it starts. It is a setting of that service alone and is not AUTH_SECRET, the secret of the Papra server.
