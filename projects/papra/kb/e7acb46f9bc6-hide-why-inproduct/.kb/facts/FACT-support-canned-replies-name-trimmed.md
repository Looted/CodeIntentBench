---
title: support.canned_replies name_trimmed = True
status: active
fact_kind: property_value
subject_key: support.canned_replies
property_key: name_trimmed
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-4EB4C675253C4301
claim_text: Canned reply names in the support portal are trimmed of leading and trailing whitespace before they are saved
text_ref: REQ-support-canned-replies-names-trimmed
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-117'
  recorded_at: '2025-04-25T16:12:26.000Z'
id: FACT-support-canned-replies-name-trimmed
type: fact
---
Canned reply names in the support portal are trimmed of leading and trailing whitespace before they are saved.

Modeled from REQ-support-canned-replies-names-trimmed so the claim can be checked for contradictions.
