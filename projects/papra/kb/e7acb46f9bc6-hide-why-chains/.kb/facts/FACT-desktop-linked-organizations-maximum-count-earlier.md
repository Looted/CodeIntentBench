---
title: desktop.linked_organizations maximum_count = 3
status: deprecated
fact_kind: property_value
subject_key: desktop.linked_organizations
property_key: maximum_count
operator: eq
value_type: int
value_int: 3
claim_key: CLAIM-0A5CABDCE0BF2B0F
claim_text: A device can own at most 3 linked organizations in the desktop sync client
text_ref: REQ-desktop-linked-organizations-maximum-count-earlier
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-220'
  recorded_at: '2025-06-14T08:27:05.000Z'
id: FACT-desktop-linked-organizations-maximum-count-earlier
type: fact
---
A device can own at most 3 linked organizations in the desktop sync client.

Modeled from REQ-desktop-linked-organizations-maximum-count-earlier so the claim can be checked for contradictions.
