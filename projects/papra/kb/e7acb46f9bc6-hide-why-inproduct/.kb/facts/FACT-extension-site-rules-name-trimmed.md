---
title: extension.site_rules name_trimmed = True
status: active
fact_kind: property_value
subject_key: extension.site_rules
property_key: name_trimmed
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-1A936AAD4A49D7D7
claim_text: Site rule names in the browser extension are trimmed of leading and trailing whitespace before they are saved
text_ref: REQ-extension-site-rules-names-trimmed
tags:
  - lane:strict
  - knowledge-source:extension-decisions
origin:
  kind: agent
  ref: 'Browser extension decision log: EXT-147'
  recorded_at: '2025-12-04T14:05:57.000Z'
id: FACT-extension-site-rules-name-trimmed
type: fact
---
Site rule names in the browser extension are trimmed of leading and trailing whitespace before they are saved.

Modeled from REQ-extension-site-rules-names-trimmed so the claim can be checked for contradictions.
