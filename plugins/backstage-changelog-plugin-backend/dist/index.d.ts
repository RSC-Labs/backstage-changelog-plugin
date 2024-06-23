import { CatalogApi } from '@backstage/catalog-client';
import express from 'express';
import { Logger } from 'winston';
import * as _backstage_backend_plugin_api from '@backstage/backend-plugin-api';
import { UrlReaderService, AuthService, DiscoveryService } from '@backstage/backend-plugin-api';

interface RouterOptions {
    logger: Logger;
    reader: UrlReaderService;
    auth: AuthService;
    discovery: DiscoveryService;
    catalogApi?: CatalogApi;
}
declare function createRouter(options: RouterOptions): Promise<express.Router>;

/**
 * Changelog backend plugin
 *
 * @public
 */
declare const changelogPlugin: _backstage_backend_plugin_api.BackendFeatureCompat;

export { RouterOptions, createRouter, changelogPlugin as default };
