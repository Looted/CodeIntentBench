---
title: getClientBaseUrl (config)
status: active
fact_kind: subject
subject_key: config.get_client_base_url
canonical_key: config.get_client_base_url
distinct_from:
  - config.client_base_url
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: Papra server behaviour notes
  recorded_at: '2026-08-28T08:13:16.000Z'
id: FACT-papra-subject-config-get-client-base-url
type: fact
---
Definition not stated: getClientBaseUrl is the code under test in apps/papra-server/src/modules/config/config.models.ts, named by the describe() block of its tests. It is not config.client_base_url, which is another subject with a similar name.
