---
title: When an allowed-domain list is configured, emails whose domain is in the list or is a subdomain of a listed domain may sign up; Matching ignores case.
status: closed
semantic_text: When an allowed-domain list is configured, emails whose domain is in the list or is a subdomain of a listed domain may sign up; Matching ignores case.
semantic_clauses:
  - When an allowed-domain list is configured, emails whose domain is in the list or is a subdomain of a listed domain may sign up
  - Matching ignores case
logic_claims:
  - CLAIM-88DF676B4BF9682A
  - CLAIM-60CF58D4E953D85A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: fe3b0cb92834d4f1f086c026cdf626eed9e4217cae622ca8d4717e9df8a53c5d
semantic_inventory:
  - claim_key: CLAIM-88DF676B4BF9682A
    claim_text: When an allowed-domain list is configured, emails whose domain is in the list or is a subdomain of a listed domain may sign up
    role: condition
    status: modeled
    span:
      start: 0
      end: 126
    subjects:
      - auth.signup_email_domains
  - claim_key: CLAIM-60CF58D4E953D85A
    claim_text: Matching ignores case
    role: descriptive
    status: modeled
    span:
      start: 128
      end: 149
    subjects:
      - auth.signup_email_domains
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server decision log: SRV-156'
  recorded_at: '2025-10-29T09:38:14.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-decisions
  - component:auth
id: REQ-papra-signup-allowed-domains-include-subdomains
type: req
---
When an allowed-domain list is configured, emails whose domain is in the list or is a subdomain of a listed domain may sign up; Matching ignores case.

## Context

Reason not stated.

## Why this changed

Self-hosted instances wanted sign-up limited to their own company.

## Source

> Instances can restrict sign-up to listed email domains; a listed domain also admits its subdomains. (SRV-156)

Source: Papra server decision log - SRV-156
