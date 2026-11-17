---
title: desktop.linked_organizations maximum_count = 100
status: active
fact_kind: property_value
subject_key: desktop.linked_organizations
property_key: maximum_count
operator: eq
value_type: int
value_int: 100
claim_key: CLAIM-E82A866F7D055881
claim_text: A device can own at most 100 linked organizations in the desktop sync client
text_ref: REQ-desktop-linked-organizations-maximum-count
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-290'
  recorded_at: '2025-06-16T10:34:29.000Z'
id: FACT-desktop-linked-organizations-maximum-count
type: fact
---
A device can own at most 100 linked organizations in the desktop sync client.

Modeled from REQ-desktop-linked-organizations-maximum-count so the claim can be checked for contradictions.
