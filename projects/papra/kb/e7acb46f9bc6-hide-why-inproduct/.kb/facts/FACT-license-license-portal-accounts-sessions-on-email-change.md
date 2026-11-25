---
title: license.license_portal_accounts sessions_on_email_change = others ended
status: active
fact_kind: property_value
subject_key: license.license_portal_accounts
property_key: sessions_on_email_change
operator: eq
value_type: string
value_string: others ended
claim_key: CLAIM-7DACE78A366306A5
claim_text: Changing the email address of a license portal account signs out every other session
text_ref: REQ-license-license-portal-accounts-email-change
tags:
  - lane:strict
  - knowledge-source:license-decisions
origin:
  kind: agent
  ref: 'License server decision log: LIC-187'
  recorded_at: '2026-07-28T10:33:55.000Z'
id: FACT-license-license-portal-accounts-sessions-on-email-change
type: fact
---
Changing the email address of a license portal account signs out every other session.

Modeled from REQ-license-license-portal-accounts-email-change so the claim can be checked for contradictions.
