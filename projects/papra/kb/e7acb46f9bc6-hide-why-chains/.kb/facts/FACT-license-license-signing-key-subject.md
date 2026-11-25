---
title: LICENSE_SIGNING_KEY, the license signing key of the license server
status: active
fact_kind: subject
subject_key: license.license_signing_key
canonical_key: license.license_signing_key
distinct_from:
  - license.license_keys
  - license.license_lookup
  - license.license_portal_accounts
tags:
  - lane:strict
  - knowledge-source:license-decisions
origin:
  kind: agent
  ref: License server decision log
  recorded_at: '2026-02-15T12:50:07.000Z'
id: FACT-license-license-signing-key-subject
type: fact
---
LICENSE_SIGNING_KEY holds the license signing key that the license server reads when it starts. It is a setting of that service alone and is not AUTH_SECRET, the secret of the Papra server.
