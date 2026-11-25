---
title: forum.forum_registration requests_per_ip_per_day = 5
status: active
fact_kind: property_value
subject_key: forum.forum_registration
property_key: requests_per_ip_per_day
operator: eq
value_type: int
value_int: 5
claim_key: CLAIM-1B48125EB01876DC
claim_text: At most 5 requests per IP address per day are accepted in community forum registration
text_ref: REQ-forum-forum-registration-rate-limit
tags:
  - lane:strict
  - knowledge-source:forum-decisions
origin:
  kind: agent
  ref: 'Community forum operations notes: FRM-154'
  recorded_at: '2025-04-20T11:14:07.000Z'
id: FACT-forum-forum-registration-requests-per-ip-per-day
type: fact
---
At most 5 requests per IP address per day are accepted in community forum registration.

Modeled from REQ-forum-forum-registration-rate-limit so the claim can be checked for contradictions.
