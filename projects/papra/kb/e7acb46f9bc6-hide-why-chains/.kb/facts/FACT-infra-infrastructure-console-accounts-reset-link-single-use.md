---
title: infra.infrastructure_console_accounts reset_link_single_use = True
status: active
fact_kind: property_value
subject_key: infra.infrastructure_console_accounts
property_key: reset_link_single_use
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-20ECA7C8F962B2E1
claim_text: A password reset link for infrastructure console accounts works once
text_ref: REQ-infra-infrastructure-console-accounts-reset-link-single-use
tags:
  - lane:strict
  - knowledge-source:infra-decisions
origin:
  kind: agent
  ref: 'Infrastructure runbook: INF-175'
  recorded_at: '2025-02-12T10:12:19.000Z'
id: FACT-infra-infrastructure-console-accounts-reset-link-single-use
type: fact
---
A password reset link for infrastructure console accounts works once.

Modeled from REQ-infra-infrastructure-console-accounts-reset-link-single-use so the claim can be checked for contradictions.
