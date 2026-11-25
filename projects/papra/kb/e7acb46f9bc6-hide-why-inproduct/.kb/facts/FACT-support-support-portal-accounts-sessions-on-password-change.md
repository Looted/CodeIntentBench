---
title: support.support_portal_accounts sessions_on_password_change = others ended
status: active
fact_kind: property_value
subject_key: support.support_portal_accounts
property_key: sessions_on_password_change
operator: eq
value_type: string
value_string: others ended
claim_key: CLAIM-5FA0BE46B7F7985A
claim_text: Changing a password from the settings of a support portal account, as opposed to resetting it, keeps the current session and ends the others
text_ref: REQ-support-support-portal-accounts-password-change
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-265'
  recorded_at: '2025-05-08T09:55:50.000Z'
id: FACT-support-support-portal-accounts-sessions-on-password-change
type: fact
---
Changing a password from the settings of a support portal account, as opposed to resetting it, keeps the current session and ends the others.

Modeled from REQ-support-support-portal-accounts-password-change so the claim can be checked for contradictions.
