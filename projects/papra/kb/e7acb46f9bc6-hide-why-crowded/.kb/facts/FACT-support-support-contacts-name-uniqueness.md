---
title: support.support_contacts name_uniqueness = unique per owner
status: active
fact_kind: property_value
subject_key: support.support_contacts
property_key: name_uniqueness
operator: eq
value_type: string
value_string: unique per owner
claim_key: CLAIM-3DCA3FA6CE2C66CF
claim_text: Support contact names in the support portal are unique per organization, regardless of letter case
text_ref: REQ-support-support-contacts-name-uniqueness
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-305'
  recorded_at: '2025-04-28T16:22:08.000Z'
id: FACT-support-support-contacts-name-uniqueness
type: fact
---
Support contact names in the support portal are unique per organization, regardless of letter case.

Modeled from REQ-support-support-contacts-name-uniqueness so the claim can be checked for contradictions.
