---
title: extension.site_rules case_variants_distinct = True
status: active
fact_kind: property_value
subject_key: extension.site_rules
property_key: case_variants_distinct
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-4EC211E97EDD1AAA
claim_text: two site rules that differ only by letter case are distinct
text_ref: REQ-extension-site-rules-case-sensitive-names
tags:
  - lane:strict
  - knowledge-source:extension-decisions
origin:
  kind: agent
  ref: 'Browser extension decision log: EXT-134'
  recorded_at: '2026-05-12T10:15:15.000Z'
id: FACT-extension-site-rules-case-variants-distinct
type: fact
---
Two site rules that differ only by letter case are distinct.

Modeled from REQ-extension-site-rules-case-sensitive-names so the claim can be checked for contradictions.
