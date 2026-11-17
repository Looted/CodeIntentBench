---
title: website.changelog_labels delete_in_use = detached
status: active
fact_kind: property_value
subject_key: website.changelog_labels
property_key: delete_in_use
operator: eq
value_type: string
value_string: detached
claim_key: CLAIM-23C835AE5857CF61
claim_text: Deleting a changelog label on the marketing website removes it from everything that uses it, without confirmation for each use
text_ref: REQ-website-changelog-labels-delete-in-use
tags:
  - lane:strict
  - knowledge-source:website-decisions
origin:
  kind: agent
  ref: 'Marketing website decision log (apps/website): WEB-186'
  recorded_at: '2026-09-03T17:29:20.000Z'
id: FACT-website-changelog-labels-delete-in-use
type: fact
---
Deleting a changelog label on the marketing website removes it from everything that uses it, without confirmation for each use.

Modeled from REQ-website-changelog-labels-delete-in-use so the claim can be checked for contradictions.
