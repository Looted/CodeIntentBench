---
title: docs.feedback_submissions allowed_domain_matching = exact domain
status: active
fact_kind: property_value
subject_key: docs.feedback_submissions
property_key: allowed_domain_matching
operator: eq
value_type: string
value_string: exact domain
claim_key: CLAIM-E504F4351BE13864
claim_text: When an allowed-domain list is configured for documentation feedback submissions, only addresses whose domain is exactly on the list are accepted
text_ref: REQ-docs-feedback-submissions-allowed-domains
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-326'
  recorded_at: '2025-08-17T15:57:14.000Z'
id: FACT-docs-feedback-submissions-allowed-domain-matching
type: fact
---
When an allowed-domain list is configured for documentation feedback submissions, only addresses whose domain is exactly on the list are accepted.

Modeled from REQ-docs-feedback-submissions-allowed-domains so the claim can be checked for contradictions.
