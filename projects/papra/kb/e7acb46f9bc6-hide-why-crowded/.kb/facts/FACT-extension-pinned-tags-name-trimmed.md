---
title: extension.pinned_tags name_trimmed = True
status: active
fact_kind: property_value
subject_key: extension.pinned_tags
property_key: name_trimmed
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-DA1BC4C4AE86B2B1
claim_text: Pinned tag names in the browser extension are trimmed of leading and trailing whitespace before they are saved
text_ref: REQ-extension-pinned-tags-names-trimmed
tags:
  - lane:strict
  - knowledge-source:extension-decisions
origin:
  kind: agent
  ref: 'Browser extension decision log: EXT-175'
  recorded_at: '2026-08-12T11:07:22.000Z'
id: FACT-extension-pinned-tags-name-trimmed
type: fact
---
Pinned tag names in the browser extension are trimmed of leading and trailing whitespace before they are saved.

Modeled from REQ-extension-pinned-tags-names-trimmed so the claim can be checked for contradictions.
