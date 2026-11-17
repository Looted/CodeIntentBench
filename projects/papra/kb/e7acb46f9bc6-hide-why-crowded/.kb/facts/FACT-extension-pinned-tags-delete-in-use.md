---
title: extension.pinned_tags delete_in_use = detached
status: active
fact_kind: property_value
subject_key: extension.pinned_tags
property_key: delete_in_use
operator: eq
value_type: string
value_string: detached
claim_key: CLAIM-F93A45D1EA321F09
claim_text: Deleting a pinned tag in the browser extension removes it from everything that uses it, without confirmation for each use
text_ref: REQ-extension-pinned-tags-delete-in-use
tags:
  - lane:strict
  - knowledge-source:extension-decisions
origin:
  kind: agent
  ref: 'Browser extension decision log: EXT-181'
  recorded_at: '2025-08-22T12:18:19.000Z'
id: FACT-extension-pinned-tags-delete-in-use
type: fact
---
Deleting a pinned tag in the browser extension removes it from everything that uses it, without confirmation for each use.

Modeled from REQ-extension-pinned-tags-delete-in-use so the claim can be checked for contradictions.
