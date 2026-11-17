---
title: backoffice.back_office_organization_lookup query_min_length = 3
status: active
fact_kind: property_value
subject_key: backoffice.back_office_organization_lookup
property_key: query_min_length
operator: eq
value_type: int
value_int: 3
claim_key: CLAIM-342AC563D460DC04
claim_text: The back office organization lookup runs only once the query has at least 3 characters
text_ref: REQ-backoffice-back-office-organization-lookup-minimum-length
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-259'
  recorded_at: '2025-11-21T16:04:52.000Z'
id: FACT-backoffice-back-office-organization-lookup-query-min-length
type: fact
---
The back office organization lookup runs only once the query has at least 3 characters.

Modeled from REQ-backoffice-back-office-organization-lookup-minimum-length so the claim can be checked for contradictions.
