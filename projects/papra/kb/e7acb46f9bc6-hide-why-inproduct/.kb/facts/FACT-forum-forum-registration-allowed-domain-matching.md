---
title: forum.forum_registration allowed_domain_matching = domain and subdomains
status: active
fact_kind: property_value
subject_key: forum.forum_registration
property_key: allowed_domain_matching
operator: eq
value_type: string
value_string: domain and subdomains
claim_key: CLAIM-83052C3CDC12C916
claim_text: When an allowed-domain list is configured for community forum registration, subdomains of a listed domain are accepted as well
text_ref: REQ-forum-forum-registration-allowed-domains
tags:
  - lane:strict
  - knowledge-source:forum-decisions
origin:
  kind: agent
  ref: 'Community forum operations notes: FRM-146'
  recorded_at: '2026-08-06T10:41:54.000Z'
id: FACT-forum-forum-registration-allowed-domain-matching
type: fact
---
When an allowed-domain list is configured for community forum registration, subdomains of a listed domain are accepted as well.

Modeled from REQ-forum-forum-registration-allowed-domains so the claim can be checked for contradictions.
