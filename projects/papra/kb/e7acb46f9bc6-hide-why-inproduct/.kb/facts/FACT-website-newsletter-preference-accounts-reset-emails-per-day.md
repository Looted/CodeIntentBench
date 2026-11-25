---
title: website.newsletter_preference_accounts reset_emails_per_day = 3
status: active
fact_kind: property_value
subject_key: website.newsletter_preference_accounts
property_key: reset_emails_per_day
operator: eq
value_type: int
value_int: 3
claim_key: CLAIM-2DBFA3E71C17A098
claim_text: At most 3 password reset emails are sent per account per day for newsletter preference accounts
text_ref: REQ-website-newsletter-preference-accounts-reset-rate-limit
tags:
  - lane:strict
  - knowledge-source:website-decisions
origin:
  kind: agent
  ref: 'Marketing website decision log (apps/website): WEB-355'
  recorded_at: '2026-09-01T17:01:26.000Z'
id: FACT-website-newsletter-preference-accounts-reset-emails-per-day
type: fact
---
At most 3 password reset emails are sent per account per day for newsletter preference accounts.

Modeled from REQ-website-newsletter-preference-accounts-reset-rate-limit so the claim can be checked for contradictions.
