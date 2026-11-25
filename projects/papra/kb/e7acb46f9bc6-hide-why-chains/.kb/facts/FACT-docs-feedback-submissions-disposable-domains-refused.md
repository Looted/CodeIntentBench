---
title: docs.feedback_submissions disposable_domains_refused = True
status: active
fact_kind: property_value
subject_key: docs.feedback_submissions
property_key: disposable_domains_refused
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-43AFEEB739118372
claim_text: Addresses from disposable-mail domains are refused in documentation feedback submissions
text_ref: REQ-docs-feedback-submissions-blocked-domains
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-334'
  recorded_at: '2026-04-04T09:44:50.000Z'
id: FACT-docs-feedback-submissions-disposable-domains-refused
type: fact
---
Addresses from disposable-mail domains are refused in documentation feedback submissions.

Modeled from REQ-docs-feedback-submissions-blocked-domains so the claim can be checked for contradictions.
