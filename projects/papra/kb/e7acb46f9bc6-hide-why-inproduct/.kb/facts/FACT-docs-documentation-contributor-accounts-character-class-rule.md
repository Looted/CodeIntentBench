---
title: docs.documentation_contributor_accounts character_class_rule = False
status: active
fact_kind: property_value
subject_key: docs.documentation_contributor_accounts
property_key: character_class_rule
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-3BB7AA89852B2146
claim_text: there is no rule about character classes
text_ref: REQ-docs-documentation-contributor-accounts-password-length
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-214'
  recorded_at: '2026-04-01T15:50:18.000Z'
id: FACT-docs-documentation-contributor-accounts-character-class-rule
type: fact
---
There is no rule about character classes.

Modeled from REQ-docs-documentation-contributor-accounts-password-length so the claim can be checked for contradictions.
