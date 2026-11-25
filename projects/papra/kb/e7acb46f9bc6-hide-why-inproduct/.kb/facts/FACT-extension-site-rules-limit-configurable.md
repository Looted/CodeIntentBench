---
title: extension.site_rules limit_configurable = False
status: active
fact_kind: property_value
subject_key: extension.site_rules
property_key: limit_configurable
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-9B85215C347D6099
claim_text: the limit is fixed
text_ref: REQ-extension-site-rules-maximum-count
tags:
  - lane:strict
  - knowledge-source:extension-decisions
origin:
  kind: agent
  ref: 'Browser extension decision log: EXT-137'
  recorded_at: '2025-10-09T12:18:17.000Z'
id: FACT-extension-site-rules-limit-configurable
type: fact
---
The limit is fixed.

Modeled from REQ-extension-site-rules-maximum-count so the claim can be checked for contradictions.
