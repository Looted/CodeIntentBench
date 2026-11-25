---
title: config.get_public_config exposes_an_empty_domain_list_when_the_intake = True
status: active
fact_kind: property_value
subject_key: config.get_public_config
property_key: exposes_an_empty_domain_list_when_the_intake
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-790C9E6CDC73501C
claim_text: Exposes an empty domain list when the intake email driver has no selectable domains
text_ref: REQ-papra-config-exposes-empty-domain-list-when-intake-email
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-580'
  recorded_at: '2025-08-28T10:36:01.000Z'
id: FACT-papra-config-get-public-config-exposes-an-empty-domain-list-when-the-intake
type: fact
---
Exposes an empty domain list when the intake email driver has no selectable domains.

Modeled from REQ-papra-config-exposes-empty-domain-list-when-intake-email so the claim can be checked for contradictions.
