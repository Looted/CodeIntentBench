---
title: support.support_portal_accounts new_link_invalidates_old = True
status: active
fact_kind: property_value
subject_key: support.support_portal_accounts
property_key: new_link_invalidates_old
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-A6758D585E12B6CF
claim_text: requesting a new link invalidates the earlier ones
text_ref: REQ-support-support-portal-accounts-reset-link-single-use
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-354'
  recorded_at: '2025-10-20T14:39:26.000Z'
id: FACT-support-support-portal-accounts-new-link-invalidates-old
type: fact
---
Requesting a new link invalidates the earlier ones.

Modeled from REQ-support-support-portal-accounts-reset-link-single-use so the claim can be checked for contradictions.
