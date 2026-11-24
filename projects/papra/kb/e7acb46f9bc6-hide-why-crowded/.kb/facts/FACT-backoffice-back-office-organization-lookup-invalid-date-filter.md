---
title: backoffice.back_office_organization_lookup invalid_date_filter = ignored
status: active
fact_kind: property_value
subject_key: backoffice.back_office_organization_lookup
property_key: invalid_date_filter
operator: eq
value_type: string
value_string: ignored
claim_key: CLAIM-79EE6ABAB1AA0B9B
claim_text: 'An invalid date in the created: filter of the back office organization lookup is ignored and the other filters still apply'
text_ref: REQ-backoffice-back-office-organization-lookup-invalid-date
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-243'
  recorded_at: '2025-08-04T14:23:38.000Z'
id: FACT-backoffice-back-office-organization-lookup-invalid-date-filter
type: fact
---
An invalid date in the created: filter of the back office organization lookup is ignored and the other filters still apply.

Modeled from REQ-backoffice-back-office-organization-lookup-invalid-date so the claim can be checked for contradictions.
