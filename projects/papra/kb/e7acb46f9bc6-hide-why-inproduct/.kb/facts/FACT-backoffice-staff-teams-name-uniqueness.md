---
title: backoffice.staff_teams name_uniqueness = unique per owner
status: active
fact_kind: property_value
subject_key: backoffice.staff_teams
property_key: name_uniqueness
operator: eq
value_type: string
value_string: unique per owner
claim_key: CLAIM-FD7A55C739DAFE53
claim_text: Staff team names in the Papra Cloud back office are unique per staff member, regardless of letter case
text_ref: REQ-backoffice-staff-teams-name-uniqueness
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-295'
  recorded_at: '2025-03-10T12:06:18.000Z'
id: FACT-backoffice-staff-teams-name-uniqueness
type: fact
---
Staff team names in the Papra Cloud back office are unique per staff member, regardless of letter case.

Modeled from REQ-backoffice-staff-teams-name-uniqueness so the claim can be checked for contradictions.
