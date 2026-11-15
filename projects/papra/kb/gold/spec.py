# Modeling spec for the Papra KB. Each clause is a verbatim fragment of the requirement's semantic_text.
# Fact kinds: ('b', subject, property, bool) | ('i', subject, property, int) | ('s', subject, property, str)
#             ('perm', actor, action, resource, decision)  -> permission_rule predicate, subject for constrains given separately

DOCS = 'Papra documentation site (apps/docs): '

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
