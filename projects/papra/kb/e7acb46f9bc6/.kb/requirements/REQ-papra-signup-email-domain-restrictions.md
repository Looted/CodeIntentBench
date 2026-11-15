---
title: When an allowed-domain list is configured, only emails whose domain is exactly in the list may sign up; subdomains are not implicitly allowed.
status: active
semantic_text: When an allowed-domain list is configured, only emails whose domain is exactly in the list may sign up; subdomains are not implicitly allowed. A domain on the forbidden list is always rejected, even if it also appears on the allowed list. Matching ignores case.
semantic_clauses:
  - When an allowed-domain list is configured, only emails whose domain is exactly in the list may sign up
  - subdomains are not implicitly allowed
  - A domain on the forbidden list is always rejected, even if it also appears on the allowed list
  - Matching ignores case
logic_claims:
  - CLAIM-5B046718D5E1B7F3
  - CLAIM-B0C8A078F504F804
  - CLAIM-A0990507365A4AA7
  - CLAIM-60CF58D4E953D85A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: ed448dc76fd7d1a5252e244ffcbef8f5c33206c3198ae24e3154525d91559f9d
semantic_inventory:
  - claim_key: CLAIM-5B046718D5E1B7F3
    claim_text: When an allowed-domain list is configured, only emails whose domain is exactly in the list may sign up
    role: condition
    status: modeled
    span:
      start: 0
      end: 102
    subjects:
      - auth.signup_email_domains
  - claim_key: CLAIM-B0C8A078F504F804
    claim_text: subdomains are not implicitly allowed
    role: descriptive
    status: modeled
    span:
      start: 104
      end: 141
    subjects:
      - auth.signup_email_domains
  - claim_key: CLAIM-A0990507365A4AA7
    claim_text: A domain on the forbidden list is always rejected, even if it also appears on the allowed list
    role: normative
    status: modeled
    span:
      start: 143
      end: 237
    subjects:
      - auth.signup_email_domains
  - claim_key: CLAIM-60CF58D4E953D85A
    claim_text: Matching ignores case
    role: descriptive
    status: modeled
    span:
      start: 239
      end: 260
    subjects:
      - auth.signup_email_domains
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server test suite (apps/papra-server/src/modules): app/auth/auth.models.test.ts#signup-email-domain-restrictions'
  recorded_at: '2026-11-15T22:58:19.659Z'
tags:
  - bootstrap
  - knowledge-source:papra-tests
  - component:auth
  - rule:signup-email-domain-restrictions
id: REQ-papra-signup-email-domain-restrictions
type: req
---
When an allowed-domain list is configured, only emails whose domain is exactly in the list may sign up; subdomains are not implicitly allowed. A domain on the forbidden list is always rejected, even if it also appears on the allowed list. Matching ignores case.

## Context

Reason not stated.

## Source

> forbidden domains take precedence over allowed domains
> an allowed domain does not implicitly allow its subdomains
> a non-empty allowlist only permits listed domains

Source: Papra server test suite (apps/papra-server/src/modules) - app/auth/auth.models.test.ts#signup-email-domain-restrictions
