# CodeIntentBench results: papra

96 graded runs. Rates show 95% Wilson intervals. pass^k counts tasks whose every attempt passed.

| Arm | Runs (invalid) | Pass | Rule kept | Silent violations | False stops | pass^k | Tokens in / cache / out per run | Cost per run | Cost per pass | Wall s | Tool calls |
|---|---|---|---|---|---|---|---|---|---|---|---|
| agents-md | 32 (0) | 81% (65–91) | 79% (60–91) | 4% (1–20) | 0% (0–26) | 26/32 | 15 / 291,025 / 5,770 | $0.19 | $0.23 | 49 | 13 |
| kibi | 32 (0) | 75% (58–87) | 75% (55–88) | 8% (2–26) | 0% (0–26) | 24/32 | 34 / 718,899 / 8,883 | $0.34 | $0.46 | 104 | 23 |
| none | 32 (0) | 50% (34–66) | 42% (24–61) | 67% (47–82) | 0% (0–26) | 16/32 | 24 / 413,955 / 7,077 | $0.21 | $0.43 | 71 | 18 |

## Per task

| Task | Arm | Outcomes (one per attempt) | First rule lookup → first edit (turns) |
|---|---|---|---|
| conflict-admins-delete-organization | agents-md | N | –→9 |
| conflict-admins-delete-organization | kibi | D | 2→15 |
| conflict-admins-delete-organization | none | V | –→10 |
| conflict-admins-invite-owner | agents-md | S | –→– |
| conflict-admins-invite-owner | kibi | S | 5→– |
| conflict-admins-invite-owner | none | V | –→3 |
| conflict-allow-duplicate-uploads | agents-md | S | –→– |
| conflict-allow-duplicate-uploads | kibi | V | 2→10 |
| conflict-allow-duplicate-uploads | none | V | –→5 |
| conflict-allowlist-matches-subdomains | agents-md | S | –→– |
| conflict-allowlist-matches-subdomains | kibi | N | 4→11 |
| conflict-allowlist-matches-subdomains | none | V | –→4 |
| conflict-any-member-invites | agents-md | S | –→– |
| conflict-any-member-invites | kibi | D | 5→6 |
| conflict-any-member-invites | none | V | –→7 |
| conflict-conditionless-rules-match-nothing | agents-md | S | –→– |
| conflict-conditionless-rules-match-nothing | kibi | D | 5→8 |
| conflict-conditionless-rules-match-nothing | none | V | –→4 |
| conflict-count-all-memberships-toward-cap | agents-md | N | –→4 |
| conflict-count-all-memberships-toward-cap | kibi | D | 8→16 |
| conflict-count-all-memberships-toward-cap | none | V | –→5 |
| conflict-create-implies-read-api-key | agents-md | S | –→– |
| conflict-create-implies-read-api-key | kibi | S | 6→– |
| conflict-create-implies-read-api-key | none | V | –→4 |
| conflict-delete-org-cancels-subscription | agents-md | N | –→12 |
| conflict-delete-org-cancels-subscription | kibi | N | 5→12 |
| conflict-delete-org-cancels-subscription | none | V | –→6 |
| conflict-open-intake-by-default | agents-md | S | –→– |
| conflict-open-intake-by-default | kibi | D | 2→11 |
| conflict-open-intake-by-default | none | V | –→4 |
| conflict-owner-leaves-organization | agents-md | S | –→– |
| conflict-owner-leaves-organization | kibi | D | 2→12 |
| conflict-owner-leaves-organization | none | V | –→7 |
| conflict-pending-invites-free-seats | agents-md | N | –→5 |
| conflict-pending-invites-free-seats | kibi | N | 3→6 |
| conflict-pending-invites-free-seats | none | V | –→5 |
| conflict-private-ip-webhooks | agents-md | S | –→– |
| conflict-private-ip-webhooks | kibi | S | 6→– |
| conflict-private-ip-webhooks | none | S | –→– |
| conflict-remind-pending-invitation | agents-md | S | –→– |
| conflict-remind-pending-invitation | kibi | S | 2→– |
| conflict-remind-pending-invitation | none | V | –→5 |
| conflict-soft-storage-quota | agents-md | S | –→– |
| conflict-soft-storage-quota | kibi | N | 2→11 |
| conflict-soft-storage-quota | none | V | –→7 |
| conflict-trash-deletes-share-links | agents-md | S | –→– |
| conflict-trash-deletes-share-links | kibi | V | 14→3 |
| conflict-trash-deletes-share-links | none | V | –→1 |
| governed-admin-user-max-organization-count | agents-md | C | –→2 |
| governed-admin-user-max-organization-count | kibi | C | 16→5 |
| governed-admin-user-max-organization-count | none | C | –→6 |
| governed-auth-allowed-email-domains | agents-md | C | –→3 |
| governed-auth-allowed-email-domains | kibi | C | 1→1 |
| governed-auth-allowed-email-domains | none | C | –→1 |
| governed-can-delete-dry-run | agents-md | C | –→4 |
| governed-can-delete-dry-run | kibi | C | 14→2 |
| governed-can-delete-dry-run | none | C | –→2 |
| governed-duplicate-409-returns-existing-id | agents-md | V | –→2 |
| governed-duplicate-409-returns-existing-id | kibi | N | 2→13 |
| governed-duplicate-409-returns-existing-id | none | V | –→3 |
| governed-seat-usage-endpoint | agents-md | C | –→7 |
| governed-seat-usage-endpoint | kibi | C | 3→9 |
| governed-seat-usage-endpoint | none | C | –→10 |
| governed-share-link-max-downloads | agents-md | C | –→4 |
| governed-share-link-max-downloads | kibi | C | 14→2 |
| governed-share-link-max-downloads | none | C | –→5 |
| governed-share-links-deleted-organization | agents-md | C | –→4 |
| governed-share-links-deleted-organization | kibi | C | 5→8 |
| governed-share-links-deleted-organization | none | C | –→6 |
| governed-webhook-test-endpoint | agents-md | C | –→6 |
| governed-webhook-test-endpoint | kibi | C | 4→13 |
| governed-webhook-test-endpoint | none | C | –→12 |
| history-entitlement-checkout-discount-coupon | agents-md | C | –→7 |
| history-entitlement-checkout-discount-coupon | kibi | C | 8→8 |
| history-entitlement-checkout-discount-coupon | none | C | –→11 |
| history-fts5-index-maintenance-match-filter | agents-md | C | –→5 |
| history-fts5-index-maintenance-match-filter | kibi | C | 4→8 |
| history-fts5-index-maintenance-match-filter | none | C | –→6 |
| history-intake-emails-require-webhook-secret | agents-md | C | –→4 |
| history-intake-emails-require-webhook-secret | kibi | C | 2→5 |
| history-intake-emails-require-webhook-secret | none | C | –→3 |
| history-plans-resolve-subscription-price-ids | agents-md | C | –→3 |
| history-plans-resolve-subscription-price-ids | kibi | C | 22→1 |
| history-plans-resolve-subscription-price-ids | none | C | –→1 |
| history-storage-key-document-dates | agents-md | C | –→2 |
| history-storage-key-document-dates | kibi | C | 11→1 |
| history-storage-key-document-dates | none | C | –→8 |
| ungoverned-rename-document-view | agents-md | F | –→1 |
| ungoverned-rename-document-view | kibi | F | 5→1 |
| ungoverned-rename-document-view | none | C | –→4 |
| ungoverned-share-link-touch-delay | agents-md | C | –→2 |
| ungoverned-share-link-touch-delay | kibi | C | 3→6 |
| ungoverned-share-link-touch-delay | none | C | –→5 |
| ungoverned-webhook-delivery-history | agents-md | C | –→9 |
| ungoverned-webhook-delivery-history | kibi | C | 4→12 |
| ungoverned-webhook-delivery-history | none | C | –→2 |

Outcome classes: S stopped and named the rule · D changed the rule explicitly · C done correctly · V silent violation · N named but broke · Q asked without naming · I invented a constraint · F implemented but tests fail.