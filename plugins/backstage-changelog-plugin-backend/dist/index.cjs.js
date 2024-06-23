'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var backendCommon = require('@backstage/backend-common');
var catalogClient = require('@backstage/catalog-client');
var errors = require('@backstage/errors');
var express = require('express');
var Router = require('express-promise-router');
var fs = require('fs-extra');
var catalogModel = require('@backstage/catalog-model');
var backendPluginApi = require('@backstage/backend-plugin-api');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var express__default = /*#__PURE__*/_interopDefaultLegacy(express);
var Router__default = /*#__PURE__*/_interopDefaultLegacy(Router);
var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);

const readChangelogFile = async (changeLogFileReference) => {
  const result = fs__default["default"].readFileSync(changeLogFileReference);
  return result.toString("utf8");
};

async function createRouter(options) {
  var _a;
  const { logger, auth, reader, discovery } = options;
  const catalogApi = (_a = options.catalogApi) != null ? _a : new catalogClient.CatalogClient({ discoveryApi: discovery });
  const router = Router__default["default"]();
  router.use(express__default["default"].json());
  router.get("/health", (_, response) => {
    logger.info("PONG!");
    response.json({ status: "ok" });
  });
  router.get("/entity/:namespace/:kind/:name", async (req, res) => {
    var _a2, _b, _c;
    const { token } = await auth.getPluginRequestToken({
      onBehalfOf: await auth.getOwnServiceCredentials(),
      targetPluginId: "catalog"
    });
    const { namespace, kind, name } = req.params;
    const entity = await catalogApi.getEntityByRef(
      { namespace, kind, name },
      { token }
    );
    if (!entity) {
      throw new errors.NotFoundError(
        `No ${kind} entity in ${namespace} named "${name}"`
      );
    }
    const entitySourceLocation = (_a2 = entity == null ? void 0 : entity.metadata.annotations) == null ? void 0 : _a2[catalogModel.ANNOTATION_SOURCE_LOCATION];
    const changelogFilename = (_b = entity == null ? void 0 : entity.metadata.annotations) == null ? void 0 : _b["changelog-name"];
    const changelogFileReference = (_c = entity == null ? void 0 : entity.metadata.annotations) == null ? void 0 : _c["changelog-file-ref"];
    if (!changelogFileReference) {
      if (changelogFilename && entitySourceLocation) {
        const result = await readChangelogFile(entitySourceLocation + changelogFilename);
        return res.status(200).json({ content: result });
      } else if (entitySourceLocation) {
        const { type: type2, target: target2 } = catalogModel.parseLocationRef(entitySourceLocation);
        if (type2 === "url") {
          const result = await reader.readUrl(`${target2}CHANGELOG.md`);
          return res.status(200).json({ content: (await result.buffer()).toString("utf8") });
        }
        if (type2 === "file") {
          const result = await readChangelogFile(`${target2}CHANGELOG.md`);
          return res.status(200).json({ content: result });
        }
        return res.status(500).json();
      }
      return res.status(404).json();
    }
    const { type, target } = catalogModel.parseLocationRef(changelogFileReference);
    if (type === "url") {
      const result = await reader.readUrl(target);
      return res.status(200).json({ content: (await result.buffer()).toString("utf8") });
    }
    if (type === "file") {
      const result = await readChangelogFile(target);
      return res.status(200).json({ content: result });
    }
    return res.status(500).json();
  });
  router.use(backendCommon.errorHandler());
  return router;
}

const changelogPlugin = backendPluginApi.createBackendPlugin({
  pluginId: "changelog",
  register(env) {
    env.registerInit({
      deps: {
        logger: backendPluginApi.coreServices.logger,
        reader: backendPluginApi.coreServices.urlReader,
        httpRouter: backendPluginApi.coreServices.httpRouter,
        discovery: backendPluginApi.coreServices.discovery,
        auth: backendPluginApi.coreServices.auth
      },
      async init({ logger, reader, httpRouter, auth, discovery }) {
        httpRouter.use(
          await createRouter({
            logger: backendCommon.loggerToWinstonLogger(logger),
            reader,
            auth,
            discovery
          })
        );
      }
    });
  }
});

exports.createRouter = createRouter;
exports["default"] = changelogPlugin;
//# sourceMappingURL=index.cjs.js.map
