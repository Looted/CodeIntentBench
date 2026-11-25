---
title: backoffice.organizations counted_toward_limit = active only
status: active
fact_kind: property_value
subject_key: backoffice.organizations
property_key: counted_toward_limit
operator: eq
value_type: string
value_string: active only
claim_key: CLAIM-77BFF44CFB052EAC
claim_text: Archived organizations do not count toward the limit in the Papra Cloud back office
text_ref: REQ-backoffice-organizations-what-counts
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-439'
  recorded_at: '2026-02-24T14:05:05.000Z'
id: FACT-backoffice-organizations-counted-toward-limit
type: fact
---
Archived organizations do not count toward the limit in the Papra Cloud back office.

Modeled from REQ-backoffice-organizations-what-counts so the claim can be checked for contradictions.
