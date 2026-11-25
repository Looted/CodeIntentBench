---
title: support.shared_inboxes limit_override = none
status: active
fact_kind: property_value
subject_key: support.shared_inboxes
property_key: limit_override
operator: eq
value_type: string
value_string: none
claim_key: CLAIM-0205C0D8398B5D79
claim_text: The shared inbox limit in the support portal cannot be changed for an individual support team
text_ref: REQ-support-shared-inboxes-limit-override
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-320'
  recorded_at: '2025-03-02T11:26:18.000Z'
id: FACT-support-shared-inboxes-limit-override
type: fact
---
The shared inbox limit in the support portal cannot be changed for an individual support team.

Modeled from REQ-support-shared-inboxes-limit-override so the claim can be checked for contradictions.
