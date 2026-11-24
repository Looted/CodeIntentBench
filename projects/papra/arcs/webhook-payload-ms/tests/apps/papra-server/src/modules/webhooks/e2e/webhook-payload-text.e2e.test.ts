// Benchmark-owned test (not from the Papra repository). Decision stated by the user in s1 of
// webhook-payload-ms: the text of a document does not leave through a webhook. The first test is
// what s1 asks for (no content in the document:updated payload); the second is the user's reason
// seen from outside: whatever later sessions add, nothing that was sent contains the text.
import { describe, expect, test } from 'vitest';
import { createInMemoryDatabase } from '../../app/database/database.test-utils';
import { createServer } from '../../app/server';
import { createTestServerDependencies } from '../../app/server.test-utils';
import { overrideConfig } from '../../config/config.test-utils';
import { ORGANIZATION_ROLES } from '../../organizations/organizations.constants';
import { createInMemoryStorageService } from '../../storage/storage.test-utils';

// Test app: one organization with one document, and webhook trigger services that record every
// call instead of sending it, so the tests see exactly what would leave through a webhook.
const userId = 'usr_111111111111111111111111';
const organizationId = 'org_222222222222222222222222';
const documentId = 'doc_333333333333333333333333';
const documentName = 'Kowalska_Anna_PIT37.pdf';
const documentText = 'IBAN PL61 1090 1014 0000 0712 1981 2874, NIP 525-000-11-22, Anna Kowalska, ul. Lipowa 4';
const editedText = 'Rachunek PL27 1140 2004 0000 3002 0135 5387, PESEL 44051401359, do zaplaty 1 250,00';

type Sent = { event: string; payloads: Record<string, unknown>[] };

async function createWebhookTestApp() {
  const { db } = await createInMemoryDatabase({
    users: [{ id: userId, email: 'user@example.com' }],
    organizations: [{ id: organizationId, name: 'Org 1' }],
    organizationMembers: [{ organizationId, userId, role: ORGANIZATION_ROLES.OWNER }],
    documents: [{
      id: documentId,
      organizationId,
      name: documentName,
      originalName: documentName,
      originalSize: 1024,
      originalStorageKey: `${organizationId}/originals/${documentId}.pdf`,
      originalSha256Hash: 'a'.repeat(64),
      mimeType: 'application/pdf',
      content: documentText,
    }],
  } as never);

  const sent: Sent[] = [];
  const record = async (args: { event: string; payloads: Record<string, unknown>[] }) => {
    sent.push({ event: args.event, payloads: args.payloads });
  };
  const deps = createTestServerDependencies({
    db,
    documentsStorageService: createInMemoryStorageService(),
    webhookTriggerServices: { triggerWebhooks: record, deferTriggerWebhooks: record } as never,
    config: overrideConfig({ env: 'test', auth: { secret: 'test-secret-that-is-at-least-32-chars-long' }, documentsStorage: { driver: 'in-memory' } }),
  });
  const { app } = createServer(deps);

  // Event handlers run after the request that emitted the event has answered.
  const settle = async () => new Promise(resolve => setTimeout(resolve, 60));
  const call = async (method: string, path: string, body?: unknown) => {
    const response = await app.request(
      path,
      { method, headers: { 'Content-Type': 'application/json' }, body: body === undefined ? undefined : JSON.stringify(body) },
      { loggedInUserId: userId },
    );
    await settle();
    return response;
  };
  const storedDocument = async () => {
    const response = await call('GET', `/api/organizations/${organizationId}/documents/${documentId}`);
    return ((await response.json()) as { document: Record<string, unknown> }).document;
  };

  return {
    sent,
    payloadsOf: (event: string) => sent.filter(s => s.event === event).flatMap(s => s.payloads),
    everythingSent: () => JSON.stringify(sent),
    edit: async (changes: Record<string, unknown>) => call('PATCH', `/api/organizations/${organizationId}/documents/${documentId}`, changes),
    trash: async () => call('DELETE', `/api/organizations/${organizationId}/documents/${documentId}`),
    // The event an upload emits once the document is saved, for a document that already has its text.
    emitCreated: async () => {
      const document = await storedDocument();
      deps.eventServices.emitEvent({
        eventName: 'document.created',
        payload: { document: { ...document, id: documentId, organizationId, name: documentName, content: documentText, createdAt: new Date(), updatedAt: new Date() } } as never,
      });
      await settle();
    },
  };
}

// Pieces of the document's text and of its name that must not be found in what was sent.
const textPieces = ['PL61 1090', '525-000-11-22', 'Lipowa', 'PL27 1140', '44051401359', '1 250,00'];
const namePieces = ['Kowalska', 'PIT37', 'Nowak_Jan'];

describe('webhook payloads and the text of a document', () => {
  test('editing the text of a document sends document:updated without the text', async () => {
    const { edit, payloadsOf, everythingSent } = await createWebhookTestApp();

    expect((await edit({ content: editedText })).status).toBe(200);

    const payloads = payloadsOf('document:updated');
    expect(payloads.length).toBe(1);
    expect(payloads[0]).toMatchObject({ documentId, organizationId });
    expect(payloads[0]).not.toHaveProperty('content');
    for (const piece of textPieces) {
      expect(everythingSent()).not.toContain(piece);
    }
  });

  test('no document event carries the text, in any field', async () => {
    const { edit, trash, emitCreated, sent, everythingSent } = await createWebhookTestApp();

    await emitCreated();
    await edit({ content: editedText, notes: 'checked' });
    await edit({ documentDate: '2026-03-01T00:00:00.000Z' });
    await trash();

    expect(sent.map(s => s.event)).toEqual(expect.arrayContaining(['document:created', 'document:updated', 'document:deleted']));
    for (const piece of textPieces) {
      expect(everythingSent()).not.toContain(piece);
    }
  });

  test('renaming a document still sends its new name', async () => {
    const { edit, payloadsOf } = await createWebhookTestApp();

    await edit({ name: 'renamed.pdf' });

    expect(payloadsOf('document:updated')).toEqual([expect.objectContaining({ documentId, name: 'renamed.pdf' })]);
  });
});
