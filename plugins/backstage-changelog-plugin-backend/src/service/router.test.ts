import { HostDiscovery, TokenManager, UrlReader, getVoidLogger } from '@backstage/backend-common';
import { CatalogApi } from '@backstage/catalog-client';
import type { Entity } from '@backstage/catalog-model';
import express from 'express';
import request from 'supertest';
import { createRouter } from './router';
import { ConfigReader } from '@backstage/config';

const mockedTokenManager: jest.Mocked<TokenManager> = {
    getToken: jest.fn(),
    authenticate: jest.fn(),
};

const mockCatalogApi = {
    getEntityByRef: jest.fn()
};

const mockUrlReader: jest.Mocked<UrlReader> = {
    readUrl: jest.fn(),
    readTree: jest.fn(),
    search: jest.fn(),
};

describe('createRouter', () => {
  let app: express.Express;

  beforeAll(async () => {
      const config = new ConfigReader({
        backend: {
          baseUrl: 'https://example.com:7007',
          listen: {
            port: 7007,
          },
        },
      });
      
    const discovery = HostDiscovery.fromConfig(config);

    const router = await createRouter({
        logger: getVoidLogger(),
        reader: mockUrlReader, 
        discovery: discovery,
        tokenManager: mockedTokenManager,
        catalogApi: mockCatalogApi as Partial<CatalogApi> as CatalogApi,
    });
    app = express().use(router);
  });

  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('GET /health', () => {
    it('returns ok', async () => {
        const response = await request(app).get('/health');

        expect(response.status).toEqual(200);
        expect(response.body).toEqual({ status: 'ok' });
    });
  });

  describe('GET /entity/:namespace/:kind/:name', () => {
    it('returns 200 if URL file exists for changelog-file-ref', async () => {
        mockedTokenManager.getToken.mockResolvedValueOnce({
            token: 'token'
        });
        const entity: Entity = {
            apiVersion: 'v1',
            kind: 'Component',
            metadata: {
              name: 'test',
              annotations: {
                "backstage.io/source-location": "file:/test",
                "changelog-file-ref": "url:https://test.com/",
                "changelog-name": "CHANGELOG.md"
              }
            },
          };
        mockCatalogApi.getEntityByRef.mockResolvedValueOnce(entity);

        mockUrlReader.readUrl.mockResolvedValueOnce({
            buffer: async () => Buffer.from('buffer')
        })

        const response = await request(app).get('/entity/:namespace/:kind/:name');
        expect(response.status).toEqual(200);
        
    });
  });
});
