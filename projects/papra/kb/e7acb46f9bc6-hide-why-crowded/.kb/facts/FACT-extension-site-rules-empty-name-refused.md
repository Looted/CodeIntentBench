---
title: extension.site_rules empty_name_refused = True
status: active
fact_kind: property_value
subject_key: extension.site_rules
property_key: empty_name_refused
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-70D5F8163A64221A
claim_text: a name that is empty after trimming is refused
text_ref: REQ-extension-site-rules-names-trimmed
tags:
  - lane:strict
  - knowledge-source:extension-decisions
origin:
  kind: agent
  ref: 'Browser extension decision log: EXT-147'
  recorded_at: '2025-12-04T14:05:57.000Z'
id: FACT-extension-site-rules-empty-name-refused
type: fact
---
A name that is empty after trimming is refused.

Modeled from REQ-extension-site-rules-names-trimmed so the claim can be checked for contradictions.
