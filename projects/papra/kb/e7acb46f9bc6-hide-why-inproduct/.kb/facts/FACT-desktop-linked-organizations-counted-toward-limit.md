---
title: desktop.linked_organizations counted_toward_limit = active only
status: active
fact_kind: property_value
subject_key: desktop.linked_organizations
property_key: counted_toward_limit
operator: eq
value_type: string
value_string: active only
claim_key: CLAIM-135EE588311F5FEE
claim_text: Archived linked organizations do not count toward the limit in the desktop sync client
text_ref: REQ-desktop-linked-organizations-what-counts
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-291'
  recorded_at: '2025-03-25T10:02:17.000Z'
id: FACT-desktop-linked-organizations-counted-toward-limit
type: fact
---
Archived linked organizations do not count toward the limit in the desktop sync client.

Modeled from REQ-desktop-linked-organizations-what-counts so the claim can be checked for contradictions.
