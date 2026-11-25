---
title: backoffice.support_macros empty_name_refused = True
status: active
fact_kind: property_value
subject_key: backoffice.support_macros
property_key: empty_name_refused
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-70D5F8163A64221A
claim_text: a name that is empty after trimming is refused
text_ref: REQ-backoffice-support-macros-names-trimmed
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-115'
  recorded_at: '2025-05-11T08:54:43.000Z'
id: FACT-backoffice-support-macros-empty-name-refused
type: fact
---
A name that is empty after trimming is refused.

Modeled from REQ-backoffice-support-macros-names-trimmed so the claim can be checked for contradictions.
