---
title: docs.documentation_contributor_accounts reset_emails_per_hour = 10
status: active
fact_kind: property_value
subject_key: docs.documentation_contributor_accounts
property_key: reset_emails_per_hour
operator: eq
value_type: int
value_int: 10
claim_key: CLAIM-3E700BAEB145D44A
claim_text: At most 10 password reset emails are sent per account per hour for documentation contributor accounts
text_ref: REQ-docs-documentation-contributor-accounts-reset-rate-limit
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-373'
  recorded_at: '2026-09-05T16:59:54.000Z'
id: FACT-docs-documentation-contributor-accounts-reset-emails-per-hour
type: fact
---
At most 10 password reset emails are sent per account per hour for documentation contributor accounts.

Modeled from REQ-docs-documentation-contributor-accounts-reset-rate-limit so the claim can be checked for contradictions.
