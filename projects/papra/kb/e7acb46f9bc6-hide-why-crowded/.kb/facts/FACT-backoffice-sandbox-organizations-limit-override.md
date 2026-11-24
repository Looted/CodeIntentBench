---
title: backoffice.sandbox_organizations limit_override = by plan
status: active
fact_kind: property_value
subject_key: backoffice.sandbox_organizations
property_key: limit_override
operator: eq
value_type: string
value_string: by plan
claim_key: CLAIM-F0BFBEEEBA89F78F
claim_text: The sandbox organization limit in the Papra Cloud back office follows the plan of the customer and is not set by hand
text_ref: REQ-backoffice-sandbox-organizations-limit-override
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-468'
  recorded_at: '2025-12-26T17:46:52.000Z'
id: FACT-backoffice-sandbox-organizations-limit-override
type: fact
---
The sandbox organization limit in the Papra Cloud back office follows the plan of the customer and is not set by hand.

Modeled from REQ-backoffice-sandbox-organizations-limit-override so the claim can be checked for contradictions.
