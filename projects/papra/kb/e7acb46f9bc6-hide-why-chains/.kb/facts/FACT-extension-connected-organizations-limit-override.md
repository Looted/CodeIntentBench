---
title: extension.connected_organizations limit_override = by plan
status: active
fact_kind: property_value
subject_key: extension.connected_organizations
property_key: limit_override
operator: eq
value_type: string
value_string: by plan
claim_key: CLAIM-809D9F76F03FA46E
claim_text: The connected organization limit in the browser extension follows the plan of the browser profile and is not set by hand
text_ref: REQ-extension-connected-organizations-limit-override
tags:
  - lane:strict
  - knowledge-source:extension-decisions
origin:
  kind: agent
  ref: 'Browser extension decision log: EXT-306'
  recorded_at: '2025-07-11T08:52:40.000Z'
id: FACT-extension-connected-organizations-limit-override
type: fact
---
The connected organization limit in the browser extension follows the plan of the browser profile and is not set by hand.

Modeled from REQ-extension-connected-organizations-limit-override so the claim can be checked for contradictions.
