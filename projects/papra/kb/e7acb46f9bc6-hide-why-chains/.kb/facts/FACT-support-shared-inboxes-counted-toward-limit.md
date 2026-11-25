---
title: support.shared_inboxes counted_toward_limit = active only
status: active
fact_kind: property_value
subject_key: support.shared_inboxes
property_key: counted_toward_limit
operator: eq
value_type: string
value_string: active only
claim_key: CLAIM-3FE38C285D37D9B9
claim_text: Archived shared inboxes do not count toward the limit in the support portal
text_ref: REQ-support-shared-inboxes-what-counts
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-315'
  recorded_at: '2025-06-18T10:13:21.000Z'
id: FACT-support-shared-inboxes-counted-toward-limit
type: fact
---
Archived shared inboxes do not count toward the limit in the support portal.

Modeled from REQ-support-shared-inboxes-what-counts so the claim can be checked for contradictions.
