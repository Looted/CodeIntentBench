---
title: extension.site_rules name_uniqueness = exact
status: active
fact_kind: property_value
subject_key: extension.site_rules
property_key: name_uniqueness
operator: eq
value_type: string
value_string: exact
claim_key: CLAIM-439DF72838B396DB
claim_text: Site rules in the browser extension are compared exactly as typed
text_ref: REQ-extension-site-rules-case-sensitive-names
tags:
  - lane:strict
  - knowledge-source:extension-decisions
origin:
  kind: agent
  ref: 'Browser extension decision log: EXT-134'
  recorded_at: '2026-05-12T10:15:15.000Z'
id: FACT-extension-site-rules-name-uniqueness
type: fact
---
Site rules in the browser extension are compared exactly as typed.

Modeled from REQ-extension-site-rules-case-sensitive-names so the claim can be checked for contradictions.
