---
title: DOCSEARCH_ADMIN_KEY, the index admin key of the documentation search proxy
status: active
fact_kind: subject
subject_key: docs.docsearch_admin_key
canonical_key: docs.docsearch_admin_key
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: Documentation site decision log (apps/docs)
  recorded_at: '2025-06-23T14:14:10.000Z'
id: FACT-docs-docsearch-admin-key-subject
type: fact
---
DOCSEARCH_ADMIN_KEY holds the index admin key that the documentation search proxy reads when it starts. It is a setting of that service alone and is not AUTH_SECRET, the secret of the Papra server.
