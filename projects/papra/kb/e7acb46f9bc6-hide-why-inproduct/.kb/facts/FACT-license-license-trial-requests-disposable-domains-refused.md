---
title: license.license_trial_requests disposable_domains_refused = True
status: active
fact_kind: property_value
subject_key: license.license_trial_requests
property_key: disposable_domains_refused
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-C6418010C75A4D94
claim_text: Addresses from disposable-mail domains are refused in license trial requests
text_ref: REQ-license-license-trial-requests-blocked-domains
tags:
  - lane:strict
  - knowledge-source:license-decisions
origin:
  kind: agent
  ref: 'License server decision log: LIC-103'
  recorded_at: '2025-04-25T16:05:13.000Z'
id: FACT-license-license-trial-requests-disposable-domains-refused
type: fact
---
Addresses from disposable-mail domains are refused in license trial requests.

Modeled from REQ-license-license-trial-requests-blocked-domains so the claim can be checked for contradictions.
