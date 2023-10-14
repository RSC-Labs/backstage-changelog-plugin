import { createApiRef, createRouteRef, createPlugin, createApiFactory, discoveryApiRef, fetchApiRef, createComponentExtension } from '@backstage/core-plugin-api';
import { generatePath } from 'react-router-dom';
import { DEFAULT_NAMESPACE, ANNOTATION_SOURCE_LOCATION } from '@backstage/catalog-model';
import { ResponseError } from '@backstage/errors';

const changelogApiRef = createApiRef({
  id: "plugin.changelog.client"
});

const rootRouteRef = createRouteRef({
  id: "backstage-plugin-changelog"
});

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class ChangelogClient {
  constructor(options) {
    __publicField(this, "discoveryApi");
    __publicField(this, "fetchApi");
    this.discoveryApi = options.discoveryApi;
    this.fetchApi = options.fetchApi;
  }
  getEntityRouteParams(entity) {
    var _a, _b;
    return {
      kind: entity.kind.toLocaleLowerCase("en-US"),
      namespace: (_b = (_a = entity.metadata.namespace) == null ? void 0 : _a.toLocaleLowerCase("en-US")) != null ? _b : DEFAULT_NAMESPACE,
      name: entity.metadata.name
    };
  }
  async readChangelog(entity) {
    const routeParams = this.getEntityRouteParams(entity);
    const path = generatePath(`:namespace/:kind/:name`, routeParams);
    const baseUrl = await this.discoveryApi.getBaseUrl("changelog");
    const response = await this.fetchApi.fetch(`${baseUrl}/entity/${path}`);
    if (!response.ok) {
      throw await ResponseError.fromResponse(response);
    }
    const result = await response.json();
    return result.content;
  }
}

const backstagePluginChangelogPlugin = createPlugin({
  id: "changelog",
  apis: [
    createApiFactory({
      api: changelogApiRef,
      deps: {
        discoveryApi: discoveryApiRef,
        fetchApi: fetchApiRef
      },
      factory: ({ discoveryApi, fetchApi }) => new ChangelogClient({
        discoveryApi,
        fetchApi
      })
    })
  ],
  routes: {
    root: rootRouteRef
  }
});
const EntityChangelogCard = backstagePluginChangelogPlugin.provide(
  createComponentExtension({
    name: "EntityChangelogCard",
    component: {
      lazy: () => import('./index-c99c80e0.esm.js').then((m) => m.ChangelogCard)
    }
  })
);
const EntityChangelogContent = backstagePluginChangelogPlugin.provide(
  createComponentExtension({
    name: "EntityChangelogContent",
    component: {
      lazy: () => import('./index-c99c80e0.esm.js').then((m) => m.ChangelogContent)
    }
  })
);

const CHANGELOG_ANNOTATION_REF = "changelog-file-ref";
const CHANGELOG_ANNOTATION_NAME = "changelog-name";
const isChangelogAnnotationConfigurationOk = (entity) => {
  var _a, _b, _c, _d;
  if (Boolean((_a = entity.metadata.annotations) == null ? void 0 : _a[CHANGELOG_ANNOTATION_REF])) {
    return true;
  }
  if (Boolean((_b = entity.metadata.annotations) == null ? void 0 : _b[CHANGELOG_ANNOTATION_NAME]) && Boolean((_c = entity.metadata.annotations) == null ? void 0 : _c[ANNOTATION_SOURCE_LOCATION])) {
    return true;
  }
  if (Boolean((_d = entity.metadata.annotations) == null ? void 0 : _d[ANNOTATION_SOURCE_LOCATION])) {
    return true;
  }
  return false;
};
const getInfoAboutChangelogAnnotationConfiguration = (entity) => {
  var _a, _b, _c, _d;
  if (Boolean((_a = entity.metadata.annotations) == null ? void 0 : _a[CHANGELOG_ANNOTATION_NAME]) && !Boolean((_b = entity.metadata.annotations) == null ? void 0 : _b[ANNOTATION_SOURCE_LOCATION])) {
    return `Annotation "${CHANGELOG_ANNOTATION_NAME}" needs to be set together with "${ANNOTATION_SOURCE_LOCATION}" annotation`;
  }
  if (!Boolean((_c = entity.metadata.annotations) == null ? void 0 : _c[CHANGELOG_ANNOTATION_REF]) && !Boolean((_d = entity.metadata.annotations) == null ? void 0 : _d[ANNOTATION_SOURCE_LOCATION])) {
    return `Annotations are missing - "${CHANGELOG_ANNOTATION_REF}" or "${ANNOTATION_SOURCE_LOCATION}" or "${CHANGELOG_ANNOTATION_NAME}" with "${ANNOTATION_SOURCE_LOCATION}"`;
  }
  return "Annotations are ok";
};

export { CHANGELOG_ANNOTATION_NAME as C, EntityChangelogContent as E, CHANGELOG_ANNOTATION_REF as a, EntityChangelogCard as b, changelogApiRef as c, getInfoAboutChangelogAnnotationConfiguration as g, isChangelogAnnotationConfigurationOk as i };
//# sourceMappingURL=index-37b62e94.esm.js.map
