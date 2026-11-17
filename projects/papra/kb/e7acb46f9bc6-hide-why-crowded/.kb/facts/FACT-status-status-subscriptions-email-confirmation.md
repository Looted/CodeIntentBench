---
title: status.status_subscriptions email_confirmation = required
status: active
fact_kind: property_value
subject_key: status.status_subscriptions
property_key: email_confirmation
operator: eq
value_type: string
value_string: required
claim_key: CLAIM-588698CEE39CA403
claim_text: An address given in status page subscriptions counts only after it is confirmed through an emailed link
text_ref: REQ-status-status-subscriptions-email-confirmation
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-248'
  recorded_at: '2026-07-15T14:11:30.000Z'
id: FACT-status-status-subscriptions-email-confirmation
type: fact
---
An address given in status page subscriptions counts only after it is confirmed through an emailed link.

Modeled from REQ-status-status-subscriptions-email-confirmation so the claim can be checked for contradictions.
