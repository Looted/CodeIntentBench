---
title: app.get_process_mode when_the_process_mode_is_set_to_worker = True
status: active
fact_kind: property_value
subject_key: app.get_process_mode
property_key: when_the_process_mode_is_set_to_worker
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-0724595A6F71D7EB
claim_text: When the process mode is set to worker, only the worker should be enabled
text_ref: REQ-papra-app-process-mode-is-set-to-worker-only
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-551'
  recorded_at: '2026-01-14T16:39:42.000Z'
id: FACT-papra-app-get-process-mode-when-the-process-mode-is-set-to-worker
type: fact
---
When the process mode is set to worker, only the worker should be enabled.

Modeled from REQ-papra-app-process-mode-is-set-to-worker-only so the claim can be checked for contradictions.
