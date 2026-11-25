---
title: ASSET_URL_SIGNING_KEY, the URL signing key of the asset URL signer
status: active
fact_kind: subject
subject_key: infra.asset_url_signing_key
canonical_key: infra.asset_url_signing_key
tags:
  - lane:strict
  - knowledge-source:infra-decisions
origin:
  kind: agent
  ref: Infrastructure runbook
  recorded_at: '2026-05-27T08:36:21.000Z'
id: FACT-infra-asset-url-signing-key-subject
type: fact
---
ASSET_URL_SIGNING_KEY holds the URL signing key that the asset URL signer reads when it starts. It is a setting of that service alone and is not AUTH_SECRET, the secret of the Papra server.
