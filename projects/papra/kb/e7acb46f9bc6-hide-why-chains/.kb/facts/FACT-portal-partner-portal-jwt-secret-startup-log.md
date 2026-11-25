---
title: portal.partner_portal_jwt_secret startup_log = presence only
status: active
fact_kind: property_value
subject_key: portal.partner_portal_jwt_secret
property_key: startup_log
operator: eq
value_type: string
value_string: presence only
claim_key: CLAIM-2AB50BBAACA14801
claim_text: startup logs show only whether it is set
text_ref: REQ-portal-partner-portal-jwt-secret-never-logged
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-251'
  recorded_at: '2026-07-23T15:02:30.000Z'
id: FACT-portal-partner-portal-jwt-secret-startup-log
type: fact
---
Startup logs show only whether it is set.

Modeled from REQ-portal-partner-portal-jwt-secret-never-logged so the claim can be checked for contradictions.
