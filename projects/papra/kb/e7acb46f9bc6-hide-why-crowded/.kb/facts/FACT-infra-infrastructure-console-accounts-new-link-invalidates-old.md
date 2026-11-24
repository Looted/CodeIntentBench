---
title: infra.infrastructure_console_accounts new_link_invalidates_old = True
status: active
fact_kind: property_value
subject_key: infra.infrastructure_console_accounts
property_key: new_link_invalidates_old
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-A6758D585E12B6CF
claim_text: requesting a new link invalidates the earlier ones
text_ref: REQ-infra-infrastructure-console-accounts-reset-link-single-use
tags:
  - lane:strict
  - knowledge-source:infra-decisions
origin:
  kind: agent
  ref: 'Infrastructure runbook: INF-175'
  recorded_at: '2025-02-12T10:12:19.000Z'
id: FACT-infra-infrastructure-console-accounts-new-link-invalidates-old
type: fact
---
Requesting a new link invalidates the earlier ones.

Modeled from REQ-infra-infrastructure-console-accounts-reset-link-single-use so the claim can be checked for contradictions.
