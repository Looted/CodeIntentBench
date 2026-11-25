---
title: forum.forum_registration list_precedence = block list wins
status: active
fact_kind: property_value
subject_key: forum.forum_registration
property_key: list_precedence
operator: eq
value_type: string
value_string: block list wins
claim_key: CLAIM-0D5093478D80516F
claim_text: a domain on the block list is refused even when it is also on the allowed list
text_ref: REQ-forum-forum-registration-blocked-domains
tags:
  - lane:strict
  - knowledge-source:forum-decisions
origin:
  kind: agent
  ref: 'Community forum operations notes: FRM-262'
  recorded_at: '2025-06-05T10:53:37.000Z'
id: FACT-forum-forum-registration-list-precedence
type: fact
---
A domain on the block list is refused even when it is also on the allowed list.

Modeled from REQ-forum-forum-registration-blocked-domains so the claim can be checked for contradictions.
