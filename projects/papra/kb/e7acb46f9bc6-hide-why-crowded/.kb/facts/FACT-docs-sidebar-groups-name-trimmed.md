---
title: docs.sidebar_groups name_trimmed = True
status: active
fact_kind: property_value
subject_key: docs.sidebar_groups
property_key: name_trimmed
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-2371A9332D4B4ACC
claim_text: Sidebar group names on the documentation site are trimmed of leading and trailing whitespace before they are saved
text_ref: REQ-docs-sidebar-groups-names-trimmed
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-172'
  recorded_at: '2025-10-10T11:44:53.000Z'
id: FACT-docs-sidebar-groups-name-trimmed
type: fact
---
Sidebar group names on the documentation site are trimmed of leading and trailing whitespace before they are saved.

Modeled from REQ-docs-sidebar-groups-names-trimmed so the claim can be checked for contradictions.
