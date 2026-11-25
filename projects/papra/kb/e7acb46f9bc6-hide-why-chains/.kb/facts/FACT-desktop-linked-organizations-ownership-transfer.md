---
title: desktop.linked_organizations ownership_transfer = existing member
status: active
fact_kind: property_value
subject_key: desktop.linked_organizations
property_key: ownership_transfer
operator: eq
value_type: string
value_string: existing member
claim_key: CLAIM-351068BA66B9C548
claim_text: Ownership of a linked organization in the desktop sync client can be transferred only to someone who is already a member of it
text_ref: REQ-desktop-linked-organizations-ownership-transfer
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-319'
  recorded_at: '2025-12-11T11:58:19.000Z'
id: FACT-desktop-linked-organizations-ownership-transfer
type: fact
---
Ownership of a linked organization in the desktop sync client can be transferred only to someone who is already a member of it.

Modeled from REQ-desktop-linked-organizations-ownership-transfer so the claim can be checked for contradictions.
