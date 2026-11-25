---
title: support.canned_replies delete_in_use = detached
status: active
fact_kind: property_value
subject_key: support.canned_replies
property_key: delete_in_use
operator: eq
value_type: string
value_string: detached
claim_key: CLAIM-73AE51C0DD554D54
claim_text: Deleting a canned reply in the support portal removes it from everything that uses it, without confirmation for each use
text_ref: REQ-support-canned-replies-delete-in-use
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-128'
  recorded_at: '2025-10-04T15:25:02.000Z'
id: FACT-support-canned-replies-delete-in-use
type: fact
---
Deleting a canned reply in the support portal removes it from everything that uses it, without confirmation for each use.

Modeled from REQ-support-canned-replies-delete-in-use so the claim can be checked for contradictions.
