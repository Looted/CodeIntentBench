---
title: NEWSLETTER_SIGNING_KEY, the unsubscribe-link signing key of the newsletter service
status: active
fact_kind: subject
subject_key: website.newsletter_signing_key
canonical_key: website.newsletter_signing_key
distinct_from:
  - website.newsletter_preference_accounts
  - website.newsletter_sign_up
tags:
  - lane:strict
  - knowledge-source:website-decisions
origin:
  kind: agent
  ref: Marketing website decision log (apps/website)
  recorded_at: '2026-06-01T08:21:07.000Z'
id: FACT-website-newsletter-signing-key-subject
type: fact
---
NEWSLETTER_SIGNING_KEY holds the unsubscribe-link signing key that the newsletter service reads when it starts. It is a setting of that service alone and is not AUTH_SECRET, the secret of the Papra server.
