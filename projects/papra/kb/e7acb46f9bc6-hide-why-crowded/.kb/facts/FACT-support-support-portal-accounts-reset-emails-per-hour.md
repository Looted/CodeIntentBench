---
title: support.support_portal_accounts reset_emails_per_hour = 10
status: active
fact_kind: property_value
subject_key: support.support_portal_accounts
property_key: reset_emails_per_hour
operator: eq
value_type: int
value_int: 10
claim_key: CLAIM-2908B732E4CEBD6E
claim_text: At most 10 password reset emails are sent per account per hour for support portal accounts
text_ref: REQ-support-support-portal-accounts-reset-rate-limit
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-355'
  recorded_at: '2025-07-18T08:53:05.000Z'
id: FACT-support-support-portal-accounts-reset-emails-per-hour
type: fact
---
At most 10 password reset emails are sent per account per hour for support portal accounts.

Modeled from REQ-support-support-portal-accounts-reset-rate-limit so the claim can be checked for contradictions.
