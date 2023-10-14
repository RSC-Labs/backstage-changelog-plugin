/*
 * Copyright 2023 RSC-Labs, https://rsoftcon.com/
 *
 * Licensed under the Mozilla Public License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.mozilla.org/en-US/MPL/2.0/
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { generatePath } from 'react-router-dom';
import { DiscoveryApi, FetchApi } from '@backstage/core-plugin-api';
import { Entity, DEFAULT_NAMESPACE } from '@backstage/catalog-model';
import { ResponseError } from '@backstage/errors';
import { ChangelogApi } from './ChangelogApi';


/** @public */
export class ChangelogClient implements ChangelogApi {
  private readonly discoveryApi: DiscoveryApi;
  private readonly fetchApi: FetchApi;

  public constructor(options: {
    discoveryApi: DiscoveryApi;
    fetchApi: FetchApi;
  }) {
    this.discoveryApi = options.discoveryApi;
    this.fetchApi = options.fetchApi;
  }

  private getEntityRouteParams(entity: Entity) {
    return {
      kind: entity.kind.toLocaleLowerCase('en-US'),
      namespace:
        entity.metadata.namespace?.toLocaleLowerCase('en-US') ??
        DEFAULT_NAMESPACE,
      name: entity.metadata.name,
    };
  }

  public async readChangelog(entity: Entity): Promise<string> {
        const routeParams = this.getEntityRouteParams(entity);
        const path = generatePath(`:namespace/:kind/:name`, routeParams);
        const baseUrl = await this.discoveryApi.getBaseUrl('changelog');
        const response = await this.fetchApi.fetch(`${baseUrl}/entity/${path}`);
        if (!response.ok) {
            throw await ResponseError.fromResponse(response);
        }
        const result = await response.json();
        return result.content;
    }
}