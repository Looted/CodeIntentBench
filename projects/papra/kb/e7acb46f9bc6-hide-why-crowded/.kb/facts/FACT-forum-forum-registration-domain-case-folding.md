---
title: forum.forum_registration domain_case_folding = True
status: active
fact_kind: property_value
subject_key: forum.forum_registration
property_key: domain_case_folding
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-77F80A293A9D87BD
claim_text: matching ignores letter case
text_ref: REQ-forum-forum-registration-allowed-domains
tags:
  - lane:strict
  - knowledge-source:forum-decisions
origin:
  kind: agent
  ref: 'Community forum operations notes: FRM-260'
  recorded_at: '2026-08-06T10:41:54.000Z'
id: FACT-forum-forum-registration-domain-case-folding
type: fact
---
Matching ignores letter case.

Modeled from REQ-forum-forum-registration-allowed-domains so the claim can be checked for contradictions.
