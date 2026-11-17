---
title: DOCS_FEEDBACK_SECRET, the request signing secret of the documentation feedback endpoint
status: active
fact_kind: subject
subject_key: docs.docs_feedback_secret
canonical_key: docs.docs_feedback_secret
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: Documentation site decision log (apps/docs)
  recorded_at: '2025-09-16T09:18:30.000Z'
id: FACT-docs-docs-feedback-secret-subject
type: fact
---
DOCS_FEEDBACK_SECRET holds the request signing secret that the documentation feedback endpoint reads when it starts. It is a setting of that service alone and is not AUTH_SECRET, the secret of the Papra server.
