---
title: infra.asset_url_signing_key startup_log = presence only
status: active
fact_kind: property_value
subject_key: infra.asset_url_signing_key
property_key: startup_log
operator: eq
value_type: string
value_string: presence only
claim_key: CLAIM-2AB50BBAACA14801
claim_text: startup logs show only whether it is set
text_ref: REQ-infra-asset-url-signing-key-never-logged
tags:
  - lane:strict
  - knowledge-source:infra-decisions
origin:
  kind: agent
  ref: 'Infrastructure runbook: INF-134'
  recorded_at: '2025-11-10T16:05:19.000Z'
id: FACT-infra-asset-url-signing-key-startup-log
type: fact
---
Startup logs show only whether it is set.

Modeled from REQ-infra-asset-url-signing-key-never-logged so the claim can be checked for contradictions.
