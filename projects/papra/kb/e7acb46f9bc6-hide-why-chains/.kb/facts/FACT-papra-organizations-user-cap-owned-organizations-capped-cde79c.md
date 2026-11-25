---
title: organizations.user_cap owned_organizations_capped = False
status: deprecated
fact_kind: property_value
subject_key: organizations.user_cap
property_key: owned_organizations_capped
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-A7DBDDD235EC51E0
claim_text: A user can own any number of organizations
text_ref: REQ-papra-organization-ownership-unlimited
tags:
  - lane:strict
  - knowledge-source:papra-server-decisions
origin:
  kind: agent
  ref: 'Papra server decision log: SRV-147'
  recorded_at: '2025-09-15T16:08:44.000Z'
id: FACT-papra-organizations-user-cap-owned-organizations-capped-cde79c
type: fact
---
A user can own any number of organizations.

Modeled from REQ-papra-organization-ownership-unlimited so the claim can be checked for contradictions.
