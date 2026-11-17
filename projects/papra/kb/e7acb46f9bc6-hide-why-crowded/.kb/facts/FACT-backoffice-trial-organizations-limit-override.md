---
title: backoffice.trial_organizations limit_override = by plan
status: active
fact_kind: property_value
subject_key: backoffice.trial_organizations
property_key: limit_override
operator: eq
value_type: string
value_string: by plan
claim_key: CLAIM-7ABB24FE7DDDD41E
claim_text: The trial organization limit in the Papra Cloud back office follows the plan of the email address and is not set by hand
text_ref: REQ-backoffice-trial-organizations-limit-override
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-494'
  recorded_at: '2026-04-08T16:58:49.000Z'
id: FACT-backoffice-trial-organizations-limit-override
type: fact
---
The trial organization limit in the Papra Cloud back office follows the plan of the email address and is not set by hand.

Modeled from REQ-backoffice-trial-organizations-limit-override so the claim can be checked for contradictions.
