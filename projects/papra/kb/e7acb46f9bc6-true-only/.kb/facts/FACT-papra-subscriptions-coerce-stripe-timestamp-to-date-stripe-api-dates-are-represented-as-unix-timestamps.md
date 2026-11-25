---
title: subscriptions.coerce_stripe_timestamp_to_date stripe_api_dates_are_represented_as_unix_timestamps = True
status: active
fact_kind: property_value
subject_key: subscriptions.coerce_stripe_timestamp_to_date
property_key: stripe_api_dates_are_represented_as_unix_timestamps
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-9558D6F9E46E0A63
claim_text: Stripe api dates are represented as unix timestamps (in seconds) and should be converted to JavaScript dates
text_ref: REQ-papra-subscriptions-stripe-api-dates-are-represented-as-unix
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1775'
  recorded_at: '2025-12-25T17:54:18.000Z'
id: FACT-papra-subscriptions-coerce-stripe-timestamp-to-date-stripe-api-dates-are-represented-as-unix-timestamps
type: fact
---
Stripe api dates are represented as unix timestamps (in seconds) and should be converted to JavaScript dates.

Modeled from REQ-papra-subscriptions-stripe-api-dates-are-represented-as-unix so the claim can be checked for contradictions.
