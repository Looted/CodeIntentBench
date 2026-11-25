---
title: support.support_sso_secret startup_log = presence only
status: active
fact_kind: property_value
subject_key: support.support_sso_secret
property_key: startup_log
operator: eq
value_type: string
value_string: presence only
claim_key: CLAIM-2AB50BBAACA14801
claim_text: startup logs show only whether it is set
text_ref: REQ-support-support-sso-secret-never-logged
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-261'
  recorded_at: '2025-11-24T17:22:05.000Z'
id: FACT-support-support-sso-secret-startup-log
type: fact
---
Startup logs show only whether it is set.

Modeled from REQ-support-support-sso-secret-never-logged so the claim can be checked for contradictions.
