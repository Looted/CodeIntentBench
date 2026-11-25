---
title: education.education_portal_accounts reset_emails_per_hour = 3
status: active
fact_kind: property_value
subject_key: education.education_portal_accounts
property_key: reset_emails_per_hour
operator: eq
value_type: int
value_int: 3
claim_key: CLAIM-25216AE980D05137
claim_text: At most 3 password reset emails are sent per account per hour for education portal accounts
text_ref: REQ-education-education-portal-accounts-reset-rate-limit
tags:
  - lane:strict
  - knowledge-source:education-decisions
origin:
  kind: agent
  ref: 'Education programme portal notes: EDU-140'
  recorded_at: '2025-10-09T17:29:44.000Z'
id: FACT-education-education-portal-accounts-reset-emails-per-hour
type: fact
---
At most 3 password reset emails are sent per account per hour for education portal accounts.

Modeled from REQ-education-education-portal-accounts-reset-rate-limit so the claim can be checked for contradictions.
