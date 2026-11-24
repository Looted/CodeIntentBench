# Modeling spec for the Papra KB. Each clause is a verbatim fragment of the requirement's semantic_text.
# Fact kinds: ('b', subject, property, bool) | ('i', subject, property, int) | ('s', subject, property, str)
#             ('perm', actor, action, resource, decision)  -> permission_rule predicate, subject for constrains given separately

DOCS = 'Papra documentation site (apps/docs): '
PRS = 'papra-hq/papra merged pull requests: '
TESTS = 'Papra server test suite (apps/papra-server/src/modules): '

SUBJECTS = {
 'organization.soft_delete': ("Organization soft delete", DOCS + '05-architecture/organization-deletion-purge.mdx#soft-delete',
   "The first phase of deleting a Papra organization, run when its owner deletes it: members and pending invitations are removed, deletedAt, deletedBy and scheduledPurgeAt are recorded, and the organization row stays in the database. It is not the purge, which later removes the row and the documents."),
 'organization.restore': ("Organization restore", DOCS + '05-architecture/organization-deletion-purge.mdx#recovery',
   "Restoring a soft-deleted organization before its scheduledPurgeAt. Members removed by the deletion are not restored; the owner re-invites them."),
 'organization.purge_task': ("Organization purge task", DOCS + '05-architecture/organization-deletion-purge.mdx#purge-task',
   "The periodic background task that hard-deletes organizations whose scheduledPurgeAt has passed: it deletes each such organization's document files from storage, then deletes the organization row, and related records go with it by cascade. It is not the soft delete an owner performs, and it does not run before scheduledPurgeAt."),
 'organizations.organization': ("Organization", DOCS + '03-guides/07-roles-and-permissions.mdx#overview',
   "A Papra organization: the workspace that owns documents, tags, tagging rules and intake emails, with members holding the organization roles owner, admin or member. Organization roles are separate from the platform admin role."),
 'invitations.invitation': ("Organization invitation", 'Organization invitations specs: invtations.specs.md',
   "An invitation for a user to join an organization. Its status is pending, accepted, rejected, expired or cancelled, following the state machine in the invitations spec."),
 'document.stored_file': ("Stored document file", DOCS + '05-architecture/no-mutation-principle.mdx',
   "The file bytes Papra keeps in the storage backend for a document, exactly as they were added. It is not the document's database record, name, tags, custom property values or extracted content, which can change."),
 'document.storage_key': ("Document storage key", DOCS + '03-guides/09-storage-key-patterns.mdx',
   "The key (path) under which a document's file is stored in the storage backend. It is generated when the document is added, from the legacy id-based layout or a configured storage key pattern, and saved in the document's database record."),
 'document.deduplication': ("Document deduplication", DOCS + '05-architecture/document-deduplication.mdx',
   "The check run whenever a document is added to an organization (upload, intake email, folder ingestion, API): the SHA-256 hash of the file content is compared with the documents already in that organization."),
 'document.trash_restore': ("Restore of a trashed document by a duplicate upload", DOCS + '05-architecture/document-deduplication.mdx#how-it-works',
   "What happens when content with the same hash as a trashed document is added to the organization again: the trashed document is restored instead of a new document being added."),
 'document.extracted_content': ("Document extracted content", 'papra-hq/papra merged pull requests: #230',
   "The searchable text Papra extracts from a document's file and stores with the document record. It feeds search; it is not the stored file."),
 'document.content_extraction': ("Built-in content extraction", 'papra-hq/papra GitHub issues: #926',
   "Papra's built-in step that extracts searchable text from added documents (text layers and OCR)."),
 'document.upload': ("Document upload handling", 'papra-hq/papra merged pull requests: #472',
   "The server-side handling of a file being added, from the incoming request body to the storage backend, including the content hash, the byte count and the size limit."),
 'ocr.transcript': ("OCR transcript", 'papra-hq/papra GitHub issues: #353',
   "The text Papra recognises in a scanned PDF by OCR. It is stored as the document's extracted content; the PDF itself is not changed."),
 'tagging_rules.rule': ("Tagging rule", DOCS + '03-guides/06-tagging-rules.mdx',
   "An organization-level rule that applies its tags to documents whose fields match its conditions. Enabled rules run on newly added documents."),
 'tagging_rules.apply_to_existing': ("Apply tagging rule to existing documents", DOCS + '03-guides/06-tagging-rules.mdx#applying-rules-to-existing-documents',
   "The explicit \"Apply to existing documents\" action, and its API endpoint POST /api/organizations/:orgId/tagging-rules/:ruleId/apply, that runs one tagging rule over the documents already in the organization."),
 'search.query': ("Document search query", DOCS + '03-guides/08-advanced-search.mdx',
   "The text a user types in the documents search: plain terms, filters (name:, content:, tag:, created:, date:, has:) and the operators AND, OR, NOT with grouping."),
 'search.filter.created': ("created: search filter", DOCS + '03-guides/08-advanced-search.mdx#date-filter',
   "The search filter that compares a document's creation date with a date, using =, >, >=, < or <=."),
 'search.filter.has_tags': ("has:tags search filter", DOCS + '03-guides/08-advanced-search.mdx#existence-filter',
   "The existence filter that selects documents by whether they carry any tag."),
 'search.filter.name_content': ("name: and content: search filters", DOCS + '03-guides/08-advanced-search.mdx#filters',
   "The search filters that match a value against a document's name (name:) or its extracted content (content:)."),
 'search.url_state': ("Documents page search URL", 'papra-hq/papra GitHub issues: #743',
   "The URL of an organization's documents page, /organizations/:orgId/documents, and the search it carries."),
 'search.index': ("Full-text search index", 'papra-hq/papra merged pull requests: #683',
   "The full-text index over document names and content that search queries run against."),
 'tags.tag': ("Tag", 'papra-hq/papra GitHub issues: #222',
   "An organization tag, with a name and a colour, that can be applied to documents by hand or by tagging rules."),
 'intake_email.address': ("Intake email address", 'papra-hq/papra GitHub issues: #486',
   "An email address generated for an organization; documents attached to emails sent to it are added to that organization."),
 'intake_email.webhook': ("Intake email webhook", DOCS + '03-guides/01-intake-emails-with-owlrelay.mdx#setup',
   "The endpoint on the Papra server (/api/intake-emails/ingest) that the configured email relay calls with each received email."),
 'ingestion_folder.special_folders': ("Ingestion error and move folders", 'papra-hq/papra GitHub issues: #482',
   "The folders that folder ingestion moves files into: the error folder (INGESTION_FOLDER_ERROR_FOLDER_PATH) and the post-processing move folder (INGESTION_FOLDER_POST_PROCESSING_MOVE_FOLDER_PATH)."),
 'ingestion_folder.watcher': ("Ingestion folder watcher", 'papra-hq/papra GitHub issues: #482',
   "The file watcher that adds files appearing in the ingestion folder to an organization."),
 'auth.two_factor': ("Two-factor authentication", 'papra-hq/papra GitHub issues: #695',
   "A second authentication factor that an account can turn on in addition to its password."),
 'auth.first_user_admin': ("First user as platform admin", DOCS + '03-guides/07-roles-and-permissions.mdx#first-user-as-admin',
   "The self-hosting behaviour, controlled by AUTH_FIRST_USER_AS_ADMIN, that gives the platform admin role to the first user who registers. The platform admin role is instance-wide and separate from organization roles."),
 'custom_properties.property': ("Custom property", 'papra-hq/papra merged pull requests: #956',
   "A metadata field an organization defines for its documents (for example a text, date or select field with options); each document can carry a value for it."),
 'release.versioning': ("Release versioning", DOCS + '04-resources/04-versioning-and-tagging.mdx',
   "How the packages of the Papra monorepo and its Docker images are versioned and tagged."),
 'encryption.document_key': ("Document encryption key", DOCS + '03-guides/05-setup-document-encryption.mdx',
   "The per-document data encryption key that encrypts one document's file when document encryption is enabled."),
 'encryption.key_encryption_key': ("Key encryption key", DOCS + '03-guides/05-setup-document-encryption.mdx#multiple-keys',
   "A configured key (DOCUMENT_STORAGE_DOCUMENT_KEY_ENCRYPTION_KEYS, optionally versioned) that wraps the per-document encryption keys."),
 'webhook.events': ("Webhook events", 'papra-hq/papra GitHub issues: #428',
   "The document events an organization webhook can be called with."),
 # Subjects of the later decisions (later.json).
 'intake_email.webhook_secret': ("Intake email webhook secret", PRS + '#892',
   "The secret (INTAKE_EMAILS_WEBHOOK_SECRET) shared with the email relay and used to verify the signature of every request to the intake email webhook. It is a server setting, not a per-organization value."),
 'intake_email.allowed_origins': ("Intake email allowed origins", TESTS + 'intake-emails/intake-emails.models.test.ts',
   "The list of sender email addresses an intake email address accepts mail from. It belongs to one intake email address of one organization."),
 'document.storage_key_sync': ("Storage key synchronization", DOCS + '03-guides/09-storage-key-patterns.mdx#synchronizing-storage-keys-on-document-updates',
   "The optional behaviour (DOCUMENT_STORAGE_KEY_SYNC_ENABLED, pattern-based storage keys only) that re-evaluates the storage key pattern when a document changes and moves the stored file to the new key. It is not the storage migration script, which reprocesses existing documents in bulk."),
 'storage_pattern.organization_name': ("organization.name storage pattern expression", DOCS + '03-guides/09-storage-key-patterns.mdx#organization-names-and-renames',
   "The {{organization.name}} expression of a storage key pattern: the organization's current name, sanitized for filesystem use. It is not {{organization.id}}, which is unique."),
 'invitations.member_limit': ("Organization member limit", TESTS + 'organizations/organizations.usecases.test.ts',
   "The maximum number of members the organization's plan allows (maxOrganizationsMembersCount), as checked when an invitation is sent or resent. It is not the daily invitation limit of the inviting user."),
 'share_link.public_access': ("Public access through a share link", PRS + '#1348',
   "Unauthenticated access to one document through its share link: the document metadata, the file download and the password verification. It is not access by organization members, which share links do not affect."),
 'api_keys.key': ("API key", TESTS + 'api-keys/api-keys.repository.test.ts',
   "A long-lived credential a user creates for scripts and integrations, with an explicit set of granted permissions and an optional expiry date."),
 'organizations.member_removal': ("Removal of an organization member", TESTS + 'organizations/organizations.models.test.ts',
   "Removing a member from an organization, by another member or by themselves. It is not the deletion of the organization."),
 'organizations.user_cap': ("Per-user organization cap", TESTS + 'organizations/organizations.usecases.test.ts',
   "The maximum number of organizations one user may own (MAX_ORGANIZATION_COUNT_PER_USER, or the value set on the user). It is not the member limit of an organization."),
 'plans.upload_limits': ("Plan upload limits", TESTS + 'documents/documents.usecases.test.ts',
   "The limits of an organization's plan that are checked when a document is added: the maximum size of one file and the total storage quota."),
 'auth.signup_email_domains': ("Sign-up email domain restrictions", PRS + '#1545',
   "The instance settings that restrict which email domains may register: the allowed list (AUTH_ALLOWED_EMAIL_DOMAINS) and the forbidden list."),
 'webhook.url_ssrf_protection': ("Webhook URL SSRF protection", PRS + '#993',
   "The validation of an organization webhook's URL against private, loopback and reserved addresses (WEBHOOK_SSRF_PROTECTION_ENABLED), with an instance allow list of trusted hostnames (WEBHOOK_URL_ALLOWED_HOSTNAMES)."),
}

S = 'search.query'
SPEC = {
 'REQ-AUTO-198A6A47509791DF': [
   ('The ingestion error folder and post-processing move folder accept absolute paths (INGESTION_FOLDER_ERROR_FOLDER_PATH, INGESTION_FOLDER_POST_PROCESSING_MOVE_FOLDER_PATH)', ('b','ingestion_folder.special_folders','accept_absolute_paths',True)),
   ('the watcher must not ingest files under such a folder', ('b','ingestion_folder.watcher','ingests_files_under_error_or_move_folder',False)),
 ],
 'REQ-AUTO-E2E14D03456F8986': [
   ('Each tagging rule chooses whether all of its conditions must match (AND) or any condition may match (OR)', ('s','tagging_rules.rule','condition_match_modes','all_or_any')),
   ('nested condition groups are not supported', ('b','tagging_rules.rule','supports_nested_condition_groups',False)),
 ],
 'REQ-a-document-s-extracted-searchable-content--7CD26FB8': [
   ("A document's extracted searchable content is shown on the document page", ('b','document.extracted_content','shown_on_document_page',True)),
   ('can be viewed and edited by the user', ('b','document.extracted_content','editable_by_user',True)),
 ],
 'REQ-a-document-s-storage-key-is-generated-at-u-4715C9F2': [
   ("A document's storage key is generated at upload time and persisted with the document", ('b','document.storage_key','persisted_with_document',True)),
   ('changing the pattern configuration never changes the storage key of an existing document', ('b','document.storage_key','changes_when_pattern_changes',False)),
 ],
 'REQ-a-pending-invitation-can-be-cancelled-by-a-FE4C0162': [
   ('A pending invitation can be cancelled by a privileged member of the organization', ('perm','privileged_member','cancel','pending_invitation','allow','invitations.invitation')),
   ('accepted or rejected by its recipient', ('perm','invitation_recipient','accept_or_reject','pending_invitation','allow','invitations.invitation')),
 ],
 'REQ-a-plain-search-term-matches-document-names-9B6CFF9C': [
   ('A plain search term matches document names and content (name:term OR content:term)', ('s',S,'plain_term_matches','name_or_content')),
   ('filters such as tag:, name:, content: and created: can be combined with it', ('b',S,'plain_term_combines_with_filters',True)),
 ],
 'REQ-a-soft-deleted-organization-can-be-restore-09031B40': [
   ('A soft-deleted organization can be restored before scheduledPurgeAt', ('b','organization.restore','allowed_before_scheduled_purge_at',True)),
   ('only by the user who deleted it', ('s','organization.restore','allowed_actor','deleting_user')),
   ('after that date recovery is refused even if the purge has not run yet', ('b','organization.restore','allowed_after_scheduled_purge_at',False)),
 ],
 'REQ-a-tagging-rule-applies-only-to-documents-u-C9F8BBF7': [
   ('A tagging rule applies only to documents uploaded after the rule is created', ('b','tagging_rules.rule','applies_automatically_to_existing_documents',False)),
   ('applying it to existing documents is a separate explicit action ("Apply to existing documents")', ('b','tagging_rules.apply_to_existing','explicit_user_action',True)),
 ],
 'REQ-accounts-can-enable-two-factor-authenticat-63D00769': [
   ('Accounts can enable two-factor authentication', ('b','auth.two_factor','available_to_accounts',True)),
 ],
 'REQ-an-invalid-date-in-a-created-filter-is-ign-800EF0B8': [
   ('An invalid date in a created: filter is ignored rather than failing the whole search query', ('s','search.filter.created','invalid_date_handling','ignored')),
 ],
 'REQ-applying-a-tagging-rule-to-existing-docume-C1D75FEF': [
   ('Applying a tagging rule to existing documents enqueues a background task that processes the documents in batches', ('s','tagging_rules.apply_to_existing','execution','background_task_in_batches')),
   ('the API endpoint returns 202 Accepted with the task id immediately', ('i','tagging_rules.apply_to_existing','api_response_status',202)),
 ],
 'REQ-built-in-content-extraction-can-be-turned--66925D7B': [
   ('Built-in content extraction can be turned off with DOCUMENTS_CONTENT_EXTRACTION_ENABLED=false', ('b','document.content_extraction','can_be_disabled',True)),
   ('for self-hosters who run an external extraction pipeline and write the content back through the API', ('b','document.extracted_content','writable_through_api',True)),
 ],
 'REQ-deleting-an-organization-is-a-soft-delete--58DE105C': [
   ('Deleting an organization is a soft delete: members and pending invitations are removed', ('b','organization.soft_delete','removes_members_and_pending_invitations',True)),
   ('deletedAt and deletedBy are recorded', ('b','organization.soft_delete','records_deleted_at_and_deleted_by',True)),
   ('a purge is scheduled 30 days later (scheduledPurgeAt)', ('i','organization.soft_delete','purge_delay_days',30)),
   ('the organization row stays until the purge', ('b','organization.soft_delete','keeps_organization_row',True)),
 ],
 'REQ-documents-are-deduplicated-per-organizatio-7DDB2737': [
   ('Documents are deduplicated per organization by the SHA-256 hash of their content', ('s','document.deduplication','scope_and_key','organization_sha256_content_hash')),
   ('uploading content that already exists in the organization is rejected', ('b','document.deduplication','rejects_existing_content',True)),
 ],
 'REQ-documents-are-never-mutated-after-upload-n-409E8212': [
   ('Documents are never mutated after upload: no format conversion, no metadata injection into the file, no OCR overlay on scanned PDFs', ('b','document.stored_file','mutated_after_upload',False)),
   ('a user retrieves exactly what was uploaded', ('b','document.stored_file','retrieved_byte_identical',True)),
 ],
 'REQ-documents-are-stored-as-ingested-with-no-m-73A751A1': [
   ('Documents are stored as ingested, with no modifications and no overlaid data (write-once storage)', ('b','document.stored_file','write_once',True)),
 ],
 'REQ-expired-cancelled-or-rejected-invitations--CDCCD352': [
   ('Expired, cancelled or rejected invitations can be resent by a privileged member, which returns them to pending', ('perm','privileged_member','resend','closed_invitation','allow','invitations.invitation')),
   ('accepted invitations are final', ('b','invitations.invitation','accepted_is_final',True)),
 ],
 'REQ-file-uploads-are-handled-as-streams-end-to-F1A1D5B6': [
   ('File uploads are handled as streams end to end', ('b','document.upload','streamed_end_to_end',True)),
   ('the content hash and byte count are computed while streaming', ('b','document.upload','hash_and_size_computed_while_streaming',True)),
   ('size limits are enforced during the stream, never after buffering the whole file', ('b','document.upload','buffers_whole_file',False)),
 ],
 'REQ-files-matching-ingestion-folder-ignored-pa-9B49E534': [
   ('Files matching INGESTION_FOLDER_IGNORED_PATTERNS are skipped by folder ingestion', ('b','ingestion_folder.watcher','skips_ignored_patterns',True)),
   ('Synology metadata files (@SynoEAStream, @SynoResource) are in the default ignore list', ('b','ingestion_folder.watcher','ignores_synology_metadata_by_default',True)),
 ],
 'REQ-inbound-intake-email-webhooks-are-signed-w-27EFD88D': [
   ('Inbound intake email webhooks are signed with INTAKE_EMAILS_WEBHOOK_SECRET', ('b','intake_email.webhook','requests_signed_with_secret',True)),
   ('so the server can authenticate that an email comes from the configured relay', ('b','intake_email.webhook','authenticates_relay',True)),
 ],
 'REQ-intake-email-addresses-can-follow-a-config-6227A38D': [
   ('Intake email addresses can follow a configured naming pattern instead of the randomly generated names', ('b','intake_email.address','pattern_naming_available',True)),
   ('an instance-level setting, INTAKE_EMAILS_USERNAME_DRIVER=pattern', ('s','intake_email.address','naming_setting_scope','instance')),
 ],
 'REQ-invitations-are-valid-for-7-days-configura-E15FD078': [
   ('Invitations are valid for 7 days (configurable)', ('i','invitations.invitation','default_validity_days',7)),
   ('then expire', ('b','invitations.invitation','expires_after_validity',True)),
 ],
 'REQ-ocr-text-extracted-from-scanned-pdfs-is-us-8C007452': [
   ('OCR text extracted from scanned PDFs is used for search indexing only', ('s','ocr.transcript','use','search_indexing_only')),
   ('the original PDF is not modified to embed the transcript', ('b','document.stored_file','ocr_transcript_embedded',False)),
 ],
 'REQ-on-self-hosted-instances-the-first-registe-1C953705': [
   ('On self-hosted instances the first registered user receives the platform admin role (AUTH_FIRST_USER_AS_ADMIN, enabled by default)', ('b','auth.first_user_admin','enabled_by_default',True)),
   ('at most one user receives it even when several register at the same time', ('i','auth.first_user_admin','max_users_granted',1)),
 ],
 'REQ-only-privileged-members-of-an-organization-FCDD9696': [
   ('Only privileged members of an organization (owner or admin) can invite users to join it', ('s','invitations.invitation','allowed_inviter_roles','owner_or_admin')),
 ],
 'REQ-only-the-file-content-is-hashed-for-dedupl-63EA565E': [
   ('Only the file content is hashed for deduplication', ('s','document.deduplication','hashed_input','file_content_only')),
   ('file names, upload dates and metadata never affect whether two documents are duplicates', ('b','document.deduplication','metadata_affects_match',False)),
 ],
 'REQ-only-the-organization-owner-can-delete-an--8207027D': [
   ('Only the organization owner can delete an organization', ('perm','organization_owner','delete','organization','allow','organizations.organization')),
   ('admins and members cannot', ('perm','organization_admin_or_member','delete','organization','deny','organizations.organization')),
 ],
 'REQ-organizations-define-custom-properties-met-1471E51F': [
   ('Organizations define custom properties (metadata fields, including select options)', ('b','custom_properties.property','defined_per_organization',True)),
   ('documents carry per-document values for them', ('b','custom_properties.property','valued_per_document',True)),
   ('the number of properties per organization is limited by configuration', ('b','custom_properties.property','count_per_organization_limited_by_config',True)),
 ],
 'REQ-per-document-expiry-dates-are-not-a-separa-495A8BDE': [
   ('Per-document expiry dates are not a separate feature', ('b','custom_properties.property','dedicated_expiry_date_feature',False)),
   ('custom properties are the intended way to record such dates', ('b','custom_properties.property','records_expiry_dates',True)),
 ],
 'REQ-search-queries-are-parsed-by-the-papra-sea-4463E6DB': [
   ('Search queries are parsed by the @papra/search-parser package into structured expressions (filters, AND/OR/NOT)', ('s',S,'parser','@papra/search-parser')),
   ('that a query builder turns into SQL', ('s',S,'execution','query_builder_sql')),
 ],
 'REQ-stored-files-are-keyed-by-document-id-not--DCCF2C2E': [
   ("Stored files are keyed by document id, not by the document's file name", ('s','document.storage_key','default_key_basis','document_id')),
   ('the default storage layout is {{organization.id}}/originals/{{document.id}}', ('s','document.storage_key','default_layout','{{organization.id}}/originals/{{document.id}}')),
 ],
 'REQ-tag-name-and-colour-are-validated-server-s-1890EF60': [
   ('Tag name and colour are validated server-side in the API schema', ('b','tags.tag','validated_by_api_schema',True)),
   ('client-side form validation is a convenience, not the guard', ('b','tags.tag','client_validation_is_guard',False)),
 ],
 'REQ-tag-names-are-unique-per-organization-rega-7B5F6F2D': [
   ('Tag names are unique per organization regardless of letter case', ('b','tags.tag','name_unique_case_insensitive_per_organization',True)),
   ('a lowercase normalized name carries the unique constraint', ('s','tags.tag','unique_constraint_column','normalized_lowercase_name')),
   ('a duplicate is reported as tag-already-exists', ('s','tags.tag','duplicate_error_code','tag-already-exists')),
 ],
 'REQ-the-application-package-is-versioned-with--B1FD7959': [
   ('The application package is versioned with CalVer (YY.M.N)', ('s','release.versioning','application_scheme','calver_yy_m_n')),
   ('library packages with SemVer', ('s','release.versioning','library_scheme','semver')),
   ('Docker image tags follow the application version', ('b','release.versioning','docker_tag_matches_application_version',True)),
 ],
 'REQ-the-documents-page-keeps-the-current-searc-F4067AA3': [
   ('The documents page keeps the current search in the URL as the query parameter (/organizations/:orgId/documents?query=...)', ('s','search.url_state','query_parameter','query')),
   ('so searches can be bookmarked and shared', ('b','search.url_state','bookmarkable',True)),
 ],
 'REQ-the-full-text-search-index-is-maintained-b-1B169822': [
   ('The full-text search index is maintained by event handlers on document created, updated, trashed and restored events', ('s','search.index','maintained_by','document_event_handlers')),
   ('not by database triggers', ('b','search.index','maintained_by_database_triggers',False)),
 ],
 'REQ-the-has-tags-filter-selects-documents-with-7EF848DC': [
   ('The has:tags filter selects documents with at least one tag', ('i','search.filter.has_tags','min_tags_matched',1)),
   ('its negation (-has:tags or NOT has:tags) selects untagged documents', ('b','search.filter.has_tags','negation_selects_untagged',True)),
 ],
 'REQ-the-name-and-content-search-filters-use-co-30FF0726': [
   ('The name: and content: search filters use contains matching, not exact equality', ('s','search.filter.name_content','match_mode','contains')),
 ],
 'REQ-the-purge-task-deletes-an-expired-organiza-19AD72ED': [
   ("The purge task deletes an expired organization's documents from storage in batches", ('b','organization.purge_task','deletes_documents_in_batches',True)),
   ('continues past individual file deletion failures, logging them instead of aborting the purge', ('b','organization.purge_task','aborts_on_file_deletion_failure',False)),
 ],
 'REQ-uploading-content-identical-to-a-trashed-d-F0111402': [
   ('Uploading content identical to a trashed document restores that document instead of creating a new copy', ('b','document.trash_restore','restores_instead_of_new_copy',True)),
   ('its metadata is updated to match the new upload', ('b','document.trash_restore','metadata_updated_from_upload',True)),
 ],
 'REQ-webhooks-emit-document-updated-document-ta-FB361BD1': [
   ('Webhooks emit document:updated, document:tag:added and document:tag:removed events in addition to creation', ('s','webhook.events','post_creation_events','document:updated,document:tag:added,document:tag:removed')),
   ('so tag changes made after upload can trigger automations', ('b','webhook.events','tag_changes_trigger_webhooks',True)),
 ],
 'REQ-when-a-generated-storage-key-collides-with-D635AF56': [
   ('When a generated storage key collides with an existing file, the new file gets a suffix on its name', ('s','document.storage_key','collision_resolution','suffix_new_file')),
   ('existing files are never overwritten', ('b','document.storage_key','overwrites_existing_file',False)),
   ('existing documents keep their old paths when the pattern changes', ('b','document.storage_key','existing_documents_keep_path_on_pattern_change',True)),
 ],
 'REQ-when-a-trashed-document-is-restored-by-a-d-F5E2FEA1': [
   ("When a trashed document is restored by a duplicate upload, its name is set to the new file's name", ('b','document.trash_restore','name_set_from_upload',True)),
   ('its pre-existing tags are removed', ('b','document.trash_restore','keeps_previous_tags',False)),
   ('the tagging rules are applied to the restored document', ('b','document.trash_restore','applies_tagging_rules',True)),
 ],
 'REQ-when-several-versioned-key-encryption-keys-2FAB9215': [
   ('When several versioned key encryption keys are configured, the highest version encrypts new documents', ('s','encryption.key_encryption_key','key_for_new_documents','highest_version')),
   ('every configured key can still decrypt existing documents', ('b','encryption.key_encryption_key','all_configured_keys_decrypt',True)),
 ],
 'REQ-with-encryption-enabled-each-document-is-e-3A4DEA2F': [
   ('With encryption enabled each document is encrypted with its own random 256-bit key (AES-256-GCM)', ('s','encryption.document_key','algorithm_per_document','aes-256-gcm_random_256_bit')),
   ('that key is wrapped with the configured key encryption key and stored in the database, separately from the encrypted file', ('b','encryption.document_key','wrapped_and_stored_in_database',True)),
 ],
}

# Later decisions (later.json), in the order they are written: a requirement that supersedes another comes after it.
WS_, SK, SY, ON = 'intake_email.webhook_secret', 'document.storage_key', 'document.storage_key_sync', 'storage_pattern.organization_name'
INV, ML, SL, RV = 'invitations.invitation', 'invitations.member_limit', 'share_link.public_access', 'release.versioning'
ORG, DEL, AK, ED = 'organizations.organization', 'organization.soft_delete', 'api_keys.key', 'auth.signup_email_domains'
SPEC.update({
 'REQ-papra-intake-webhook-secret-length': [
   ('The intake email webhook secret (INTAKE_EMAILS_WEBHOOK_SECRET) must be between 16 and 128 characters', ('s',WS_,'length_range','16_to_128_characters')),
   ('a default value, please-change-me, stays in place and itself satisfies the rule', ('b',WS_,'has_default_value',True)),
 ],
 'REQ-papra-intake-webhook-secret-required': [
   ('The intake email webhook secret (INTAKE_EMAILS_WEBHOOK_SECRET) has no default value', ('s',WS_,'default_value','none')),
   ('when intake emails are enabled the server refuses to start without it', ('b',WS_,'required_at_startup_when_intake_emails_enabled',True)),
   ('the ingest endpoint rejects a request when no secret is configured', ('b','intake_email.webhook','accepts_requests_without_configured_secret',False)),
   ('a secret that is set must be between 16 and 128 characters', ('s',WS_,'length_range_when_set','16_to_128_characters')),
 ],
 'REQ-papra-storage-key-persisted-sync-optional': [
   ("A document's storage key is generated at upload time and persisted with the document", ('b',SK,'persisted_with_document',True)),
   ('by default changing the pattern configuration only affects newly uploaded documents', ('s',SK,'pattern_change_scope_by_default','new_uploads_only')),
   ('existing documents keep their storage keys unless synchronization is enabled or they are explicitly migrated', ('s',SK,'existing_key_changes_only_by','synchronization_or_explicit_migration')),
 ],
 'REQ-papra-storage-key-sync-on-document-update': [
   ('Storage key synchronization is optional and off by default (DOCUMENT_STORAGE_KEY_SYNC_ENABLED, with pattern-based storage keys)', ('b',SY,'enabled_by_default',False)),
   ("when it is enabled, a change of a document's name or document date re-evaluates the pattern and moves the stored file to the new key", ('s',SY,'triggered_by','document_name_or_document_date_change')),
   ('enabling it does not move existing files by itself', ('b',SY,'moves_existing_files_when_enabled',False)),
   ('a failed copy or database update keeps the original file', ('b',SY,'failed_move_keeps_original_file',True)),
 ],
 'REQ-papra-storage-pattern-organization-name': [
   ('Storage key patterns support {{organization.name}}, the current organization name sanitized for safe filesystem use', ('b',ON,'available_as_expression',True)),
   ('organization names are not unique, so a pattern that uses it should also include {{organization.id}} to keep folders distinct', ('b',ON,'unique_per_instance',False)),
 ],
 'REQ-papra-organization-rename-keeps-storage-keys': [
   ('Renaming an organization does not move its existing documents, even when storage-key synchronization is enabled', ('b',SK,'changes_when_organization_renamed',False)),
   ('their persisted keys remain usable', ('b',SK,'usable_after_organization_rename',True)),
   ('new uploads use the current organization name', ('s',ON,'value_for_new_uploads','current_name')),
   ('with synchronization enabled a later document name or document date change re-evaluates the entire pattern and uses the current organization name too', ('s',SY,'organization_name_used_on_resync','current_name')),
 ],
 'REQ-papra-former-members-can-be-reinvited': [
   ('A user who left or was removed from an organization can be invited again', ('b',INV,'former_member_can_be_reinvited',True)),
   ('only a current membership or a pending invitation blocks a new invitation', ('s',INV,'new_invitation_blocked_by','current_membership_or_pending_invitation')),
   ('accepted, expired, cancelled and rejected invitations do not', ('b',INV,'closed_invitations_block_new_invitation',False)),
   ('pending invitations past their expiry date are marked expired before the checks, so they stop consuming organization capacity', ('b',ML,'counts_stale_pending_invitations',False)),
 ],
 'REQ-papra-share-links-of-deleted-organizations': [
   ("Public access to a document share link (document metadata, file download and password verification) stops with 410 Gone as soon as the link's organization is soft-deleted", ('i',SL,'status_when_organization_soft_deleted',410)),
   ('resumes automatically if the organization is restored during the grace period', ('b',SL,'resumes_when_organization_restored',True)),
 ],
 'REQ-papra-application-versioning-year-based': [
   ('The application package (@papra/app) is versioned YY.MINOR.PATCH along a single release line', ('s',RV,'application_format','yy_minor_patch')),
   ('older YY.MINOR versions receive no maintenance or security patches', ('b',RV,'patches_older_minor_versions',False)),
   ('library packages follow SemVer', ('s',RV,'library_versioning','semver')),
   ('Docker images use the same version as the application package', ('b',RV,'docker_image_version_matches_application',True)),
 ],
 'REQ-papra-member-limit-counts-pending-invitations': [
   ("An organization's plan sets a maximum number of members", ('b',ML,'set_by_plan',True)),
   ('pending invitations count toward it', ('b',ML,'counts_pending_invitations',True)),
   ('a new invitation is refused when current members plus pending invitations already reach the plan limit', ('b',ML,'new_invitation_refused_at_limit',True)),
 ],
 # The 16 rules of the v1 rule layer, statements unchanged.
 'REQ-papra-active-subscription-blocks-deletion': [
   ('An organization with a live paid subscription (active, trialing, past due or unpaid, and not scheduled to cancel) cannot be deleted', ('b',DEL,'allowed_with_live_subscription',False)),
   ('the owner must cancel the subscription first', ('b',DEL,'requires_subscription_cancelled_first',True)),
   ('Organizations whose subscription is canceled, incomplete, or set to cancel at period end can be deleted', ('b',DEL,'allowed_with_ended_or_ending_subscription',True)),
 ],
 'REQ-papra-api-key-scope-and-expiry': [
   ('An API key can only call routes whose required permissions are all explicitly granted to the key', ('s',AK,'route_access_requires','all_required_permissions_granted')),
   ('a key missing any one of them is unauthorized', ('b',AK,'authorized_with_missing_permission',False)),
   ('A key past its expiry date is treated as if it did not exist', ('b',AK,'authenticates_after_expiry',False)),
   ('a key with no expiry never expires', ('b',AK,'expires_without_expiry_date',False)),
 ],
 'REQ-papra-duplicate-upload-restores-trashed-document': [
   ('Within an organization a file with identical content is stored only once', ('b','document.deduplication','identical_content_stored_once_per_organization',True)),
   ('Uploading a duplicate of a live document is rejected with a conflict', ('s','document.deduplication','duplicate_of_live_document','rejected_with_conflict')),
   ('uploading a duplicate of a document that sits in the trash restores that document in place (new name, previous tags cleared, tagging rules re-applied) instead of creating a second record', ('b','document.trash_restore','restores_in_place_with_new_name_cleared_tags_and_rules',True)),
 ],
 'REQ-papra-intake-email-sender-allowlist': [
   ('An intake email address only ingests attachments from senders explicitly listed in its allowed origins (compared case-insensitively)', ('s','intake_email.allowed_origins','accepted_senders','listed_origins_only_case_insensitive')),
   ('An intake email with an empty allow list accepts nothing', ('b','intake_email.allowed_origins','empty_list_accepts_mail',False)),
   ('a disabled intake email ignores all mail', ('b','intake_email.address','disabled_address_ingests_mail',False)),
 ],
 'REQ-papra-invite-cannot-create-owner': [
   ('An organization has exactly one owner, the person who created it', ('i',ORG,'owner_count',1)),
   ('Invitations and role changes can only grant the admin or member role', ('s',ORG,'assignable_roles','admin_or_member')),
   ('nobody can be invited or promoted as owner', ('perm','anyone','invite_or_promote_as_owner','organization_member','deny',ORG)),
 ],
 'REQ-papra-member-cap-counts-pending-invitations': [
   ("An organization's plan sets a maximum number of members", ('b',ML,'set_by_plan',True)),
   ('Pending invitations count toward that maximum', ('b',ML,'pending_invitations_count_toward_maximum',True)),
   ('a new invitation (or a resend) is refused when current members plus pending invitations already reach the plan limit', ('b',ML,'invitation_or_resend_refused_at_limit',True)),
 ],
 'REQ-papra-only-owner-deletes-organization': [
   ('Only the organization owner can delete an organization', ('perm','organization_owner','delete','organization','allow',ORG)),
   ('Admins and members cannot, even though admins can manage everything else', ('perm','admins_and_members','delete','organization','deny',ORG)),
 ],
 'REQ-papra-only-owners-and-admins-invite': [
   ("Only an organization's owner or admins can invite new members or resend an invitation", ('s',INV,'roles_allowed_to_invite_or_resend','owner_or_admin')),
   ('Regular members cannot send invitations', ('perm','regular_member','send','invitation','deny',INV)),
   ('non-members are rejected outright', ('perm','non_member','send','invitation','deny',INV)),
 ],
 'REQ-papra-owner-cannot-be-removed': [
   ('Only owners and admins can remove members from an organization', ('s','organizations.member_removal','allowed_roles','owner_or_admin')),
   ('the owner can never be removed by anyone, including themselves', ('b','organizations.member_removal','owner_removable',False)),
 ],
 'REQ-papra-plan-storage-and-file-size-limits': [
   ("Uploads are bounded by the organization's plan: a file larger than the plan's maximum file size is rejected", ('b','plans.upload_limits','rejects_file_over_max_file_size',True)),
   ("a file that would push total stored bytes past the plan's storage quota is rejected", ('b','plans.upload_limits','rejects_upload_over_storage_quota',True)),
   ('In both cases nothing is persisted (no database row, no stored file)', ('b','plans.upload_limits','persists_anything_on_rejection',False)),
 ],
 'REQ-papra-resend-only-inactive-invitations': [
   ('An invitation can be resent only when it is expired, cancelled or rejected', ('s',INV,'resendable_statuses','expired_cancelled_rejected')),
   ('Pending invitations cannot be resent', ('b',INV,'pending_resendable',False)),
   ('accepted invitations are historical records that can never be resent', ('b',INV,'accepted_resendable',False)),
 ],
 'REQ-papra-share-link-gone-semantics': [
   ('A public share link answers 410 Gone (not 404) when the link is disabled or expired, when its document is in the trash, or when its organization is soft-deleted', ('i',SL,'status_when_unavailable',410)),
   ('The link itself is never deleted on trash', ('b',SL,'link_deleted_when_document_trashed',False)),
   ('access resumes automatically once the document or organization is restored', ('b',SL,'resumes_when_document_or_organization_restored',True)),
 ],
 'REQ-papra-signup-email-domain-restrictions': [
   ('When an allowed-domain list is configured, only emails whose domain is exactly in the list may sign up', ('s',ED,'allowlist_match','exact_domain')),
   ('subdomains are not implicitly allowed', ('b',ED,'allowlist_includes_subdomains',False)),
   ('A domain on the forbidden list is always rejected, even if it also appears on the allowed list', ('s',ED,'precedence','forbidden_over_allowed')),
   ('Matching ignores case', ('b',ED,'case_sensitive',False)),
 ],
 'REQ-papra-tagging-rule-match-mode': [
   ('A tagging rule applies its tags only when its conditions match according to its match mode: "all" (the default) requires every condition to match', ('s','tagging_rules.rule','default_condition_match_mode','all')),
   ('"any" requires at least one', ('i','tagging_rules.rule','any_mode_min_matching_conditions',1)),
   ('A rule with no conditions always matches and tags every incoming document', ('b','tagging_rules.rule','conditionless_rule_matches_every_document',True)),
 ],
 'REQ-papra-user-owned-organization-cap': [
   ('A user can own at most a configured number of organizations (default 10)', ('i','organizations.user_cap','default_max_owned_organizations',10)),
   ('Only organizations the user owns count toward the cap', ('s','organizations.user_cap','counted_organizations','owned_only')),
   ('an instance admin can raise or lower the cap for an individual user', ('b','organizations.user_cap','per_user_override_by_instance_admin',True)),
 ],
 'REQ-papra-webhook-ssrf-protection': [
   ('When SSRF protection is enabled, a webhook URL pointing at a private, loopback or otherwise unsafe address is rejected at creation and at update', ('b','webhook.url_ssrf_protection','rejects_unsafe_url_on_create_and_update',True)),
   ("unless its hostname is on the instance's explicit allow list", ('b','webhook.url_ssrf_protection','allowlisted_hostnames_exempt',True)),
 ],
})

# Decisions harvested from the release changelogs (bulk.py), applied after the ones above.
from bulk import BULK_SPEC, BULK_SUBJECTS
SUBJECTS.update(BULK_SUBJECTS)
SPEC.update(BULK_SPEC)
