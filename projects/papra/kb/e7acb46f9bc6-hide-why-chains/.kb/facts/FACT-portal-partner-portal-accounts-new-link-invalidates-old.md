---
title: portal.partner_portal_accounts new_link_invalidates_old = True
status: active
fact_kind: property_value
subject_key: portal.partner_portal_accounts
property_key: new_link_invalidates_old
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-A6758D585E12B6CF
claim_text: requesting a new link invalidates the earlier ones
text_ref: REQ-portal-partner-portal-accounts-reset-link-single-use
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-355'
  recorded_at: '2025-06-24T17:12:14.000Z'
id: FACT-portal-partner-portal-accounts-new-link-invalidates-old
type: fact
---
Requesting a new link invalidates the earlier ones.

Modeled from REQ-portal-partner-portal-accounts-reset-link-single-use so the claim can be checked for contradictions.
