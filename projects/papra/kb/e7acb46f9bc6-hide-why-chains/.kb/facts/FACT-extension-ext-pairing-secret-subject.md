---
title: EXT_PAIRING_SECRET, the pairing-code signing secret of the extension pairing service
status: active
fact_kind: subject
subject_key: extension.ext_pairing_secret
canonical_key: extension.ext_pairing_secret
tags:
  - lane:strict
  - knowledge-source:extension-decisions
origin:
  kind: agent
  ref: Browser extension decision log
  recorded_at: '2026-07-27T17:45:37.000Z'
id: FACT-extension-ext-pairing-secret-subject
type: fact
---
EXT_PAIRING_SECRET holds the pairing-code signing secret that the extension pairing service reads when it starts. It is a setting of that service alone and is not AUTH_SECRET, the secret of the Papra server.
