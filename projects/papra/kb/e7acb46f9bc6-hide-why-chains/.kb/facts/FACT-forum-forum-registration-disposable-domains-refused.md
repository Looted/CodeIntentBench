---
title: forum.forum_registration disposable_domains_refused = True
status: active
fact_kind: property_value
subject_key: forum.forum_registration
property_key: disposable_domains_refused
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-FB1B409ACAB0D81E
claim_text: Addresses from disposable-mail domains are refused in community forum registration
text_ref: REQ-forum-forum-registration-blocked-domains
tags:
  - lane:strict
  - knowledge-source:forum-decisions
origin:
  kind: agent
  ref: 'Community forum operations notes: FRM-262'
  recorded_at: '2025-06-05T10:53:37.000Z'
id: FACT-forum-forum-registration-disposable-domains-refused
type: fact
---
Addresses from disposable-mail domains are refused in community forum registration.

Modeled from REQ-forum-forum-registration-blocked-domains so the claim can be checked for contradictions.
