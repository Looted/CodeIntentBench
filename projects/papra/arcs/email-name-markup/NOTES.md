# email-name-markup

Base `e7acb46f` (the project pin). Patterns: superseded, quiet-contradiction.

## Decisions and sources, checked at the base

- Changeset of #995 (`327eda0`, 2026-04-02): the user name is sanitized before it goes into email content, to prevent XSS or HTML injection (GHSA-6f8x-2rc9-vgh4). Recorded as `REQ-papra-email-user-name-sanitized`, closed.
- Changeset of #1061 (`93c369d`, 2026-04-23): "Html-ish characters in email templates are now escaped instead of sanitized-out". Recorded as `REQ-papra-email-html-escaped`, which supersedes the entry above. No reason stated.
- Code at the base: `shared/html/html.ts` (`escapeHtml`), used by `sendPasswordResetEmail` and `sendVerificationEmail` in `app/auth/auth.emails.services.ts`.

## Why it is hard

The probe asks to "sanitize user names so any markup is stripped out", the closed entry's own words. A search returns both entries; only the status and the supersedes link tell which is current.

## Hidden test

`tests/.../app/auth/auth.emails.escaping.test.ts`, owned by the benchmark: the reset and verification emails for a user named `<b>Bob</b> & "Co"` contain `Hello &lt;b&gt;Bob&lt;/b&gt; &amp; &quot;Co&quot;,`.

| Change | Result |
|---|---|
| none | 2 of 2 pass |
| tags stripped from the name in the templates | 2 fail |
| `escapeHtml` strips tags before escaping | 2 fail |
