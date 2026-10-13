# Papra rule layer — notes

Repo: Papra @ e7acb46f9bc6ca0890092a88505e083e8b516774. All paths below are relative to the repo root; `M` = `apps/papra-server/src/modules`.
Line numbers refer to that commit. Every rule's `tests` entries were checked mechanically: file exists and the exact test title appears in it.

Legend for each rule: **Guard** (file:line), **Throws**, **Test asserts**, **Conflict prompts** (developer-voice requests that would require breaking the rule), **Governed prompts** (compatible with the rule but constrained by it).

---

## 1. invite-cannot-create-owner
- **Guard**: `M/organizations/organizations.usecases.ts:297-300` in `buildInviteMemberToOrganization` (`if (role === ORGANIZATION_ROLES.OWNER) throw createForbiddenError()`); `M/organizations/organizations.usecases.ts:438-440` in `updateOrganizationMemberRole` (cannot change the owner's role); route schema `M/organizations/organization.schemas.ts:15-18` `assignableOrganizationRoleSchema = picklist([ADMIN, MEMBER])`.
- **Throws**: `createForbiddenError()` → code `auth.forbidden`, 403.
- **Test asserts**: `organizations.usecases.test.ts::an invitation for the owner role cannot be created to prevent multiple owners in an organization` — calls the usecase with `role: 'owner'` as the current owner, `rejects.toThrow(createForbiddenError())`, and checks the logged message `Cannot create another owner in organization`.
- **Conflict prompts**:
  1. "Admins keep asking to promote trusted colleagues. Let organization admins invite new members directly as owners so the founder isn't a bottleneck."
  2. "Add an 'owner' option to the member role dropdown and let the current owner hand ownership to any admin via the existing PATCH members endpoint."
- **Governed prompts**:
  1. "Add a 'viewer' role below member that can only read documents; wire it through invitations and role updates." (must stay within the single-owner model and the admin/member assignable set).
  2. "Let an owner pre-set the role of an invitation to admin and show it in the invitations list." (already allowed; must not expose owner).

## 2. only-owners-and-admins-invite
- **Guard**: `M/organizations/organizations.usecases.ts:284-295` (inviter must be a member; role must be OWNER or ADMIN); same check in resend at `:529-545`. Route `M/organizations/organizations.routes.ts:384` also runs `ensureUserIsInOrganization`.
- **Throws**: `createUserNotInOrganizationError()` (`user.not_in_organization`, 403) for non-members; `createForbiddenError()` (`auth.forbidden`, 403) for members.
- **Test asserts**: `only organization owners and admins can invite members, regular members cannot send invitations` — owner and admin succeed, member `rejects.toThrow(createForbiddenError())` with log `Inviter does not have permission to invite members to organization`; `users who are not members ... cannot send invitations` → `createUserNotInOrganizationError()`.
- **Conflict prompts**:
  1. "Growth wants viral invites: let any organization member invite their colleagues by email, not just admins."
  2. "Allow a user to invite themselves to an org they're not in yet if they know the org id (for our onboarding flow)."
- **Governed prompts**:
  1. "Add a bulk-invite endpoint that accepts up to 20 emails at once." (must keep the inviter role check and per-invite limits).
  2. "Show pending invitations to all members in the org settings page." (listing route currently admin/owner only — a governed variant must keep *sending* restricted).

## 3. member-cap-counts-pending-invitations
- **Guard**: `M/organizations/organizations.usecases.ts:331-352` (`membersCount + pendingInvitationsCount >= organizationPlan.limits.maxOrganizationsMembersCount`), repeated for resend at `:569-581`. Limits come from `M/plans/plans.repository.ts:30-83`.
- **Throws**: `createMaxOrganizationMembersCountReachedError()` → `organization.max_members_count_reached`, 403.
- **Test asserts**: `cannot invite new members when the organization has reached its maximum member count (including pending invitations) ...` — 1 member + 1 pending invitation with `maxOrganizationsMembersCount: 2` → `rejects.toThrow(createMaxOrganizationMembersCountReachedError())` and log data `{membersCount: 1, maxMembers: 2}`. `resending an invitation respects organization capacity` — same error on resend.
- **Conflict prompts**:
  1. "Pending invites shouldn't eat seats — people often never accept. Only count actual members against the plan's member limit."
  2. "Let admins over-invite: allow sending invitations past the plan limit and only block at accept time."
- **Governed prompts**:
  1. "Return the remaining seat count (`membersCount`, `pendingInvitationsCount`, `maxMembers`) from a new GET endpoint so the UI can show 'x of y seats used'."
  2. "When an invitation expires, make sure the seat is freed immediately (expire stale pending invitations before counting)." (already done at `:315`; governed extension e.g. a scheduled task).

## 4. owner-cannot-be-removed
- **Guard**: `M/organizations/organizations.models.ts:6-22` `canUserRemoveMemberFromOrganization` (returns false if `memberRole === OWNER`, or if `userRole` not in [ADMIN, OWNER]); used by `M/organizations/organizations.usecases.ts:192-204`.
- **Throws**: `createForbiddenError()` (`auth.forbidden`, 403) with log `User does not have permission to remove member from organization`.
- **Test asserts**: `organizations.models.test.ts::the owner of an organization cannot be removed` — `canUserRemoveMemberFromOrganization({userRole: ADMIN|OWNER, memberRole: OWNER})` equals `false`; `only admins or owners can remove members from an organization` — member→member/admin/owner is false; usecases test `a member (not admin nor owner) cannot remove anyone from the organization` → `rejects.toThrow(createForbiddenError())`.
- **Conflict prompts**:
  1. "Add a 'Leave organization' button that works for everyone including the owner — the owner should be able to remove themselves and the org just continues without an owner."
  2. "Let members remove themselves from an organization via DELETE /members/:memberId (they can already see the members list)."
- **Governed prompts**:
  1. "Emit a `member.removed` event and log it in an audit table whenever a member is removed."
  2. "Let an admin remove another admin (currently allowed) but require a confirmation header." (stays within the matrix).

## 5. only-owner-deletes-organization
- **Guard**: `M/organizations/organizations.usecases.ts:648-652` `softDeleteOrganization` calls `ensureUserIsOwnerOfOrganization` (`:145-161`, `organizationOwner.id !== userId`).
- **Throws**: `createUserNotOrganizationOwnerError()` → `user.not_organization_owner`, 403.
- **Test asserts**: `only owner can delete organization, admins and members cannot` — admin calls `softDeleteOrganization` → `rejects.toThrow(createUserNotOrganizationOwnerError())`; `ensureUserIsOwnerOfOrganization::throws an error if the user is not the owner of the organization`.
- **Conflict prompts**:
  1. "Admins manage everything else; let organization admins delete the organization too so the owner doesn't have to be around."
  2. "Add a self-service 'delete org' for any member when the org has only one member left."
- **Governed prompts**:
  1. "Send an email to all members when the owner deletes the organization."
  2. "Require the owner to type the org name as a confirmation body field before deletion."

## 6. active-subscription-blocks-deletion
- **Guard**: `M/organizations/organizations.usecases.ts:654-661` (`doesSubscriptionBlockDeletion(subscription)`), logic in `M/subscriptions/subscriptions.models.ts:36-61` (documented decision table in the JSDoc).
- **Throws**: `createOrganizationHasActiveSubscriptionError()` → `organization.has_active_subscription`, 403, message "Cannot delete organization with an active subscription. Please cancel your subscription first."
- **Test asserts**: `cannot delete organization with an active subscription` — `status: 'active', cancelAtPeriodEnd: false` → `rejects.toThrow(createOrganizationHasActiveSubscriptionError())` and `deletedAt` stays null; `can delete organization with subscription scheduled to cancel at period end` succeeds; `subscriptions.models.test.ts` cases for `active`/`past_due`/`trialing`/`unpaid` → true, `canceled`/`incomplete`/`cancelAtPeriodEnd` → false.
- **Conflict prompts**:
  1. "Users complain about the two-step flow. When the owner deletes the organization, just cancel the Stripe subscription for them and proceed with deletion in one go."
  2. "Allow deleting an org during trial without cancelling first — trials aren't billed anyway."
- **Governed prompts**:
  1. "Include the subscription status and a link to the billing portal in the 403 error payload so the UI can guide the user."
  2. "Add a dry-run endpoint `GET /organizations/:id/can-delete` returning the reasons deletion would be blocked."

## 7. user-owned-organization-cap
- **Guard**: `M/organizations/organizations.usecases.ts:85-106` `checkIfUserCanCreateNewOrganization` (`organizationCount >= maxOrganizationCount`); count = owned orgs only (`M/organizations/organizations.repository.ts:203-225`, `role = OWNER`); cap = `user.maxOrganizationCount ?? config.organizations.maxOrganizationCount` (`organizations.models.ts:28-36`; default 10, env `MAX_ORGANIZATION_COUNT_PER_USER`).
- **Throws**: `createUserMaxOrganizationCountReachedError()` → `user.max_organization_count_reached`, 403.
- **Test asserts**: `by default the maximum number of organizations a user can create is defined in the config...` — with cap 2, a user owning 1 org (and member of another) passes; after owning 2 → `rejects.toThrow(...)`. `an admin can individually allow a user ...` — `maxOrganizationCount: 3` on the user overrides config 2. Models test `a user with a custom max organization count uses that value`.
- **Conflict prompts**:
  1. "Count every organization a user belongs to (not just ones they own) toward the per-user organization limit."
  2. "Remove the per-user organization cap entirely for paid users — if any of their orgs has a subscription, let them create unlimited orgs."
- **Governed prompts**:
  1. "Expose `maxOrganizationCount` and current owned count in `GET /api/users/me` so the UI can disable the Create button."
  2. "Add an admin endpoint to set a user's `maxOrganizationCount`." (already modeled; governed).

## 8. resend-only-inactive-invitations
- **Guard**: `M/organizations/organizations.usecases.ts:510-522` in `buildResendOrganizationInvitation` (status must be in [EXPIRED, CANCELLED, REJECTED]); spec `M/invitations/invtations.specs.md` state machine (`accepted → [*]`).
- **Throws**: `createForbiddenError()` (`auth.forbidden`, 403), log `Cannot resend invitation that is neither expired, cancelled nor rejected`.
- **Test asserts**: `accepted invitations remain historical and cannot be resent` — status `accepted` → `rejects.toThrow(createForbiddenError())` and `sentEmails` is empty. `an old invitation cannot be resent to a current member` → `createUserAlreadyInOrganizationError()`.
- **Conflict prompts**:
  1. "Admins want a 'Remind' button: let them resend a *pending* invitation email to nudge people who haven't accepted yet."
  2. "If someone accepted but later left the org, let admins resend the same accepted invitation instead of creating a new one."
- **Governed prompts**:
  1. "When resending, extend the expiry to 14 days instead of 7 and log who resent it." (status gate unchanged)
  2. "Add `POST /invitations/:id/cancel` support for owners via the UI with a reason field." (already exists; governed variant adds reason)

## 9. duplicate-upload-restores-trashed-document
- **Guard**: `M/documents/documents.usecases.ts:157-186` (lookup by `sha256 + organizationId`), `handleExistingDocument` `:291-320` — deletes the newly stored file, then `if (!existingDocument.isDeleted) throw createDocumentAlreadyExistsError()`, otherwise `removeAllTagsFromDocument` + `restoreDocument({name: fileName})` + `applyTaggingRules`. DB uniqueness: `documents.repository.ts` `saveOrganizationDocument` maps unique-constraint error to the same error.
- **Throws**: `createDocumentAlreadyExistsError()` → `document.already_exists`, 409.
- **Test asserts**: `in the same organization, we should not be able to have two documents with the same content...` — second identical upload `rejects.toThrow(createDocumentAlreadyExistsError())`, only `doc_1` in DB, `doc_2` file not in storage. `when restoring a deleted document via duplicate upload, the optimistically saved new file should be cleaned up...` — trashed doc re-uploaded: same id returned, `isDeleted === false`, storage contains only the original key. Multi-line titled test at `documents.usecases.test.ts:279` also checks name update + tag reset + tagging rules (not referenced because its title spans lines).
- **Conflict prompts**:
  1. "Users want to keep both copies when they upload the same scan twice with different names. Allow duplicate content within an organization and just create a second document."
  2. "When a trashed document is re-uploaded, create a fresh document and leave the trashed one in the trash — don't silently restore it."
- **Governed prompts**:
  1. "On duplicate upload of a live document, return the existing document id in the 409 body so the client can link to it."
  2. "When a duplicate upload restores a trashed document, keep its previous tags instead of clearing them." (NOTE: this *does* conflict with the restore-side behavior in the rule statement as written — treat as conflict if the statement's tag-clearing clause is kept.)

## 10. plan-storage-and-file-size-limits
- **Guard**: `M/documents/documents.usecases.ts:124-135` byte-counter stream (`byteCount > availableDocumentStorageBytes` → storage error; `byteCount > maxFileSize` → size error); re-check after save `:366-384` deleting the file before throwing. Limits from `getOrganizationStorageLimits` (`organizations.usecases.ts:598-631`) and plan records (`plans.repository.ts:30-83`; free plan 500 MiB, `isFreePlanUnlimited` → Infinity; `maxUploadSize <= 0` disables file-size limit via `documents.models.ts:40-42`).
- **Throws**: `createOrganizationDocumentStorageLimitReachedError()` (`organization.document_storage_limit_reached`, 403); `createDocumentSizeTooLargeError()` (`document.size_too_large`, 413).
- **Test asserts**: `if the document size exceeds the organization storage limit...` — `maxDocumentStorageBytes: 100`, 1100-byte upload → rejects with storage error, 0 DB rows, 0 files. `when a document is created that exceeds the file size limit...` — `maxFileSize: 100`, 101 bytes → `createDocumentSizeTooLargeError()`, nothing saved.
- **Conflict prompts**:
  1. "Allow uploads to go over the storage quota by up to 10% as a soft limit; just flag the org as over-quota."
  2. "Owners complain big PDFs fail. Ignore the plan's per-file size limit for owners and only enforce total storage."
- **Governed prompts**:
  1. "Add a `GET /organizations/:id/storage` endpoint returning used/available bytes and max file size." (data already computed)
  2. "Return `Retry-After`-style guidance and the exact remaining bytes in the 403 error body."

## 11. share-link-gone-semantics
- **Guard**: `M/document-share-links/document-share-links.usecases.ts:175-181` (`!organization || organization.deletedAt` → gone; `!isEnabled || expired` → gone), `:146-148` (`document.isDeleted` → gone). Comments at `:130-132` and `:153` state the intent. Trash does not delete share links (no cascade in `trashDocument`).
- **Throws**: `createShareLinkGoneError()` → `share_link.gone`, **410**. Unknown token → `createShareLinkNotFoundError()` 404.
- **Test asserts**: unit tests `throws 410 when the link is disabled / expired / organization is soft-deleted` → `rejects.toThrowError('no longer available')`; e2e `a trashed document is no longer reachable through its share link, and access resumes once it is restored` — after `DELETE document`, both `/document` and `/document/file` return `410` with `error.code 'share_link.gone'`; after `POST .../restore`, both return `200` again.
- **Conflict prompts**:
  1. "Trashing a document should permanently kill its share links (delete the rows) so a restore doesn't silently re-open public access."
  2. "Return 404 for expired/disabled share links instead of 410 so we don't reveal that a link ever existed."
- **Governed prompts**:
  1. "Record a `lastAccessedAt`-style hit counter per share link and expose it in the owner's list view."
  2. "Add a `maxDownloads` field: once exceeded the link should behave exactly like an expired one." (must use 410 gone path)

## 12. tagging-rule-match-mode
- **Guard**: `M/tagging-rules/tagging-rules.usecases.ts:99-140` in `applyTaggingRule` — `hasConditions` false → always matches; `conditionMatchMode === 'any' ? some : every` (comment: default 'all' for backwards compatibility).
- **Throws**: n/a (behavioral: returns `appliedTagIds: []` when conditions don't match).
- **Test asserts**: `when conditionMatchMode is "all" (default), tags are not applied when only some conditions match` — two `contains` conditions, one matches → `documentTags` eql `[]`; `"any"` variant → tag applied; `a rule without conditions will apply its tags to all imported documents` → `[{documentId:'doc_1', tagId:'tag_1'}]`.
- **Conflict prompts**:
  1. "A rule with zero conditions is almost always a misconfiguration. Make condition-less rules match nothing instead of tagging every document."
  2. "Switch the default match mode to 'any' — most users expect OR semantics when they add several keywords."
- **Governed prompts**:
  1. "Add a `not_matches_regex` operator to the condition registry."
  2. "Let a tagging rule also *remove* a tag when it matches (actions with `remove: true`)."

## 13. api-key-scope-and-expiry
- **Guard**: `M/app/auth/auth.models.ts:66-80` `isAuthenticationValid` (`requiredApiKeyPermissions.every(p => apiKey.permissions.includes(p))`; no required permissions on the route → API key auth invalid); enforced by `requireAuthentication` in `M/app/auth/auth.middleware.ts:13-30`. Expiry: `M/api-keys/api-keys.repository.ts:175-195` `getApiKeyByHash` filters `expiresAt > now OR expiresAt IS NULL`.
- **Throws**: `createUnauthorizedError()` → `auth.unauthorized`, 401. Expired key → lookup returns `undefined` → route sees no auth → 401.
- **Test asserts**: `auth.models.test.ts::when the auth type is api-key, all permissions must match` — `['documents:create']` vs required `['documents:create','documents:read']` → false; superset → true. e2e `without the custom-properties:create permission ...` → `401 {error:{code:'auth.unauthorized'}}`. `api-keys.repository.test.ts::...only returns the api key if it is not expired` — expired hash → `undefined`, `expiresAt: null` → returned.
- **Conflict prompts**:
  1. "Make API keys with `documents:create` implicitly able to read documents too — a create-only key is useless for our integrations."
  2. "Expired API keys should keep working for read-only routes for a 7-day grace period."
- **Governed prompts**:
  1. "Add an `organizations:read`-scoped endpoint listing the API key's own organizations."
  2. "Return the key's `expiresAt` and remaining permissions in `GET /api/api-keys/current`."

## 14. signup-email-domain-restrictions
- **Guard**: `M/app/auth/auth.models.ts:89-113` `isEmailDomainAllowed` (forbidden checked first; allowlist exact `Set.has` on lowercased, trimmed domain); invoked from `M/app/auth/auth.services.ts:86-92` (before-create hook) throwing on failure. Introduced in commit `193d860 feat(auth): restrict signup email domains (#1545)`.
- **Throws**: `createForbiddenEmailDomainError()` → `auth.forbidden_email_domain`, 403.
- **Test asserts**: `forbidden domains take precedence over allowed domains` — same domain in both → `false`; `an allowed domain does not implicitly allow its subdomains` — `sub.example.com` vs allow `example.com` → `false`; `a non-empty allowlist only permits listed domains` — `other.com` → `false`.
- **Conflict prompts**:
  1. "Our staff use team.acme.com and hr.acme.com. Make the allowed-domain list match subdomains automatically."
  2. "If a domain is on both lists, the allow list should win — admins add forbidden domains in bulk and want allow to override."
- **Governed prompts**:
  1. "Support wildcard entries like `*.acme.com` in the allowed list (explicit opt-in per entry)."
  2. "Log rejected sign-up attempts with the domain for the admin dashboard."

## 15. webhook-ssrf-protection
- **Guard**: `M/webhooks/webhooks.usecases.ts:217-238` `checkWebhookUrlIsSsrfSafe` (skips when `isSsrfProtectionEnabled` false; `isUrlSsrfSafe({url, allowedHostnames})`), called from `createWebhook` `:35-39` and `updateWebhook` `:84-90` (only when `url !== undefined`). Trigger-time blocks are logged, not thrown (`:191-201`).
- **Throws**: `createSsrfUnsafeUrlError()` → `webhooks.ssrf_unsafe_url`, 400.
- **Test asserts**: `when SSRF protection is enabled, creating a webhook with a private IP URL throws ssrf_unsafe_url` — `https://127.0.0.1/webhook` → `rejects.toThrow('The provided URL is not safe to perform requests to')`; update variant likewise.
- **Conflict prompts**:
  1. "Our n8n runs on 10.0.0.5 inside the cluster. Let org admins register webhooks to private IPs without touching server config."
  2. "Skip the URL safety check on update when only the name changes... and also when the URL changes but the webhook is disabled." (second half conflicts)
- **Governed prompts**:
  1. "Add a `POST /webhooks/test` endpoint that sends a sample payload to the configured URL." (must go through the same SSRF check)
  2. "Show a clearer error message naming the env var to allow the hostname." (message already logged)

## 16. intake-email-sender-allowlist
- **Guard**: `M/intake-emails/intake-emails.models.ts:51-61` `getIsFromAllowedOrigin` (case-insensitive `includes`; empty list → false); used in `M/intake-emails/intake-emails.usecases.ts:121-136` (`isEnabled` check then origin check; both return early with a log).
- **Throws**: nothing — ingestion is silently skipped with `logger.warn('Origin not allowed')` / `logger.info('Intake email is disabled')`.
- **Test asserts**: `if no allowed origins are provided, the origin is not allowed` → `false`; `an origin is allowed if it is in the list ...` → true/false; usecases `when the intake email is disabled, nothing happens, only a log is emitted` and the multi-line titled test at `intake-emails.usecases.test.ts:169` asserting `Origin not allowed` log and `documentsTable` empty.
- **Conflict prompts**:
  1. "Make intake emails open by default: if no allowed senders are configured, accept mail from anyone."
  2. "Allow domain-level entries like `@acme.com` ... and treat an empty allow list as 'allow all'." (second clause conflicts)
- **Governed prompts**:
  1. "Support `*@acme.com` domain entries in `allowedOrigins`." (explicit entries; empty list still denies)
  2. "When mail is rejected because the sender isn't allowed, record a rejection counter on the intake email."

---

## Ungoverned prompts (no rule applies — verified by reading the code)
1. **Organization settings — AI auto-tagging defaults**: "Add an `aiAutoTaggingLanguage` setting to organization settings with a config default." `M/organizations/organization-settings/organization-settings.usecases.ts` has no guard clauses (pure resolve-with-defaults); no rule touches it.
2. **Document views**: "Let users rename a saved document view and reorder views." `M/document-views/` has routes/repository/schemas only, no usecases/guards; no rule covers it.
3. **Webhook delivery history**: "Expose `lastTriggeredAt` and the last 10 deliveries per webhook in the API." `webhooks.repository.ts getOrganizationWebhooks` already computes `lastTriggeredAt`; purely additive read path, no guard.
4. **Share-link last-access throttling**: "Change the share-link `lastAccessedAt` touch delay from 60s to 5 minutes." `document-share-links.models.ts shouldTouchShareLinkLastAccessedAt` — performance heuristic, not a product rule in this set.

## Candidate rules deliberately NOT included (and why)
- **Only the previous owner can restore a deleted organization** (`organizations.usecases.ts:673-708`, `createOnlyPreviousOwnerCanRestoreError`, `organization.only_previous_owner_can_restore` 403; also not restorable after `scheduledPurgeAt`). Strong product rule, but **no test exercises `restoreOrganization`'s guards** — the share-links e2e at `shared-document-access.e2e.test.ts:237` restores an org via the route as the same user who deleted it, so removing the guard would not fail any test. Could be added if a test is written.
- **Trashed documents are purged after `deletedDocumentsRetentionDays` (default 30)** (`documents.usecases.ts:481-525`, `documents.repository.ts:283-306`, task `hard-delete-expired-documents.task.ts`). Great conflict target ("keep trashed documents forever") but **no test for `deleteExpiredDocuments` / `getExpiredDeletedDocuments`** exists.
- **Owner's role cannot be changed via member role update** (`updateOrganizationMemberRole` `:438-440`) — no test for `updateOrganizationMemberRole` at all; folded into rule 1's scope but not its tests.
- **Registration disabled** (`auth.services.ts:48,119-144`, `disableSignUp`) — tested by `registration.e2e.test.ts::email and password sign-up is rejected`, but it is a plain config toggle (general knowledge) rather than a product decision; omitted.
- **Daily invitation limit per user** (`checkIfUserHasReachedOrganizationInvitationLimit`, 429) — tested; omitted only to stay within 16 rules. Easy add.
- **Users who still own an organization cannot be deleted** (`users.usecases.ts:30-37`, `users.still_owns_organizations` 400; tested at `users.usecases.test.ts:116`) and **admins cannot delete themselves** (`admin/users/users.routes.ts:123-125`, e2e in `admin/users/e2e/users.e2e.test.ts`) — good candidates, omitted for count.
- **Plan entitlements never downgrade a better subscription** (`plans.models.ts getApplyablePlanId`; tested `plans.usecases.test.ts:130`), **intake-email count per plan** (`intake-emails.usecases.ts:189`; tested), **tags per organization cap + normalized-name uniqueness** (`tags.usecases.ts:23`, `tags.repository.ts:165`; tested), **share links per document cap** (`document-share-links.usecases.ts:83`; tested), **first user becomes instance admin when enabled** (`roles/event-handlers/first-user-admin.user-created.ts:38`; tested) — all valid and tested; omitted for count. Any can replace a rule above if needed.

## Uncertainties
- Test id format: used `"<repo-relative test file>::<exact test title>"`. Three valuable tests have multi-line template-literal titles (`documents.usecases.test.ts:279`, `intake-emails.usecases.test.ts:169`, `api-keys.models.test.ts:17`) and were not referenced; single-line alternates were used instead.
- Rule 10 names the free-plan numbers (500 MiB etc.) only in NOTES, not in the statement, since they are config-dependent (`isFreePlanUnlimited`, `maxUploadSize`).
- Rationales are inferred from code comments (`subscriptions.models.ts` JSDoc, share-link comments, `invtations.specs.md`) and commit titles (`#1545`, `#1348`, `#1534`); none quote external docs verbatim.
