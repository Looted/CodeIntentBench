---
title: extension.site_rules delete_in_use = refused
status: active
fact_kind: property_value
subject_key: extension.site_rules
property_key: delete_in_use
operator: eq
value_type: string
value_string: refused
claim_key: CLAIM-3A466EC34538FA0D
claim_text: Deleting a site rule in the browser extension that is still in use is refused until nothing refers to it
text_ref: REQ-extension-site-rules-delete-in-use
tags:
  - lane:strict
  - knowledge-source:extension-decisions
origin:
  kind: agent
  ref: 'Browser extension decision log: EXT-154'
  recorded_at: '2025-03-27T09:35:38.000Z'
id: FACT-extension-site-rules-delete-in-use
type: fact
---
Deleting a site rule in the browser extension that is still in use is refused until nothing refers to it.

Modeled from REQ-extension-site-rules-delete-in-use so the claim can be checked for contradictions.
