---
title: desktop.linked_organizations limit_override = none
status: active
fact_kind: property_value
subject_key: desktop.linked_organizations
property_key: limit_override
operator: eq
value_type: string
value_string: none
claim_key: CLAIM-3ACDB7F6FE86431A
claim_text: The linked organization limit in the desktop sync client cannot be changed for an individual device
text_ref: REQ-desktop-linked-organizations-limit-override
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-299'
  recorded_at: '2025-08-18T16:41:32.000Z'
id: FACT-desktop-linked-organizations-limit-override
type: fact
---
The linked organization limit in the desktop sync client cannot be changed for an individual device.

Modeled from REQ-desktop-linked-organizations-limit-override so the claim can be checked for contradictions.
