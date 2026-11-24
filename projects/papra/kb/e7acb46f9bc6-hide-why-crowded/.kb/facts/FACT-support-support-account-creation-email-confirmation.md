---
title: support.support_account_creation email_confirmation = required
status: active
fact_kind: property_value
subject_key: support.support_account_creation
property_key: email_confirmation
operator: eq
value_type: string
value_string: required
claim_key: CLAIM-968083D343570082
claim_text: An address given in support portal account creation counts only after it is confirmed through an emailed link
text_ref: REQ-support-support-account-creation-email-confirmation
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-283'
  recorded_at: '2025-06-08T12:46:03.000Z'
id: FACT-support-support-account-creation-email-confirmation
type: fact
---
An address given in support portal account creation counts only after it is confirmed through an emailed link.

Modeled from REQ-support-support-account-creation-email-confirmation so the claim can be checked for contradictions.
