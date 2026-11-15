// Benchmark-owned test (not from the Papra repository). An uploaded image is stored and served byte for
// byte as it was uploaded, embedded metadata included.
import type { Document } from '../documents.types';
import { Buffer } from 'node:buffer';
import { createHash } from 'node:crypto';
import { describe, expect, test } from 'vitest';
import { createInMemoryDatabase } from '../../app/database/database.test-utils';
import { createServer } from '../../app/server';
import { createTestServerDependencies } from '../../app/server.test-utils';
import { overrideConfig } from '../../config/config.test-utils';
import { ORGANIZATION_ROLES } from '../../organizations/organizations.constants';
import { createInMemoryStorageService } from '../../storage/storage.test-utils';

const userId = 'usr_111111111111111111111111';
const organizationId = 'org_222222222222222222222222';

// A 16x12 baseline JPEG whose Exif segment carries a camera make, a date and a GPS position
// (48°51'29.6"N 2°17'40.2"E). 827 bytes.
const jpegWithGpsExif = Buffer.from(
  [
    '/9j/4AAQSkZJRgABAQAAAQABAAD/4QDARXhpZgAATU0AKgAAAAgAAwEPAAIAAAALAAAAMgEyAAIAAAAUAAAAPoglAAQAAAABAAAA',
    'UgAAAABFeGFtcGxlQ2FtAAAyMDI2OjEwOjAxIDA5OjMwOjAwAAAEAAEAAgAAAAJOAAAAAAIABQAAAAMAAACIAAMAAgAAAAJFAAAA',
    'AAQABQAAAAMAAACgAAAAAAAAADAAAAABAAAAMwAAAAEAAACUAAAABQAAAAIAAAABAAAAEQAAAAEAAADJAAAABf/bAEMACgcHCAcG',
    'CggICAsKCgsOGBAODQ0OHRUWERgjHyUkIh8iISYrNy8mKTQpISIwQTE0OTs+Pj4lLkRJQzxINz0+O//bAEMBCgsLDg0OHBAQHDso',
    'Iig7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O//AABEIAAwAEAMBIgACEQEDEQH/xAAf',
    'AAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgj',
    'QrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOU',
    'lZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEB',
    'AQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVi',
    'ctEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqi',
    'o6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AKNFFFfNn1B/',
    '/9k=',
  ].join(''),
  'base64',
);
const sha256 = (bytes: Uint8Array) => createHash('sha256').update(bytes).digest('hex');
const originalHash = '0937c34ce9fcdfa837c765e77115ba06ed1bd21b27769fb2845219297121b573';

describe('uploaded images', () => {
  test('a photo with location metadata is stored and served byte for byte as uploaded', async () => {
    expect(jpegWithGpsExif.byteLength).to.eql(827);
    expect(sha256(jpegWithGpsExif)).to.eql(originalHash);

    const { db } = await createInMemoryDatabase({
      users: [{ id: userId, email: 'user@example.com' }],
      organizations: [{ id: organizationId, name: 'Org 1' }],
      organizationMembers: [{ organizationId, userId, role: ORGANIZATION_ROLES.OWNER }],
    });
    const documentsStorageService = createInMemoryStorageService();
    const { app } = createServer(
      createTestServerDependencies({
        db,
        documentsStorageService,
        config: overrideConfig({ env: 'test', documentsStorage: { driver: 'in-memory' } }),
      }),
    );

    const formData = new FormData();
    formData.append('file', new File([jpegWithGpsExif], 'holiday.jpg', { type: 'image/jpeg' }));
    const body = new Response(formData);
    const uploadResponse = await app.request(
      `/api/organizations/${organizationId}/documents`,
      { method: 'POST', headers: Object.fromEntries(body.headers.entries()), body: await body.arrayBuffer() },
      { loggedInUserId: userId },
    );

    expect(uploadResponse.status).to.eql(200);
    const { document } = (await uploadResponse.json()) as { document: Document };
    expect(document.originalSha256Hash).to.eql(originalHash);
    expect(document.originalSize).to.eql(827);

    const stored = [...documentsStorageService._getStorage().values()];
    expect(stored.length).to.eql(1);
    expect(stored[0]!.content.byteLength).to.eql(827);
    expect(sha256(stored[0]!.content)).to.eql(originalHash);

    const fileResponse = await app.request(
      `/api/organizations/${organizationId}/documents/${document.id}/file`,
      { method: 'GET' },
      { loggedInUserId: userId },
    );
    expect(fileResponse.status).to.eql(200);
    expect(sha256(new Uint8Array(await fileResponse.arrayBuffer()))).to.eql(originalHash);
  });
});
