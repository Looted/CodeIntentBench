---
title: 'A tagging rule applies its tags only when its conditions match according to its match mode: "all" (the default) requires every condition to match, "any" requ…'
status: active
semantic_text: 'A tagging rule applies its tags only when its conditions match according to its match mode: "all" (the default) requires every condition to match, "any" requires at least one. A rule with no conditions always matches and tags every incoming document.'
semantic_clauses:
  - 'A tagging rule applies its tags only when its conditions match according to its match mode: "all" (the default) requires every condition to match'
  - '"any" requires at least one'
  - A rule with no conditions always matches and tags every incoming document
logic_claims:
  - CLAIM-E38AEB914C491E43
  - CLAIM-BFF304292AEFC7DD
  - CLAIM-0A4AC738604BBD43
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: ef2eb45c342fcac5ff75c9663f47fa9efd20a8975de264e59173f2a137346b17
semantic_inventory:
  - claim_key: CLAIM-E38AEB914C491E43
    claim_text: 'A tagging rule applies its tags only when its conditions match according to its match mode: "all" (the default) requires every condition to match'
    role: normative
    status: modeled
    span:
      start: 0
      end: 145
    subjects:
      - tagging_rules.rule
  - claim_key: CLAIM-BFF304292AEFC7DD
    claim_text: '"any" requires at least one'
    role: normative
    status: modeled
    span:
      start: 147
      end: 174
    subjects:
      - tagging_rules.rule
  - claim_key: CLAIM-0A4AC738604BBD43
    claim_text: A rule with no conditions always matches and tags every incoming document
    role: descriptive
    status: modeled
    span:
      start: 176
      end: 249
    subjects:
      - tagging_rules.rule
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server test suite (apps/papra-server/src/modules): tagging-rules/tagging-rules.usecases.test.ts#tagging-rule-match-mode'
  recorded_at: '2026-11-16T10:30:31.286Z'
tags:
  - bootstrap
  - knowledge-source:papra-tests
  - component:tagging_rules
  - rule:tagging-rule-match-mode
rationale: 'Maintainer on issue #597: nested and/or rule groups were judged a lot of effort for something niche, and a toggle between "All conditions should match (AND)" and "Any condition should match (OR)" covers the need. Why "all" is the default and why a rule without conditions matches every document: reason not stated.'
id: REQ-papra-tagging-rule-match-mode
type: req
---
A tagging rule applies its tags only when its conditions match according to its match mode: "all" (the default) requires every condition to match, "any" requires at least one. A rule with no conditions always matches and tags every incoming document.

## Context

Maintainer on issue #597: nested and/or rule groups were judged a lot of effort for something niche, and a toggle between "All conditions should match (AND)" and "Any condition should match (OR)" covers the need. Why "all" is the default and why a rule without conditions matches every document: reason not stated.

## Source

> when conditionMatchMode is "all" (default), tags are not applied when only some conditions match
> when conditionMatchMode is "any", tags are applied when at least one condition matches
> a rule without conditions will apply its tags to all imported documents

Source: Papra server test suite (apps/papra-server/src/modules) - tagging-rules/tagging-rules.usecases.test.ts#tagging-rule-match-mode
