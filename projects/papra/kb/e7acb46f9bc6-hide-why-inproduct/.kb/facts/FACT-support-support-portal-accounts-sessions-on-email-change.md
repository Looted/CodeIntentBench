---
title: support.support_portal_accounts sessions_on_email_change = others ended
status: active
fact_kind: property_value
subject_key: support.support_portal_accounts
property_key: sessions_on_email_change
operator: eq
value_type: string
value_string: others ended
claim_key: CLAIM-082912AE3192F074
claim_text: Changing the email address of a support portal account signs out every other session
text_ref: REQ-support-support-portal-accounts-email-change
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-234'
  recorded_at: '2025-04-14T16:21:17.000Z'
id: FACT-support-support-portal-accounts-sessions-on-email-change
type: fact
---
Changing the email address of a support portal account signs out every other session.

Modeled from REQ-support-support-portal-accounts-email-change so the claim can be checked for contradictions.
