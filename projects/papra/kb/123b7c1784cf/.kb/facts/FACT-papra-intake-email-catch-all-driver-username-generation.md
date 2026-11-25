---
title: intake_email.catch_all_driver username_generation = separate_username_driver
status: active
fact_kind: property_value
subject_key: intake_email.catch_all_driver
property_key: username_generation
operator: eq
value_type: string
value_string: separate_username_driver
claim_key: CLAIM-E40D045AE92FDBB4
claim_text: The random-username intake driver is replaced by a catch-all driver (INTAKE_EMAILS_CATCH_ALL_DOMAIN) with a separate username driver (INTAKE_EMAILS_USERNAME_DRIVER)
text_ref: REQ-papra-intake-catch-all-driver
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 0.9.3 changelog, #504: Split the intake-email username generation from the email ad'
  recorded_at: '2026-11-25T19:31:08.831Z'
id: FACT-papra-intake-email-catch-all-driver-username-generation
type: fact
---
The random-username intake driver is replaced by a catch-all driver (INTAKE_EMAILS_CATCH_ALL_DOMAIN) with a separate username driver (INTAKE_EMAILS_USERNAME_DRIVER).

Modeled from REQ-papra-intake-catch-all-driver so the claim can be checked for contradictions.
