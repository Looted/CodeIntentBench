---
title: docs.feedback_submissions requests_per_ip_per_day = 5
status: active
fact_kind: property_value
subject_key: docs.feedback_submissions
property_key: requests_per_ip_per_day
operator: eq
value_type: int
value_int: 5
claim_key: CLAIM-0FA597B6E337EE03
claim_text: At most 5 requests per IP address per day are accepted in documentation feedback submissions
text_ref: REQ-docs-feedback-submissions-rate-limit
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-350'
  recorded_at: '2026-08-24T15:32:35.000Z'
id: FACT-docs-feedback-submissions-requests-per-ip-per-day
type: fact
---
At most 5 requests per IP address per day are accepted in documentation feedback submissions.

Modeled from REQ-docs-feedback-submissions-rate-limit so the claim can be checked for contradictions.
