---
title: docs.documentation_site_search invalid_date_filter = ignored
status: active
fact_kind: property_value
subject_key: docs.documentation_site_search
property_key: invalid_date_filter
operator: eq
value_type: string
value_string: ignored
claim_key: CLAIM-F03BE805DD0B09A3
claim_text: 'An invalid date in the updated: filter of the documentation site search is ignored and the other filters still apply'
text_ref: REQ-docs-documentation-site-search-invalid-date
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-200'
  recorded_at: '2026-04-11T11:38:07.000Z'
id: FACT-docs-documentation-site-search-invalid-date-filter
type: fact
---
An invalid date in the updated: filter of the documentation site search is ignored and the other filters still apply.

Modeled from REQ-docs-documentation-site-search-invalid-date so the claim can be checked for contradictions.
