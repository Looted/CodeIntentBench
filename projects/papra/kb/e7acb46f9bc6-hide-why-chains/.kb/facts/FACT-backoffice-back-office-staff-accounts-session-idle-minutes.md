---
title: backoffice.back_office_staff_accounts session_idle_minutes = 30
status: active
fact_kind: property_value
subject_key: backoffice.back_office_staff_accounts
property_key: session_idle_minutes
operator: eq
value_type: int
value_int: 30
claim_key: CLAIM-3547C110EC2A0F3A
claim_text: they end after 30 minutes without activity
text_ref: REQ-backoffice-back-office-staff-accounts-session-lifetime
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-563'
  recorded_at: '2025-11-09T16:13:01.000Z'
id: FACT-backoffice-back-office-staff-accounts-session-idle-minutes
type: fact
---
They end after 30 minutes without activity.

Modeled from REQ-backoffice-back-office-staff-accounts-session-lifetime so the claim can be checked for contradictions.
