/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express_promise_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express-promise-router */ \"express-promise-router\");\n/* harmony import */ var express_promise_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express_promise_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @backstage/backend-common */ \"@backstage/backend-common\");\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _backstage_backend_tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @backstage/backend-tasks */ \"@backstage/backend-tasks\");\n/* harmony import */ var _backstage_backend_tasks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_backstage_backend_tasks__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _plugins_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plugins/app */ \"./src/plugins/app.ts\");\n/* harmony import */ var _plugins_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plugins/auth */ \"./src/plugins/auth.ts\");\n/* harmony import */ var _plugins_catalog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plugins/catalog */ \"./src/plugins/catalog.ts\");\n/* harmony import */ var _plugins_scaffolder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plugins/scaffolder */ \"./src/plugins/scaffolder.ts\");\n/* harmony import */ var _plugins_proxy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./plugins/proxy */ \"./src/plugins/proxy.ts\");\n/* harmony import */ var _plugins_techdocs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./plugins/techdocs */ \"./src/plugins/techdocs.ts\");\n/* harmony import */ var _plugins_search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./plugins/search */ \"./src/plugins/search.ts\");\n/* harmony import */ var _plugins_changelog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./plugins/changelog */ \"./src/plugins/changelog.ts\");\n/* harmony import */ var _backstage_plugin_permission_node__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @backstage/plugin-permission-node */ \"@backstage/plugin-permission-node\");\n/* harmony import */ var _backstage_plugin_permission_node__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_permission_node__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _backstage_plugin_auth_node__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @backstage/plugin-auth-node */ \"@backstage/plugin-auth-node\");\n/* harmony import */ var _backstage_plugin_auth_node__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_auth_node__WEBPACK_IMPORTED_MODULE_12__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n/*\n * Hi!\n *\n * Note that this is an EXAMPLE Backstage backend. Please check the README.\n *\n * Happy hacking!\n */ var _module_hot;\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction makeCreateEnv(config) {\n    const root = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.getRootLogger)();\n    const reader = _backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.UrlReaders.default({\n        logger: root,\n        config\n    });\n    const discovery = _backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.HostDiscovery.fromConfig(config);\n    const cacheManager = _backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.CacheManager.fromConfig(config);\n    const databaseManager = _backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.DatabaseManager.fromConfig(config, {\n        logger: root\n    });\n    const tokenManager = _backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.ServerTokenManager.noop();\n    const taskScheduler = _backstage_backend_tasks__WEBPACK_IMPORTED_MODULE_2__.TaskScheduler.fromConfig(config, {\n        databaseManager\n    });\n    const identity = _backstage_plugin_auth_node__WEBPACK_IMPORTED_MODULE_12__.DefaultIdentityClient.create({\n        discovery\n    });\n    const permissions = _backstage_plugin_permission_node__WEBPACK_IMPORTED_MODULE_11__.ServerPermissionClient.fromConfig(config, {\n        discovery,\n        tokenManager\n    });\n    root.info(`Created UrlReader ${reader}`);\n    return (plugin)=>{\n        const logger = root.child({\n            type: 'plugin',\n            plugin\n        });\n        const database = databaseManager.forPlugin(plugin);\n        const cache = cacheManager.forPlugin(plugin);\n        const scheduler = taskScheduler.forPlugin(plugin);\n        return {\n            logger,\n            database,\n            cache,\n            config,\n            reader,\n            discovery,\n            tokenManager,\n            scheduler,\n            permissions,\n            identity\n        };\n    };\n}\nasync function main() {\n    const config = await (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.loadBackendConfig)({\n        argv: process.argv,\n        logger: (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.getRootLogger)()\n    });\n    const createEnv = makeCreateEnv(config);\n    const catalogEnv = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.useHotMemoize)(module, ()=>createEnv('catalog'));\n    const scaffolderEnv = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.useHotMemoize)(module, ()=>createEnv('scaffolder'));\n    const authEnv = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.useHotMemoize)(module, ()=>createEnv('auth'));\n    const proxyEnv = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.useHotMemoize)(module, ()=>createEnv('proxy'));\n    const techdocsEnv = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.useHotMemoize)(module, ()=>createEnv('techdocs'));\n    const searchEnv = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.useHotMemoize)(module, ()=>createEnv('search'));\n    const appEnv = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.useHotMemoize)(module, ()=>createEnv('app'));\n    const changelogEnv = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.useHotMemoize)(module, ()=>createEnv('changelog'));\n    const apiRouter = express_promise_router__WEBPACK_IMPORTED_MODULE_0___default()();\n    apiRouter.use('/catalog', await (0,_plugins_catalog__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(catalogEnv));\n    apiRouter.use('/scaffolder', await (0,_plugins_scaffolder__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(scaffolderEnv));\n    apiRouter.use('/auth', await (0,_plugins_auth__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(authEnv));\n    apiRouter.use('/techdocs', await (0,_plugins_techdocs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(techdocsEnv));\n    apiRouter.use('/proxy', await (0,_plugins_proxy__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(proxyEnv));\n    apiRouter.use('/search', await (0,_plugins_search__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(searchEnv));\n    apiRouter.use('/changelog', await (0,_plugins_changelog__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(changelogEnv));\n    // Add backends ABOVE this line; this 404 handler is the catch-all fallback\n    apiRouter.use((0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.notFoundHandler)());\n    const service = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_1__.createServiceBuilder)(module).loadConfig(config).addRouter('/api', apiRouter).addRouter('', await (0,_plugins_app__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(appEnv));\n    await service.start().catch((err)=>{\n        console.log(err);\n        process.exit(1);\n    });\n}\n(_module_hot = module.hot) === null || _module_hot === void 0 ? void 0 : _module_hot.accept();\nmain().catch((error)=>{\n    console.error('Backend failed to start up', error);\n    process.exit(1);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBTUE7QUFFQTtBQUNBO0FBWUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdWJ1bnR1L3JzYy9jb250cmlidXRpb25zL2JhY2tzdGFnZS1jaGFuZ2Vsb2ctcGx1Z2luL3BhY2thZ2VzL2JhY2tlbmQvc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBIaSFcbiAqXG4gKiBOb3RlIHRoYXQgdGhpcyBpcyBhbiBFWEFNUExFIEJhY2tzdGFnZSBiYWNrZW5kLiBQbGVhc2UgY2hlY2sgdGhlIFJFQURNRS5cbiAqXG4gKiBIYXBweSBoYWNraW5nIVxuICovXG5cbmltcG9ydCBSb3V0ZXIgZnJvbSAnZXhwcmVzcy1wcm9taXNlLXJvdXRlcic7XG5pbXBvcnQge1xuICBjcmVhdGVTZXJ2aWNlQnVpbGRlcixcbiAgbG9hZEJhY2tlbmRDb25maWcsXG4gIGdldFJvb3RMb2dnZXIsXG4gIHVzZUhvdE1lbW9pemUsXG4gIG5vdEZvdW5kSGFuZGxlcixcbiAgQ2FjaGVNYW5hZ2VyLFxuICBEYXRhYmFzZU1hbmFnZXIsXG4gIEhvc3REaXNjb3ZlcnksXG4gIFVybFJlYWRlcnMsXG4gIFNlcnZlclRva2VuTWFuYWdlcixcbn0gZnJvbSAnQGJhY2tzdGFnZS9iYWNrZW5kLWNvbW1vbic7XG5pbXBvcnQgeyBUYXNrU2NoZWR1bGVyIH0gZnJvbSAnQGJhY2tzdGFnZS9iYWNrZW5kLXRhc2tzJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJ0BiYWNrc3RhZ2UvY29uZmlnJztcbmltcG9ydCBhcHAgZnJvbSAnLi9wbHVnaW5zL2FwcCc7XG5pbXBvcnQgYXV0aCBmcm9tICcuL3BsdWdpbnMvYXV0aCc7XG5pbXBvcnQgY2F0YWxvZyBmcm9tICcuL3BsdWdpbnMvY2F0YWxvZyc7XG5pbXBvcnQgc2NhZmZvbGRlciBmcm9tICcuL3BsdWdpbnMvc2NhZmZvbGRlcic7XG5pbXBvcnQgcHJveHkgZnJvbSAnLi9wbHVnaW5zL3Byb3h5JztcbmltcG9ydCB0ZWNoZG9jcyBmcm9tICcuL3BsdWdpbnMvdGVjaGRvY3MnO1xuaW1wb3J0IHNlYXJjaCBmcm9tICcuL3BsdWdpbnMvc2VhcmNoJztcbmltcG9ydCBjaGFuZ2Vsb2cgZnJvbSAnLi9wbHVnaW5zL2NoYW5nZWxvZyc7XG5pbXBvcnQgeyBQbHVnaW5FbnZpcm9ubWVudCB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgU2VydmVyUGVybWlzc2lvbkNsaWVudCB9IGZyb20gJ0BiYWNrc3RhZ2UvcGx1Z2luLXBlcm1pc3Npb24tbm9kZSc7XG5pbXBvcnQgeyBEZWZhdWx0SWRlbnRpdHlDbGllbnQgfSBmcm9tICdAYmFja3N0YWdlL3BsdWdpbi1hdXRoLW5vZGUnO1xuXG5cbmZ1bmN0aW9uIG1ha2VDcmVhdGVFbnYoY29uZmlnOiBDb25maWcpIHtcbiAgY29uc3Qgcm9vdCA9IGdldFJvb3RMb2dnZXIoKTtcbiAgY29uc3QgcmVhZGVyID0gVXJsUmVhZGVycy5kZWZhdWx0KHsgbG9nZ2VyOiByb290LCBjb25maWcgfSk7XG4gIGNvbnN0IGRpc2NvdmVyeSA9IEhvc3REaXNjb3ZlcnkuZnJvbUNvbmZpZyhjb25maWcpO1xuICBjb25zdCBjYWNoZU1hbmFnZXIgPSBDYWNoZU1hbmFnZXIuZnJvbUNvbmZpZyhjb25maWcpO1xuICBjb25zdCBkYXRhYmFzZU1hbmFnZXIgPSBEYXRhYmFzZU1hbmFnZXIuZnJvbUNvbmZpZyhjb25maWcsIHsgbG9nZ2VyOiByb290IH0pO1xuICBjb25zdCB0b2tlbk1hbmFnZXIgPSBTZXJ2ZXJUb2tlbk1hbmFnZXIubm9vcCgpO1xuICBjb25zdCB0YXNrU2NoZWR1bGVyID0gVGFza1NjaGVkdWxlci5mcm9tQ29uZmlnKGNvbmZpZywgeyBkYXRhYmFzZU1hbmFnZXIgfSk7XG5cbiAgY29uc3QgaWRlbnRpdHkgPSBEZWZhdWx0SWRlbnRpdHlDbGllbnQuY3JlYXRlKHtcbiAgICBkaXNjb3ZlcnksXG4gIH0pO1xuICBjb25zdCBwZXJtaXNzaW9ucyA9IFNlcnZlclBlcm1pc3Npb25DbGllbnQuZnJvbUNvbmZpZyhjb25maWcsIHtcbiAgICBkaXNjb3ZlcnksXG4gICAgdG9rZW5NYW5hZ2VyLFxuICB9KTtcblxuICByb290LmluZm8oYENyZWF0ZWQgVXJsUmVhZGVyICR7cmVhZGVyfWApO1xuXG4gIHJldHVybiAocGx1Z2luOiBzdHJpbmcpOiBQbHVnaW5FbnZpcm9ubWVudCA9PiB7XG4gICAgY29uc3QgbG9nZ2VyID0gcm9vdC5jaGlsZCh7IHR5cGU6ICdwbHVnaW4nLCBwbHVnaW4gfSk7XG4gICAgY29uc3QgZGF0YWJhc2UgPSBkYXRhYmFzZU1hbmFnZXIuZm9yUGx1Z2luKHBsdWdpbik7XG4gICAgY29uc3QgY2FjaGUgPSBjYWNoZU1hbmFnZXIuZm9yUGx1Z2luKHBsdWdpbik7XG4gICAgY29uc3Qgc2NoZWR1bGVyID0gdGFza1NjaGVkdWxlci5mb3JQbHVnaW4ocGx1Z2luKTtcbiAgICByZXR1cm4ge1xuICAgICAgbG9nZ2VyLFxuICAgICAgZGF0YWJhc2UsXG4gICAgICBjYWNoZSxcbiAgICAgIGNvbmZpZyxcbiAgICAgIHJlYWRlcixcbiAgICAgIGRpc2NvdmVyeSxcbiAgICAgIHRva2VuTWFuYWdlcixcbiAgICAgIHNjaGVkdWxlcixcbiAgICAgIHBlcm1pc3Npb25zLFxuICAgICAgaWRlbnRpdHksXG4gICAgfTtcbiAgfTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gbWFpbigpIHtcbiAgY29uc3QgY29uZmlnID0gYXdhaXQgbG9hZEJhY2tlbmRDb25maWcoe1xuICAgIGFyZ3Y6IHByb2Nlc3MuYXJndixcbiAgICBsb2dnZXI6IGdldFJvb3RMb2dnZXIoKSxcbiAgfSk7XG4gIGNvbnN0IGNyZWF0ZUVudiA9IG1ha2VDcmVhdGVFbnYoY29uZmlnKTtcblxuICBjb25zdCBjYXRhbG9nRW52ID0gdXNlSG90TWVtb2l6ZShtb2R1bGUsICgpID0+IGNyZWF0ZUVudignY2F0YWxvZycpKTtcbiAgY29uc3Qgc2NhZmZvbGRlckVudiA9IHVzZUhvdE1lbW9pemUobW9kdWxlLCAoKSA9PiBjcmVhdGVFbnYoJ3NjYWZmb2xkZXInKSk7XG4gIGNvbnN0IGF1dGhFbnYgPSB1c2VIb3RNZW1vaXplKG1vZHVsZSwgKCkgPT4gY3JlYXRlRW52KCdhdXRoJykpO1xuICBjb25zdCBwcm94eUVudiA9IHVzZUhvdE1lbW9pemUobW9kdWxlLCAoKSA9PiBjcmVhdGVFbnYoJ3Byb3h5JykpO1xuICBjb25zdCB0ZWNoZG9jc0VudiA9IHVzZUhvdE1lbW9pemUobW9kdWxlLCAoKSA9PiBjcmVhdGVFbnYoJ3RlY2hkb2NzJykpO1xuICBjb25zdCBzZWFyY2hFbnYgPSB1c2VIb3RNZW1vaXplKG1vZHVsZSwgKCkgPT4gY3JlYXRlRW52KCdzZWFyY2gnKSk7XG4gIGNvbnN0IGFwcEVudiA9IHVzZUhvdE1lbW9pemUobW9kdWxlLCAoKSA9PiBjcmVhdGVFbnYoJ2FwcCcpKTtcbiAgY29uc3QgY2hhbmdlbG9nRW52ID0gdXNlSG90TWVtb2l6ZShtb2R1bGUsICgpID0+IGNyZWF0ZUVudignY2hhbmdlbG9nJykpO1xuXG4gIGNvbnN0IGFwaVJvdXRlciA9IFJvdXRlcigpO1xuICBhcGlSb3V0ZXIudXNlKCcvY2F0YWxvZycsIGF3YWl0IGNhdGFsb2coY2F0YWxvZ0VudikpO1xuICBhcGlSb3V0ZXIudXNlKCcvc2NhZmZvbGRlcicsIGF3YWl0IHNjYWZmb2xkZXIoc2NhZmZvbGRlckVudikpO1xuICBhcGlSb3V0ZXIudXNlKCcvYXV0aCcsIGF3YWl0IGF1dGgoYXV0aEVudikpO1xuICBhcGlSb3V0ZXIudXNlKCcvdGVjaGRvY3MnLCBhd2FpdCB0ZWNoZG9jcyh0ZWNoZG9jc0VudikpO1xuICBhcGlSb3V0ZXIudXNlKCcvcHJveHknLCBhd2FpdCBwcm94eShwcm94eUVudikpO1xuICBhcGlSb3V0ZXIudXNlKCcvc2VhcmNoJywgYXdhaXQgc2VhcmNoKHNlYXJjaEVudikpO1xuICBhcGlSb3V0ZXIudXNlKCcvY2hhbmdlbG9nJywgYXdhaXQgY2hhbmdlbG9nKGNoYW5nZWxvZ0VudikpO1xuXG4gIC8vIEFkZCBiYWNrZW5kcyBBQk9WRSB0aGlzIGxpbmU7IHRoaXMgNDA0IGhhbmRsZXIgaXMgdGhlIGNhdGNoLWFsbCBmYWxsYmFja1xuICBhcGlSb3V0ZXIudXNlKG5vdEZvdW5kSGFuZGxlcigpKTtcblxuICBjb25zdCBzZXJ2aWNlID0gY3JlYXRlU2VydmljZUJ1aWxkZXIobW9kdWxlKVxuICAgIC5sb2FkQ29uZmlnKGNvbmZpZylcbiAgICAuYWRkUm91dGVyKCcvYXBpJywgYXBpUm91dGVyKVxuICAgIC5hZGRSb3V0ZXIoJycsIGF3YWl0IGFwcChhcHBFbnYpKTtcblxuICBhd2FpdCBzZXJ2aWNlLnN0YXJ0KCkuY2F0Y2goZXJyID0+IHtcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIHByb2Nlc3MuZXhpdCgxKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5ob3Q/LmFjY2VwdCgpO1xubWFpbigpLmNhdGNoKGVycm9yID0+IHtcbiAgY29uc29sZS5lcnJvcignQmFja2VuZCBmYWlsZWQgdG8gc3RhcnQgdXAnLCBlcnJvcik7XG4gIHByb2Nlc3MuZXhpdCgxKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ }),

/***/ "./src/plugins/app.ts":
/*!****************************!*\
  !*** ./src/plugins/app.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPlugin)\n/* harmony export */ });\n/* harmony import */ var _backstage_plugin_app_backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/plugin-app-backend */ \"@backstage/plugin-app-backend\");\n/* harmony import */ var _backstage_plugin_app_backend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_app_backend__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function createPlugin(env) {\n    return await (0,_backstage_plugin_app_backend__WEBPACK_IMPORTED_MODULE_0__.createRouter)({\n        logger: env.logger,\n        config: env.config,\n        database: env.database,\n        appPackageName: 'app'\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9hcHAudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFJQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3VidW50dS9yc2MvY29udHJpYnV0aW9ucy9iYWNrc3RhZ2UtY2hhbmdlbG9nLXBsdWdpbi9wYWNrYWdlcy9iYWNrZW5kL3NyYy9wbHVnaW5zL2FwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVSb3V0ZXIgfSBmcm9tICdAYmFja3N0YWdlL3BsdWdpbi1hcHAtYmFja2VuZCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IFBsdWdpbkVudmlyb25tZW50IH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQbHVnaW4oXG4gIGVudjogUGx1Z2luRW52aXJvbm1lbnQsXG4pOiBQcm9taXNlPFJvdXRlcj4ge1xuICByZXR1cm4gYXdhaXQgY3JlYXRlUm91dGVyKHtcbiAgICBsb2dnZXI6IGVudi5sb2dnZXIsXG4gICAgY29uZmlnOiBlbnYuY29uZmlnLFxuICAgIGRhdGFiYXNlOiBlbnYuZGF0YWJhc2UsXG4gICAgYXBwUGFja2FnZU5hbWU6ICdhcHAnLFxuICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/plugins/app.ts\n");

/***/ }),

/***/ "./src/plugins/auth.ts":
/*!*****************************!*\
  !*** ./src/plugins/auth.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPlugin)\n/* harmony export */ });\n/* harmony import */ var _backstage_plugin_auth_backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/plugin-auth-backend */ \"@backstage/plugin-auth-backend\");\n/* harmony import */ var _backstage_plugin_auth_backend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_auth_backend__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function createPlugin(env) {\n    return await (0,_backstage_plugin_auth_backend__WEBPACK_IMPORTED_MODULE_0__.createRouter)({\n        logger: env.logger,\n        config: env.config,\n        database: env.database,\n        discovery: env.discovery,\n        tokenManager: env.tokenManager,\n        providerFactories: {\n            ..._backstage_plugin_auth_backend__WEBPACK_IMPORTED_MODULE_0__.defaultAuthProviderFactories,\n            // This replaces the default GitHub auth provider with a customized one.\n            // The `signIn` option enables sign-in for this provider, using the\n            // identity resolution logic that's provided in the `resolver` callback.\n            //\n            // This particular resolver makes all users share a single \"guest\" identity.\n            // It should only be used for testing and trying out Backstage.\n            //\n            // If you want to use a production ready resolver you can switch to\n            // the one that is commented out below, it looks up a user entity in the\n            // catalog using the GitHub username of the authenticated user.\n            // That resolver requires you to have user entities populated in the catalog,\n            // for example using https://backstage.io/docs/integrations/github/org\n            //\n            // There are other resolvers to choose from, and you can also create\n            // your own, see the auth documentation for more details:\n            //\n            //   https://backstage.io/docs/auth/identity-resolver\n            github: _backstage_plugin_auth_backend__WEBPACK_IMPORTED_MODULE_0__.providers.github.create({\n                signIn: {\n                    resolver (_, ctx) {\n                        const userRef = 'user:default/guest'; // Must be a full entity reference\n                        return ctx.issueToken({\n                            claims: {\n                                sub: userRef,\n                                ent: [\n                                    userRef\n                                ]\n                            }\n                        });\n                    }\n                }\n            })\n        }\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9hdXRoLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBUUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91YnVudHUvcnNjL2NvbnRyaWJ1dGlvbnMvYmFja3N0YWdlLWNoYW5nZWxvZy1wbHVnaW4vcGFja2FnZXMvYmFja2VuZC9zcmMvcGx1Z2lucy9hdXRoLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGNyZWF0ZVJvdXRlcixcbiAgcHJvdmlkZXJzLFxuICBkZWZhdWx0QXV0aFByb3ZpZGVyRmFjdG9yaWVzLFxufSBmcm9tICdAYmFja3N0YWdlL3BsdWdpbi1hdXRoLWJhY2tlbmQnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBQbHVnaW5FbnZpcm9ubWVudCB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUGx1Z2luKFxuICBlbnY6IFBsdWdpbkVudmlyb25tZW50LFxuKTogUHJvbWlzZTxSb3V0ZXI+IHtcbiAgcmV0dXJuIGF3YWl0IGNyZWF0ZVJvdXRlcih7XG4gICAgbG9nZ2VyOiBlbnYubG9nZ2VyLFxuICAgIGNvbmZpZzogZW52LmNvbmZpZyxcbiAgICBkYXRhYmFzZTogZW52LmRhdGFiYXNlLFxuICAgIGRpc2NvdmVyeTogZW52LmRpc2NvdmVyeSxcbiAgICB0b2tlbk1hbmFnZXI6IGVudi50b2tlbk1hbmFnZXIsXG4gICAgcHJvdmlkZXJGYWN0b3JpZXM6IHtcbiAgICAgIC4uLmRlZmF1bHRBdXRoUHJvdmlkZXJGYWN0b3JpZXMsXG5cbiAgICAgIC8vIFRoaXMgcmVwbGFjZXMgdGhlIGRlZmF1bHQgR2l0SHViIGF1dGggcHJvdmlkZXIgd2l0aCBhIGN1c3RvbWl6ZWQgb25lLlxuICAgICAgLy8gVGhlIGBzaWduSW5gIG9wdGlvbiBlbmFibGVzIHNpZ24taW4gZm9yIHRoaXMgcHJvdmlkZXIsIHVzaW5nIHRoZVxuICAgICAgLy8gaWRlbnRpdHkgcmVzb2x1dGlvbiBsb2dpYyB0aGF0J3MgcHJvdmlkZWQgaW4gdGhlIGByZXNvbHZlcmAgY2FsbGJhY2suXG4gICAgICAvL1xuICAgICAgLy8gVGhpcyBwYXJ0aWN1bGFyIHJlc29sdmVyIG1ha2VzIGFsbCB1c2VycyBzaGFyZSBhIHNpbmdsZSBcImd1ZXN0XCIgaWRlbnRpdHkuXG4gICAgICAvLyBJdCBzaG91bGQgb25seSBiZSB1c2VkIGZvciB0ZXN0aW5nIGFuZCB0cnlpbmcgb3V0IEJhY2tzdGFnZS5cbiAgICAgIC8vXG4gICAgICAvLyBJZiB5b3Ugd2FudCB0byB1c2UgYSBwcm9kdWN0aW9uIHJlYWR5IHJlc29sdmVyIHlvdSBjYW4gc3dpdGNoIHRvXG4gICAgICAvLyB0aGUgb25lIHRoYXQgaXMgY29tbWVudGVkIG91dCBiZWxvdywgaXQgbG9va3MgdXAgYSB1c2VyIGVudGl0eSBpbiB0aGVcbiAgICAgIC8vIGNhdGFsb2cgdXNpbmcgdGhlIEdpdEh1YiB1c2VybmFtZSBvZiB0aGUgYXV0aGVudGljYXRlZCB1c2VyLlxuICAgICAgLy8gVGhhdCByZXNvbHZlciByZXF1aXJlcyB5b3UgdG8gaGF2ZSB1c2VyIGVudGl0aWVzIHBvcHVsYXRlZCBpbiB0aGUgY2F0YWxvZyxcbiAgICAgIC8vIGZvciBleGFtcGxlIHVzaW5nIGh0dHBzOi8vYmFja3N0YWdlLmlvL2RvY3MvaW50ZWdyYXRpb25zL2dpdGh1Yi9vcmdcbiAgICAgIC8vXG4gICAgICAvLyBUaGVyZSBhcmUgb3RoZXIgcmVzb2x2ZXJzIHRvIGNob29zZSBmcm9tLCBhbmQgeW91IGNhbiBhbHNvIGNyZWF0ZVxuICAgICAgLy8geW91ciBvd24sIHNlZSB0aGUgYXV0aCBkb2N1bWVudGF0aW9uIGZvciBtb3JlIGRldGFpbHM6XG4gICAgICAvL1xuICAgICAgLy8gICBodHRwczovL2JhY2tzdGFnZS5pby9kb2NzL2F1dGgvaWRlbnRpdHktcmVzb2x2ZXJcbiAgICAgIGdpdGh1YjogcHJvdmlkZXJzLmdpdGh1Yi5jcmVhdGUoe1xuICAgICAgICBzaWduSW46IHtcbiAgICAgICAgICByZXNvbHZlcihfLCBjdHgpIHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJSZWYgPSAndXNlcjpkZWZhdWx0L2d1ZXN0JzsgLy8gTXVzdCBiZSBhIGZ1bGwgZW50aXR5IHJlZmVyZW5jZVxuICAgICAgICAgICAgcmV0dXJuIGN0eC5pc3N1ZVRva2VuKHtcbiAgICAgICAgICAgICAgY2xhaW1zOiB7XG4gICAgICAgICAgICAgICAgc3ViOiB1c2VyUmVmLCAvLyBUaGUgdXNlcidzIG93biBpZGVudGl0eVxuICAgICAgICAgICAgICAgIGVudDogW3VzZXJSZWZdLCAvLyBBIGxpc3Qgb2YgaWRlbnRpdGllcyB0aGF0IHRoZSB1c2VyIGNsYWltcyBvd25lcnNoaXAgdGhyb3VnaFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAvLyByZXNvbHZlcjogcHJvdmlkZXJzLmdpdGh1Yi5yZXNvbHZlcnMudXNlcm5hbWVNYXRjaGluZ1VzZXJFbnRpdHlOYW1lKCksXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICB9LFxuICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/plugins/auth.ts\n");

/***/ }),

/***/ "./src/plugins/catalog.ts":
/*!********************************!*\
  !*** ./src/plugins/catalog.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPlugin)\n/* harmony export */ });\n/* harmony import */ var _backstage_plugin_catalog_backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/plugin-catalog-backend */ \"@backstage/plugin-catalog-backend\");\n/* harmony import */ var _backstage_plugin_catalog_backend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_catalog_backend__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @backstage/plugin-scaffolder-backend */ \"@backstage/plugin-scaffolder-backend\");\n/* harmony import */ var _backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function createPlugin(env) {\n    const builder = await _backstage_plugin_catalog_backend__WEBPACK_IMPORTED_MODULE_0__.CatalogBuilder.create(env);\n    builder.addProcessor(new _backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_1__.ScaffolderEntitiesProcessor());\n    const { processingEngine, router } = await builder.build();\n    await processingEngine.start();\n    return router;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9jYXRhbG9nLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3VidW50dS9yc2MvY29udHJpYnV0aW9ucy9iYWNrc3RhZ2UtY2hhbmdlbG9nLXBsdWdpbi9wYWNrYWdlcy9iYWNrZW5kL3NyYy9wbHVnaW5zL2NhdGFsb2cudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2F0YWxvZ0J1aWxkZXIgfSBmcm9tICdAYmFja3N0YWdlL3BsdWdpbi1jYXRhbG9nLWJhY2tlbmQnO1xuaW1wb3J0IHsgU2NhZmZvbGRlckVudGl0aWVzUHJvY2Vzc29yIH0gZnJvbSAnQGJhY2tzdGFnZS9wbHVnaW4tc2NhZmZvbGRlci1iYWNrZW5kJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgUGx1Z2luRW52aXJvbm1lbnQgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBsdWdpbihcbiAgZW52OiBQbHVnaW5FbnZpcm9ubWVudCxcbik6IFByb21pc2U8Um91dGVyPiB7XG4gIGNvbnN0IGJ1aWxkZXIgPSBhd2FpdCBDYXRhbG9nQnVpbGRlci5jcmVhdGUoZW52KTtcbiAgYnVpbGRlci5hZGRQcm9jZXNzb3IobmV3IFNjYWZmb2xkZXJFbnRpdGllc1Byb2Nlc3NvcigpKTtcbiAgY29uc3QgeyBwcm9jZXNzaW5nRW5naW5lLCByb3V0ZXIgfSA9IGF3YWl0IGJ1aWxkZXIuYnVpbGQoKTtcbiAgYXdhaXQgcHJvY2Vzc2luZ0VuZ2luZS5zdGFydCgpO1xuICByZXR1cm4gcm91dGVyO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/plugins/catalog.ts\n");

/***/ }),

/***/ "./src/plugins/changelog.ts":
/*!**********************************!*\
  !*** ./src/plugins/changelog.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPlugin)\n/* harmony export */ });\n/* harmony import */ var _rsc_labs_backstage_changelog_plugin_backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rsc-labs/backstage-changelog-plugin-backend */ \"../../plugins/backstage-changelog-plugin-backend/src/index.ts\");\n\nasync function createPlugin(env) {\n    return await (0,_rsc_labs_backstage_changelog_plugin_backend__WEBPACK_IMPORTED_MODULE_0__.createRouter)({\n        discovery: env.discovery,\n        tokenManager: env.tokenManager,\n        logger: env.logger,\n        reader: env.reader\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9jaGFuZ2Vsb2cudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQU1BO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdWJ1bnR1L3JzYy9jb250cmlidXRpb25zL2JhY2tzdGFnZS1jaGFuZ2Vsb2ctcGx1Z2luL3BhY2thZ2VzL2JhY2tlbmQvc3JjL3BsdWdpbnMvY2hhbmdlbG9nLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgY3JlYXRlUm91dGVyLFxuICB9IGZyb20gJ0Byc2MtbGFicy9iYWNrc3RhZ2UtY2hhbmdlbG9nLXBsdWdpbi1iYWNrZW5kJ1xuICBpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcbiAgaW1wb3J0IHsgUGx1Z2luRW52aXJvbm1lbnQgfSBmcm9tICcuLi90eXBlcyc7XG4gIFxuICBleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQbHVnaW4oXG4gICAgZW52OiBQbHVnaW5FbnZpcm9ubWVudCxcbiAgKTogUHJvbWlzZTxSb3V0ZXI+IHtcbiAgICByZXR1cm4gYXdhaXQgY3JlYXRlUm91dGVyKHtcbiAgICAgIGRpc2NvdmVyeTogZW52LmRpc2NvdmVyeSxcbiAgICAgIHRva2VuTWFuYWdlcjogZW52LnRva2VuTWFuYWdlcixcbiAgICAgIGxvZ2dlcjogZW52LmxvZ2dlcixcbiAgICAgIHJlYWRlcjogZW52LnJlYWRlclxuICAgIH0pO1xuICB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/plugins/changelog.ts\n");

/***/ }),

/***/ "./src/plugins/proxy.ts":
/*!******************************!*\
  !*** ./src/plugins/proxy.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPlugin)\n/* harmony export */ });\n/* harmony import */ var _backstage_plugin_proxy_backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/plugin-proxy-backend */ \"@backstage/plugin-proxy-backend\");\n/* harmony import */ var _backstage_plugin_proxy_backend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_proxy_backend__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function createPlugin(env) {\n    return await (0,_backstage_plugin_proxy_backend__WEBPACK_IMPORTED_MODULE_0__.createRouter)({\n        logger: env.logger,\n        config: env.config,\n        discovery: env.discovery\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9wcm94eS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUlBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3VidW50dS9yc2MvY29udHJpYnV0aW9ucy9iYWNrc3RhZ2UtY2hhbmdlbG9nLXBsdWdpbi9wYWNrYWdlcy9iYWNrZW5kL3NyYy9wbHVnaW5zL3Byb3h5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVJvdXRlciB9IGZyb20gJ0BiYWNrc3RhZ2UvcGx1Z2luLXByb3h5LWJhY2tlbmQnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBQbHVnaW5FbnZpcm9ubWVudCB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUGx1Z2luKFxuICBlbnY6IFBsdWdpbkVudmlyb25tZW50LFxuKTogUHJvbWlzZTxSb3V0ZXI+IHtcbiAgcmV0dXJuIGF3YWl0IGNyZWF0ZVJvdXRlcih7XG4gICAgbG9nZ2VyOiBlbnYubG9nZ2VyLFxuICAgIGNvbmZpZzogZW52LmNvbmZpZyxcbiAgICBkaXNjb3Zlcnk6IGVudi5kaXNjb3ZlcnksXG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/plugins/proxy.ts\n");

/***/ }),

/***/ "./src/plugins/scaffolder.ts":
/*!***********************************!*\
  !*** ./src/plugins/scaffolder.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPlugin)\n/* harmony export */ });\n/* harmony import */ var _backstage_catalog_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/catalog-client */ \"@backstage/catalog-client\");\n/* harmony import */ var _backstage_catalog_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_catalog_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @backstage/plugin-scaffolder-backend */ \"@backstage/plugin-scaffolder-backend\");\n/* harmony import */ var _backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function createPlugin(env) {\n    const catalogClient = new _backstage_catalog_client__WEBPACK_IMPORTED_MODULE_0__.CatalogClient({\n        discoveryApi: env.discovery\n    });\n    return await (0,_backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_1__.createRouter)({\n        logger: env.logger,\n        config: env.config,\n        database: env.database,\n        reader: env.reader,\n        catalogClient,\n        identity: env.identity,\n        permissions: env.permissions\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9zY2FmZm9sZGVyLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdWJ1bnR1L3JzYy9jb250cmlidXRpb25zL2JhY2tzdGFnZS1jaGFuZ2Vsb2ctcGx1Z2luL3BhY2thZ2VzL2JhY2tlbmQvc3JjL3BsdWdpbnMvc2NhZmZvbGRlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXRhbG9nQ2xpZW50IH0gZnJvbSAnQGJhY2tzdGFnZS9jYXRhbG9nLWNsaWVudCc7XG5pbXBvcnQgeyBjcmVhdGVSb3V0ZXIgfSBmcm9tICdAYmFja3N0YWdlL3BsdWdpbi1zY2FmZm9sZGVyLWJhY2tlbmQnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgdHlwZSB7IFBsdWdpbkVudmlyb25tZW50IH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQbHVnaW4oXG4gIGVudjogUGx1Z2luRW52aXJvbm1lbnQsXG4pOiBQcm9taXNlPFJvdXRlcj4ge1xuICBjb25zdCBjYXRhbG9nQ2xpZW50ID0gbmV3IENhdGFsb2dDbGllbnQoe1xuICAgIGRpc2NvdmVyeUFwaTogZW52LmRpc2NvdmVyeSxcbiAgfSk7XG5cbiAgcmV0dXJuIGF3YWl0IGNyZWF0ZVJvdXRlcih7XG4gICAgbG9nZ2VyOiBlbnYubG9nZ2VyLFxuICAgIGNvbmZpZzogZW52LmNvbmZpZyxcbiAgICBkYXRhYmFzZTogZW52LmRhdGFiYXNlLFxuICAgIHJlYWRlcjogZW52LnJlYWRlcixcbiAgICBjYXRhbG9nQ2xpZW50LFxuICAgIGlkZW50aXR5OiBlbnYuaWRlbnRpdHksXG4gICAgcGVybWlzc2lvbnM6IGVudi5wZXJtaXNzaW9ucyxcbiAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/plugins/scaffolder.ts\n");

/***/ }),

/***/ "./src/plugins/search.ts":
/*!*******************************!*\
  !*** ./src/plugins/search.ts ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPlugin)\n/* harmony export */ });\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/backend-common */ \"@backstage/backend-common\");\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _backstage_plugin_search_backend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @backstage/plugin-search-backend */ \"@backstage/plugin-search-backend\");\n/* harmony import */ var _backstage_plugin_search_backend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_search_backend__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _backstage_plugin_search_backend_node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @backstage/plugin-search-backend-node */ \"@backstage/plugin-search-backend-node\");\n/* harmony import */ var _backstage_plugin_search_backend_node__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_search_backend_node__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _backstage_plugin_catalog_backend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @backstage/plugin-catalog-backend */ \"@backstage/plugin-catalog-backend\");\n/* harmony import */ var _backstage_plugin_catalog_backend__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_catalog_backend__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _backstage_plugin_techdocs_backend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @backstage/plugin-techdocs-backend */ \"@backstage/plugin-techdocs-backend\");\n/* harmony import */ var _backstage_plugin_techdocs_backend__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_techdocs_backend__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nasync function createPlugin(env) {\n    // Initialize a connection to a search engine.\n    const searchEngine = new _backstage_plugin_search_backend_node__WEBPACK_IMPORTED_MODULE_2__.LunrSearchEngine({\n        logger: env.logger\n    });\n    const indexBuilder = new _backstage_plugin_search_backend_node__WEBPACK_IMPORTED_MODULE_2__.IndexBuilder({\n        logger: env.logger,\n        searchEngine\n    });\n    const schedule = env.scheduler.createScheduledTaskRunner({\n        frequency: {\n            minutes: 10\n        },\n        timeout: {\n            minutes: 15\n        },\n        // A 3 second delay gives the backend server a chance to initialize before\n        // any collators are executed, which may attempt requests against the API.\n        initialDelay: {\n            seconds: 3\n        }\n    });\n    // Collators are responsible for gathering documents known to plugins. This\n    // collator gathers entities from the software catalog.\n    indexBuilder.addCollator({\n        schedule,\n        factory: _backstage_plugin_catalog_backend__WEBPACK_IMPORTED_MODULE_3__.DefaultCatalogCollatorFactory.fromConfig(env.config, {\n            discovery: env.discovery,\n            tokenManager: env.tokenManager\n        })\n    });\n    // collator gathers entities from techdocs.\n    indexBuilder.addCollator({\n        schedule,\n        factory: _backstage_plugin_techdocs_backend__WEBPACK_IMPORTED_MODULE_4__.DefaultTechDocsCollatorFactory.fromConfig(env.config, {\n            discovery: env.discovery,\n            logger: env.logger,\n            tokenManager: env.tokenManager\n        })\n    });\n    // The scheduler controls when documents are gathered from collators and sent\n    // to the search engine for indexing.\n    const { scheduler } = await indexBuilder.build();\n    scheduler.start();\n    (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__.useHotCleanup)(module, ()=>scheduler.stop());\n    return await (0,_backstage_plugin_search_backend__WEBPACK_IMPORTED_MODULE_1__.createRouter)({\n        engine: indexBuilder.getSearchEngine(),\n        types: indexBuilder.getDocumentTypes(),\n        permissions: env.permissions,\n        config: env.config,\n        logger: env.logger\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9zZWFyY2gudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdWJ1bnR1L3JzYy9jb250cmlidXRpb25zL2JhY2tzdGFnZS1jaGFuZ2Vsb2ctcGx1Z2luL3BhY2thZ2VzL2JhY2tlbmQvc3JjL3BsdWdpbnMvc2VhcmNoLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUhvdENsZWFudXAgfSBmcm9tICdAYmFja3N0YWdlL2JhY2tlbmQtY29tbW9uJztcbmltcG9ydCB7IGNyZWF0ZVJvdXRlciB9IGZyb20gJ0BiYWNrc3RhZ2UvcGx1Z2luLXNlYXJjaC1iYWNrZW5kJztcbmltcG9ydCB7XG4gIEluZGV4QnVpbGRlcixcbiAgTHVuclNlYXJjaEVuZ2luZSxcbn0gZnJvbSAnQGJhY2tzdGFnZS9wbHVnaW4tc2VhcmNoLWJhY2tlbmQtbm9kZSc7XG5pbXBvcnQgeyBQbHVnaW5FbnZpcm9ubWVudCB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IERlZmF1bHRDYXRhbG9nQ29sbGF0b3JGYWN0b3J5IH0gZnJvbSAnQGJhY2tzdGFnZS9wbHVnaW4tY2F0YWxvZy1iYWNrZW5kJztcbmltcG9ydCB7IERlZmF1bHRUZWNoRG9jc0NvbGxhdG9yRmFjdG9yeSB9IGZyb20gJ0BiYWNrc3RhZ2UvcGx1Z2luLXRlY2hkb2NzLWJhY2tlbmQnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBsdWdpbihcbiAgZW52OiBQbHVnaW5FbnZpcm9ubWVudCxcbik6IFByb21pc2U8Um91dGVyPiB7XG4gIC8vIEluaXRpYWxpemUgYSBjb25uZWN0aW9uIHRvIGEgc2VhcmNoIGVuZ2luZS5cbiAgY29uc3Qgc2VhcmNoRW5naW5lID0gbmV3IEx1bnJTZWFyY2hFbmdpbmUoe1xuICAgIGxvZ2dlcjogZW52LmxvZ2dlcixcbiAgfSk7XG4gIGNvbnN0IGluZGV4QnVpbGRlciA9IG5ldyBJbmRleEJ1aWxkZXIoe1xuICAgIGxvZ2dlcjogZW52LmxvZ2dlcixcbiAgICBzZWFyY2hFbmdpbmUsXG4gIH0pO1xuXG4gIGNvbnN0IHNjaGVkdWxlID0gZW52LnNjaGVkdWxlci5jcmVhdGVTY2hlZHVsZWRUYXNrUnVubmVyKHtcbiAgICBmcmVxdWVuY3k6IHsgbWludXRlczogMTAgfSxcbiAgICB0aW1lb3V0OiB7IG1pbnV0ZXM6IDE1IH0sXG4gICAgLy8gQSAzIHNlY29uZCBkZWxheSBnaXZlcyB0aGUgYmFja2VuZCBzZXJ2ZXIgYSBjaGFuY2UgdG8gaW5pdGlhbGl6ZSBiZWZvcmVcbiAgICAvLyBhbnkgY29sbGF0b3JzIGFyZSBleGVjdXRlZCwgd2hpY2ggbWF5IGF0dGVtcHQgcmVxdWVzdHMgYWdhaW5zdCB0aGUgQVBJLlxuICAgIGluaXRpYWxEZWxheTogeyBzZWNvbmRzOiAzIH0sXG4gIH0pO1xuXG4gIC8vIENvbGxhdG9ycyBhcmUgcmVzcG9uc2libGUgZm9yIGdhdGhlcmluZyBkb2N1bWVudHMga25vd24gdG8gcGx1Z2lucy4gVGhpc1xuICAvLyBjb2xsYXRvciBnYXRoZXJzIGVudGl0aWVzIGZyb20gdGhlIHNvZnR3YXJlIGNhdGFsb2cuXG4gIGluZGV4QnVpbGRlci5hZGRDb2xsYXRvcih7XG4gICAgc2NoZWR1bGUsXG4gICAgZmFjdG9yeTogRGVmYXVsdENhdGFsb2dDb2xsYXRvckZhY3RvcnkuZnJvbUNvbmZpZyhlbnYuY29uZmlnLCB7XG4gICAgICBkaXNjb3Zlcnk6IGVudi5kaXNjb3ZlcnksXG4gICAgICB0b2tlbk1hbmFnZXI6IGVudi50b2tlbk1hbmFnZXIsXG4gICAgfSksXG4gIH0pO1xuXG4gIC8vIGNvbGxhdG9yIGdhdGhlcnMgZW50aXRpZXMgZnJvbSB0ZWNoZG9jcy5cbiAgaW5kZXhCdWlsZGVyLmFkZENvbGxhdG9yKHtcbiAgICBzY2hlZHVsZSxcbiAgICBmYWN0b3J5OiBEZWZhdWx0VGVjaERvY3NDb2xsYXRvckZhY3RvcnkuZnJvbUNvbmZpZyhlbnYuY29uZmlnLCB7XG4gICAgICBkaXNjb3Zlcnk6IGVudi5kaXNjb3ZlcnksXG4gICAgICBsb2dnZXI6IGVudi5sb2dnZXIsXG4gICAgICB0b2tlbk1hbmFnZXI6IGVudi50b2tlbk1hbmFnZXIsXG4gICAgfSksXG4gIH0pO1xuXG4gIC8vIFRoZSBzY2hlZHVsZXIgY29udHJvbHMgd2hlbiBkb2N1bWVudHMgYXJlIGdhdGhlcmVkIGZyb20gY29sbGF0b3JzIGFuZCBzZW50XG4gIC8vIHRvIHRoZSBzZWFyY2ggZW5naW5lIGZvciBpbmRleGluZy5cbiAgY29uc3QgeyBzY2hlZHVsZXIgfSA9IGF3YWl0IGluZGV4QnVpbGRlci5idWlsZCgpO1xuICBzY2hlZHVsZXIuc3RhcnQoKTtcblxuICB1c2VIb3RDbGVhbnVwKG1vZHVsZSwgKCkgPT4gc2NoZWR1bGVyLnN0b3AoKSk7XG5cbiAgcmV0dXJuIGF3YWl0IGNyZWF0ZVJvdXRlcih7XG4gICAgZW5naW5lOiBpbmRleEJ1aWxkZXIuZ2V0U2VhcmNoRW5naW5lKCksXG4gICAgdHlwZXM6IGluZGV4QnVpbGRlci5nZXREb2N1bWVudFR5cGVzKCksXG4gICAgcGVybWlzc2lvbnM6IGVudi5wZXJtaXNzaW9ucyxcbiAgICBjb25maWc6IGVudi5jb25maWcsXG4gICAgbG9nZ2VyOiBlbnYubG9nZ2VyLFxuICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/plugins/search.ts\n");

/***/ }),

/***/ "./src/plugins/techdocs.ts":
/*!*********************************!*\
  !*** ./src/plugins/techdocs.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPlugin)\n/* harmony export */ });\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/backend-common */ \"@backstage/backend-common\");\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _backstage_plugin_techdocs_backend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @backstage/plugin-techdocs-backend */ \"@backstage/plugin-techdocs-backend\");\n/* harmony import */ var _backstage_plugin_techdocs_backend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_techdocs_backend__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var dockerode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dockerode */ \"dockerode\");\n/* harmony import */ var dockerode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dockerode__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nasync function createPlugin(env) {\n    // Preparers are responsible for fetching source files for documentation.\n    const preparers = await _backstage_plugin_techdocs_backend__WEBPACK_IMPORTED_MODULE_1__.Preparers.fromConfig(env.config, {\n        logger: env.logger,\n        reader: env.reader\n    });\n    // Docker client (conditionally) used by the generators, based on techdocs.generators config.\n    const dockerClient = new (dockerode__WEBPACK_IMPORTED_MODULE_2___default())();\n    const containerRunner = new _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__.DockerContainerRunner({\n        dockerClient\n    });\n    // Generators are used for generating documentation sites.\n    const generators = await _backstage_plugin_techdocs_backend__WEBPACK_IMPORTED_MODULE_1__.Generators.fromConfig(env.config, {\n        logger: env.logger,\n        containerRunner\n    });\n    // Publisher is used for\n    // 1. Publishing generated files to storage\n    // 2. Fetching files from storage and passing them to TechDocs frontend.\n    const publisher = await _backstage_plugin_techdocs_backend__WEBPACK_IMPORTED_MODULE_1__.Publisher.fromConfig(env.config, {\n        logger: env.logger,\n        discovery: env.discovery\n    });\n    // checks if the publisher is working and logs the result\n    await publisher.getReadiness();\n    return await (0,_backstage_plugin_techdocs_backend__WEBPACK_IMPORTED_MODULE_1__.createRouter)({\n        preparers,\n        generators,\n        publisher,\n        logger: env.logger,\n        config: env.config,\n        discovery: env.discovery,\n        cache: env.cache\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy90ZWNoZG9jcy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQU1BO0FBSUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91YnVudHUvcnNjL2NvbnRyaWJ1dGlvbnMvYmFja3N0YWdlLWNoYW5nZWxvZy1wbHVnaW4vcGFja2FnZXMvYmFja2VuZC9zcmMvcGx1Z2lucy90ZWNoZG9jcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb2NrZXJDb250YWluZXJSdW5uZXIgfSBmcm9tICdAYmFja3N0YWdlL2JhY2tlbmQtY29tbW9uJztcbmltcG9ydCB7XG4gIGNyZWF0ZVJvdXRlcixcbiAgR2VuZXJhdG9ycyxcbiAgUHJlcGFyZXJzLFxuICBQdWJsaXNoZXIsXG59IGZyb20gJ0BiYWNrc3RhZ2UvcGx1Z2luLXRlY2hkb2NzLWJhY2tlbmQnO1xuaW1wb3J0IERvY2tlciBmcm9tICdkb2NrZXJvZGUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBQbHVnaW5FbnZpcm9ubWVudCB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUGx1Z2luKFxuICBlbnY6IFBsdWdpbkVudmlyb25tZW50LFxuKTogUHJvbWlzZTxSb3V0ZXI+IHtcbiAgLy8gUHJlcGFyZXJzIGFyZSByZXNwb25zaWJsZSBmb3IgZmV0Y2hpbmcgc291cmNlIGZpbGVzIGZvciBkb2N1bWVudGF0aW9uLlxuICBjb25zdCBwcmVwYXJlcnMgPSBhd2FpdCBQcmVwYXJlcnMuZnJvbUNvbmZpZyhlbnYuY29uZmlnLCB7XG4gICAgbG9nZ2VyOiBlbnYubG9nZ2VyLFxuICAgIHJlYWRlcjogZW52LnJlYWRlcixcbiAgfSk7XG5cbiAgLy8gRG9ja2VyIGNsaWVudCAoY29uZGl0aW9uYWxseSkgdXNlZCBieSB0aGUgZ2VuZXJhdG9ycywgYmFzZWQgb24gdGVjaGRvY3MuZ2VuZXJhdG9ycyBjb25maWcuXG4gIGNvbnN0IGRvY2tlckNsaWVudCA9IG5ldyBEb2NrZXIoKTtcbiAgY29uc3QgY29udGFpbmVyUnVubmVyID0gbmV3IERvY2tlckNvbnRhaW5lclJ1bm5lcih7IGRvY2tlckNsaWVudCB9KTtcblxuICAvLyBHZW5lcmF0b3JzIGFyZSB1c2VkIGZvciBnZW5lcmF0aW5nIGRvY3VtZW50YXRpb24gc2l0ZXMuXG4gIGNvbnN0IGdlbmVyYXRvcnMgPSBhd2FpdCBHZW5lcmF0b3JzLmZyb21Db25maWcoZW52LmNvbmZpZywge1xuICAgIGxvZ2dlcjogZW52LmxvZ2dlcixcbiAgICBjb250YWluZXJSdW5uZXIsXG4gIH0pO1xuXG4gIC8vIFB1Ymxpc2hlciBpcyB1c2VkIGZvclxuICAvLyAxLiBQdWJsaXNoaW5nIGdlbmVyYXRlZCBmaWxlcyB0byBzdG9yYWdlXG4gIC8vIDIuIEZldGNoaW5nIGZpbGVzIGZyb20gc3RvcmFnZSBhbmQgcGFzc2luZyB0aGVtIHRvIFRlY2hEb2NzIGZyb250ZW5kLlxuICBjb25zdCBwdWJsaXNoZXIgPSBhd2FpdCBQdWJsaXNoZXIuZnJvbUNvbmZpZyhlbnYuY29uZmlnLCB7XG4gICAgbG9nZ2VyOiBlbnYubG9nZ2VyLFxuICAgIGRpc2NvdmVyeTogZW52LmRpc2NvdmVyeSxcbiAgfSk7XG5cbiAgLy8gY2hlY2tzIGlmIHRoZSBwdWJsaXNoZXIgaXMgd29ya2luZyBhbmQgbG9ncyB0aGUgcmVzdWx0XG4gIGF3YWl0IHB1Ymxpc2hlci5nZXRSZWFkaW5lc3MoKTtcblxuICByZXR1cm4gYXdhaXQgY3JlYXRlUm91dGVyKHtcbiAgICBwcmVwYXJlcnMsXG4gICAgZ2VuZXJhdG9ycyxcbiAgICBwdWJsaXNoZXIsXG4gICAgbG9nZ2VyOiBlbnYubG9nZ2VyLFxuICAgIGNvbmZpZzogZW52LmNvbmZpZyxcbiAgICBkaXNjb3Zlcnk6IGVudi5kaXNjb3ZlcnksXG4gICAgY2FjaGU6IGVudi5jYWNoZSxcbiAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/plugins/techdocs.ts\n");

/***/ }),

/***/ "../../plugins/backstage-changelog-plugin-backend/src/index.ts":
/*!*********************************************************************!*\
  !*** ../../plugins/backstage-changelog-plugin-backend/src/index.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createRouter: () => (/* reexport safe */ _service_router__WEBPACK_IMPORTED_MODULE_0__.createRouter),\n/* harmony export */   \"default\": () => (/* reexport safe */ _plugin__WEBPACK_IMPORTED_MODULE_1__.changelogPlugin)\n/* harmony export */ });\n/* harmony import */ var _service_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/router */ \"../../plugins/backstage-changelog-plugin-backend/src/service/router.ts\");\n/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugin */ \"../../plugins/backstage-changelog-plugin-backend/src/plugin.ts\");\n/*\n * Copyright 2023 RSC-Labs, https://rsoftcon.com/\n *\n * Licensed under the Mozilla Public License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     https://www.mozilla.org/en-US/MPL/2.0/\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */ \n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vcGx1Z2lucy9iYWNrc3RhZ2UtY2hhbmdlbG9nLXBsdWdpbi1iYWNrZW5kL3NyYy9pbmRleC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7O0FBY0E7QUFHQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91YnVudHUvcnNjL2NvbnRyaWJ1dGlvbnMvYmFja3N0YWdlLWNoYW5nZWxvZy1wbHVnaW4vcGx1Z2lucy9iYWNrc3RhZ2UtY2hhbmdlbG9nLXBsdWdpbi1iYWNrZW5kL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMjMgUlNDLUxhYnMsIGh0dHBzOi8vcnNvZnRjb24uY29tL1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNb3ppbGxhIFB1YmxpYyBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwczovL3d3dy5tb3ppbGxhLm9yZy9lbi1VUy9NUEwvMi4wL1xuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuZXhwb3J0ICogZnJvbSAnLi9zZXJ2aWNlL3JvdXRlcic7XG5leHBvcnQgeyBjaGFuZ2Vsb2dQbHVnaW4gYXMgZGVmYXVsdCB9IGZyb20gJy4vcGx1Z2luJzsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../plugins/backstage-changelog-plugin-backend/src/index.ts\n");

/***/ }),

/***/ "../../plugins/backstage-changelog-plugin-backend/src/lib/changelogReader.ts":
/*!***********************************************************************************!*\
  !*** ../../plugins/backstage-changelog-plugin-backend/src/lib/changelogReader.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   readChangelogFile: () => (/* binding */ readChangelogFile)\n/* harmony export */ });\n/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs-extra */ \"fs-extra\");\n/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs_extra__WEBPACK_IMPORTED_MODULE_0__);\n/*\n * Copyright 2023 RSC-Labs, https://rsoftcon.com/\n *\n * Licensed under the Mozilla Public License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     https://www.mozilla.org/en-US/MPL/2.0/\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */ \nconst readChangelogFile = async (changeLogFileReference)=>{\n    const result = fs_extra__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(changeLogFileReference);\n    return result.toString('utf8');\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vcGx1Z2lucy9iYWNrc3RhZ2UtY2hhbmdlbG9nLXBsdWdpbi1iYWNrZW5kL3NyYy9saWIvY2hhbmdlbG9nUmVhZGVyLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7OztBQWNBO0FBSUE7QUFHQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdWJ1bnR1L3JzYy9jb250cmlidXRpb25zL2JhY2tzdGFnZS1jaGFuZ2Vsb2ctcGx1Z2luL3BsdWdpbnMvYmFja3N0YWdlLWNoYW5nZWxvZy1wbHVnaW4tYmFja2VuZC9zcmMvbGliL2NoYW5nZWxvZ1JlYWRlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMjMgUlNDLUxhYnMsIGh0dHBzOi8vcnNvZnRjb24uY29tL1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNb3ppbGxhIFB1YmxpYyBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwczovL3d3dy5tb3ppbGxhLm9yZy9lbi1VUy9NUEwvMi4wL1xuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IGZzIGZyb20gJ2ZzLWV4dHJhJztcblxuZXhwb3J0IGNvbnN0IHJlYWRDaGFuZ2Vsb2dGaWxlID0gYXN5bmMgKFxuICAgIGNoYW5nZUxvZ0ZpbGVSZWZlcmVuY2U6IHN0cmluZ1xuKSA6IFByb21pc2U8c3RyaW5nPiA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gZnMucmVhZEZpbGVTeW5jKGNoYW5nZUxvZ0ZpbGVSZWZlcmVuY2UpO1xuICAgIHJldHVybiByZXN1bHQudG9TdHJpbmcoJ3V0ZjgnKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../plugins/backstage-changelog-plugin-backend/src/lib/changelogReader.ts\n");

/***/ }),

/***/ "../../plugins/backstage-changelog-plugin-backend/src/plugin.ts":
/*!**********************************************************************!*\
  !*** ../../plugins/backstage-changelog-plugin-backend/src/plugin.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   changelogPlugin: () => (/* binding */ changelogPlugin)\n/* harmony export */ });\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/backend-common */ \"@backstage/backend-common\");\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _backstage_backend_plugin_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @backstage/backend-plugin-api */ \"@backstage/backend-plugin-api\");\n/* harmony import */ var _backstage_backend_plugin_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_backstage_backend_plugin_api__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _service_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/router */ \"../../plugins/backstage-changelog-plugin-backend/src/service/router.ts\");\n/*\n * Copyright 2023 RSC-Labs, https://rsoftcon.com/\n *\n * Licensed under the Mozilla Public License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     https://www.mozilla.org/en-US/MPL/2.0/\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */ \n\n\n/**\n * Changelog backend plugin\n *\n * @public\n */ const changelogPlugin = (0,_backstage_backend_plugin_api__WEBPACK_IMPORTED_MODULE_1__.createBackendPlugin)({\n    pluginId: 'changelog',\n    register (env) {\n        env.registerInit({\n            deps: {\n                logger: _backstage_backend_plugin_api__WEBPACK_IMPORTED_MODULE_1__.coreServices.logger,\n                reader: _backstage_backend_plugin_api__WEBPACK_IMPORTED_MODULE_1__.coreServices.urlReader,\n                httpRouter: _backstage_backend_plugin_api__WEBPACK_IMPORTED_MODULE_1__.coreServices.httpRouter,\n                tokenManager: _backstage_backend_plugin_api__WEBPACK_IMPORTED_MODULE_1__.coreServices.tokenManager,\n                discovery: _backstage_backend_plugin_api__WEBPACK_IMPORTED_MODULE_1__.coreServices.discovery\n            },\n            async init ({ logger, reader, httpRouter, tokenManager, discovery }) {\n                httpRouter.use(await (0,_service_router__WEBPACK_IMPORTED_MODULE_2__.createRouter)({\n                    logger: (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__.loggerToWinstonLogger)(logger),\n                    reader,\n                    tokenManager,\n                    discovery\n                }));\n            }\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vcGx1Z2lucy9iYWNrc3RhZ2UtY2hhbmdlbG9nLXBsdWdpbi1iYWNrZW5kL3NyYy9wbHVnaW4udHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7O0FBY0E7QUFHQTtBQUlBO0FBRUE7Ozs7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91YnVudHUvcnNjL2NvbnRyaWJ1dGlvbnMvYmFja3N0YWdlLWNoYW5nZWxvZy1wbHVnaW4vcGx1Z2lucy9iYWNrc3RhZ2UtY2hhbmdlbG9nLXBsdWdpbi1iYWNrZW5kL3NyYy9wbHVnaW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDIzIFJTQy1MYWJzLCBodHRwczovL3Jzb2Z0Y29uLmNvbS9cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTW96aWxsYSBQdWJsaWMgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cHM6Ly93d3cubW96aWxsYS5vcmcvZW4tVVMvTVBMLzIuMC9cbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IGxvZ2dlclRvV2luc3RvbkxvZ2dlciB9IGZyb20gJ0BiYWNrc3RhZ2UvYmFja2VuZC1jb21tb24nO1xuaW1wb3J0IHtcbiAgY29yZVNlcnZpY2VzLFxuICBjcmVhdGVCYWNrZW5kUGx1Z2luLFxufSBmcm9tICdAYmFja3N0YWdlL2JhY2tlbmQtcGx1Z2luLWFwaSc7XG5pbXBvcnQgeyBjcmVhdGVSb3V0ZXIgfSBmcm9tICcuL3NlcnZpY2Uvcm91dGVyJztcblxuLyoqXG4gKiBDaGFuZ2Vsb2cgYmFja2VuZCBwbHVnaW5cbiAqXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFuZ2Vsb2dQbHVnaW4gPSBjcmVhdGVCYWNrZW5kUGx1Z2luKHtcbiAgcGx1Z2luSWQ6ICdjaGFuZ2Vsb2cnLFxuICByZWdpc3RlcihlbnYpIHtcbiAgICBlbnYucmVnaXN0ZXJJbml0KHtcbiAgICAgIGRlcHM6IHtcbiAgICAgICAgbG9nZ2VyOiBjb3JlU2VydmljZXMubG9nZ2VyLFxuICAgICAgICByZWFkZXI6IGNvcmVTZXJ2aWNlcy51cmxSZWFkZXIsXG4gICAgICAgIGh0dHBSb3V0ZXI6IGNvcmVTZXJ2aWNlcy5odHRwUm91dGVyLFxuICAgICAgICB0b2tlbk1hbmFnZXI6IGNvcmVTZXJ2aWNlcy50b2tlbk1hbmFnZXIsXG4gICAgICAgIGRpc2NvdmVyeTogY29yZVNlcnZpY2VzLmRpc2NvdmVyeSxcbiAgICAgIH0sXG4gICAgICBhc3luYyBpbml0KHsgbG9nZ2VyLCByZWFkZXIsIGh0dHBSb3V0ZXIsIHRva2VuTWFuYWdlciwgZGlzY292ZXJ5IH0pIHtcbiAgICAgICAgaHR0cFJvdXRlci51c2UoXG4gICAgICAgICAgYXdhaXQgY3JlYXRlUm91dGVyKHtcbiAgICAgICAgICAgIGxvZ2dlcjogbG9nZ2VyVG9XaW5zdG9uTG9nZ2VyKGxvZ2dlciksXG4gICAgICAgICAgICByZWFkZXIsXG4gICAgICAgICAgICB0b2tlbk1hbmFnZXIsXG4gICAgICAgICAgICBkaXNjb3ZlcnlcbiAgICAgICAgICB9KSxcbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0sXG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../plugins/backstage-changelog-plugin-backend/src/plugin.ts\n");

/***/ }),

/***/ "../../plugins/backstage-changelog-plugin-backend/src/service/router.ts":
/*!******************************************************************************!*\
  !*** ../../plugins/backstage-changelog-plugin-backend/src/service/router.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createRouter: () => (/* binding */ createRouter)\n/* harmony export */ });\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/backend-common */ \"@backstage/backend-common\");\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _backstage_catalog_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @backstage/catalog-client */ \"@backstage/catalog-client\");\n/* harmony import */ var _backstage_catalog_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_backstage_catalog_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _backstage_errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @backstage/errors */ \"@backstage/errors\");\n/* harmony import */ var _backstage_errors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_backstage_errors__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var express_promise_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express-promise-router */ \"express-promise-router\");\n/* harmony import */ var express_promise_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express_promise_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_changelogReader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/changelogReader */ \"../../plugins/backstage-changelog-plugin-backend/src/lib/changelogReader.ts\");\n/* harmony import */ var _backstage_catalog_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @backstage/catalog-model */ \"@backstage/catalog-model\");\n/* harmony import */ var _backstage_catalog_model__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_backstage_catalog_model__WEBPACK_IMPORTED_MODULE_6__);\n/*\n * Copyright 2023 RSC-Labs, https://rsoftcon.com/\n *\n * Licensed under the Mozilla Public License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     https://www.mozilla.org/en-US/MPL/2.0/\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */ \n\n\n\n\n\n\nasync function createRouter(options) {\n    const { logger, tokenManager, reader, discovery } = options;\n    var _options_catalogApi;\n    const catalogApi = (_options_catalogApi = options.catalogApi) !== null && _options_catalogApi !== void 0 ? _options_catalogApi : new _backstage_catalog_client__WEBPACK_IMPORTED_MODULE_1__.CatalogClient({\n        discoveryApi: discovery\n    });\n    const router = express_promise_router__WEBPACK_IMPORTED_MODULE_4___default()();\n    router.use(express__WEBPACK_IMPORTED_MODULE_3___default().json());\n    router.get('/health', (_, response)=>{\n        logger.info('PONG!');\n        response.json({\n            status: 'ok'\n        });\n    });\n    router.get('/entity/:namespace/:kind/:name', async (req, res)=>{\n        var _entity_metadata_annotations, _entity_metadata_annotations1, _entity_metadata_annotations2;\n        const token = await tokenManager.getToken();\n        const { namespace, kind, name } = req.params;\n        const entity = await catalogApi.getEntityByRef({\n            namespace,\n            kind,\n            name\n        }, token);\n        if (!entity) {\n            throw new _backstage_errors__WEBPACK_IMPORTED_MODULE_2__.NotFoundError(`No ${kind} entity in ${namespace} named \"${name}\"`);\n        }\n        const entitySourceLocation = entity === null || entity === void 0 ? void 0 : (_entity_metadata_annotations = entity.metadata.annotations) === null || _entity_metadata_annotations === void 0 ? void 0 : _entity_metadata_annotations[_backstage_catalog_model__WEBPACK_IMPORTED_MODULE_6__.ANNOTATION_SOURCE_LOCATION];\n        const changelogFilename = entity === null || entity === void 0 ? void 0 : (_entity_metadata_annotations1 = entity.metadata.annotations) === null || _entity_metadata_annotations1 === void 0 ? void 0 : _entity_metadata_annotations1['changelog-name'];\n        const changelogFileReference = entity === null || entity === void 0 ? void 0 : (_entity_metadata_annotations2 = entity.metadata.annotations) === null || _entity_metadata_annotations2 === void 0 ? void 0 : _entity_metadata_annotations2['changelog-file-ref'];\n        if (!changelogFileReference) {\n            if (changelogFilename && entitySourceLocation) {\n                const result = await (0,_lib_changelogReader__WEBPACK_IMPORTED_MODULE_5__.readChangelogFile)(entitySourceLocation + changelogFilename);\n                return res.status(200).json({\n                    content: result\n                });\n            } else if (entitySourceLocation) {\n                const { type, target } = (0,_backstage_catalog_model__WEBPACK_IMPORTED_MODULE_6__.parseLocationRef)(entitySourceLocation);\n                if (type === 'url') {\n                    const result = await reader.readUrl(`${target}CHANGELOG.md`);\n                    return res.status(200).json({\n                        content: (await result.buffer()).toString('utf8')\n                    });\n                }\n                if (type === 'file') {\n                    const result = await (0,_lib_changelogReader__WEBPACK_IMPORTED_MODULE_5__.readChangelogFile)(`${target}CHANGELOG.md`);\n                    return res.status(200).json({\n                        content: result\n                    });\n                }\n                return res.status(500).json();\n            }\n            return res.status(404).json();\n        }\n        const { type, target } = (0,_backstage_catalog_model__WEBPACK_IMPORTED_MODULE_6__.parseLocationRef)(changelogFileReference);\n        if (type === 'url') {\n            const result = await reader.readUrl(target);\n            return res.status(200).json({\n                content: (await result.buffer()).toString('utf8')\n            });\n        }\n        if (type === 'file') {\n            const result = await (0,_lib_changelogReader__WEBPACK_IMPORTED_MODULE_5__.readChangelogFile)(target);\n            return res.status(200).json({\n                content: result\n            });\n        }\n        return res.status(500).json();\n    });\n    router.use((0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__.errorHandler)());\n    return router;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vcGx1Z2lucy9iYWNrc3RhZ2UtY2hhbmdlbG9nLXBsdWdpbi1iYWNrZW5kL3NyYy9zZXJ2aWNlL3JvdXRlci50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7OztBQWNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBYUE7QUFHQTtBQUdBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBWUE7QUFYQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91YnVudHUvcnNjL2NvbnRyaWJ1dGlvbnMvYmFja3N0YWdlLWNoYW5nZWxvZy1wbHVnaW4vcGx1Z2lucy9iYWNrc3RhZ2UtY2hhbmdlbG9nLXBsdWdpbi1iYWNrZW5kL3NyYy9zZXJ2aWNlL3JvdXRlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMjMgUlNDLUxhYnMsIGh0dHBzOi8vcnNvZnRjb24uY29tL1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNb3ppbGxhIFB1YmxpYyBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwczovL3d3dy5tb3ppbGxhLm9yZy9lbi1VUy9NUEwvMi4wL1xuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgVXJsUmVhZGVyLCBlcnJvckhhbmRsZXIsIFRva2VuTWFuYWdlciwgUGx1Z2luRW5kcG9pbnREaXNjb3ZlcnkgfSBmcm9tICdAYmFja3N0YWdlL2JhY2tlbmQtY29tbW9uJztcbmltcG9ydCB7IENhdGFsb2dDbGllbnQsIENhdGFsb2dBcGkgfSBmcm9tICdAYmFja3N0YWdlL2NhdGFsb2ctY2xpZW50JztcbmltcG9ydCB7IE5vdEZvdW5kRXJyb3IgfSBmcm9tICdAYmFja3N0YWdlL2Vycm9ycyc7XG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnZXhwcmVzcy1wcm9taXNlLXJvdXRlcic7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICd3aW5zdG9uJztcbmltcG9ydCB7IHJlYWRDaGFuZ2Vsb2dGaWxlIH0gZnJvbSAnLi4vbGliL2NoYW5nZWxvZ1JlYWRlcic7XG5pbXBvcnQge1xuICBBTk5PVEFUSU9OX1NPVVJDRV9MT0NBVElPTixcbiAgcGFyc2VMb2NhdGlvblJlZixcbn0gZnJvbSAnQGJhY2tzdGFnZS9jYXRhbG9nLW1vZGVsJztcblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZXJPcHRpb25zIHtcbiAgbG9nZ2VyOiBMb2dnZXI7XG4gIHJlYWRlcjogVXJsUmVhZGVyO1xuICB0b2tlbk1hbmFnZXI6IFRva2VuTWFuYWdlcjtcbiAgZGlzY292ZXJ5OiBQbHVnaW5FbmRwb2ludERpc2NvdmVyeSxcbiAgY2F0YWxvZ0FwaT86IENhdGFsb2dBcGkgICBcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVJvdXRlcihcbiAgb3B0aW9uczogUm91dGVyT3B0aW9ucyxcbik6IFByb21pc2U8ZXhwcmVzcy5Sb3V0ZXI+IHtcbiAgY29uc3QgeyBsb2dnZXIsIHRva2VuTWFuYWdlciwgcmVhZGVyLCBkaXNjb3ZlcnkgfSA9IG9wdGlvbnM7XG5cbiAgY29uc3QgY2F0YWxvZ0FwaSA9XG4gICAgb3B0aW9ucy5jYXRhbG9nQXBpID8/IG5ldyBDYXRhbG9nQ2xpZW50KHsgZGlzY292ZXJ5QXBpOiBkaXNjb3ZlcnkgfSk7XG5cbiAgY29uc3Qgcm91dGVyID0gUm91dGVyKCk7XG4gIHJvdXRlci51c2UoZXhwcmVzcy5qc29uKCkpO1xuXG4gIHJvdXRlci5nZXQoJy9oZWFsdGgnLCAoXywgcmVzcG9uc2UpID0+IHtcbiAgICBsb2dnZXIuaW5mbygnUE9ORyEnKTtcbiAgICByZXNwb25zZS5qc29uKHsgc3RhdHVzOiAnb2snIH0pO1xuICB9KTtcblxuICByb3V0ZXIuZ2V0KCcvZW50aXR5LzpuYW1lc3BhY2UvOmtpbmQvOm5hbWUnLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCB0b2tlbiA9IGF3YWl0IHRva2VuTWFuYWdlci5nZXRUb2tlbigpO1xuICAgIGNvbnN0IHsgbmFtZXNwYWNlLCBraW5kLCBuYW1lIH0gPSByZXEucGFyYW1zO1xuICAgIGNvbnN0IGVudGl0eSA9IGF3YWl0IGNhdGFsb2dBcGkuZ2V0RW50aXR5QnlSZWYoXG4gICAgICB7IG5hbWVzcGFjZSwga2luZCwgbmFtZSB9LFxuICAgICAgdG9rZW4sXG4gICAgKTtcbiAgICBpZiAoIWVudGl0eSkge1xuICAgICAgdGhyb3cgbmV3IE5vdEZvdW5kRXJyb3IoXG4gICAgICAgIGBObyAke2tpbmR9IGVudGl0eSBpbiAke25hbWVzcGFjZX0gbmFtZWQgXCIke25hbWV9XCJgLFxuICAgICAgKTtcbiAgICB9XG4gICAgY29uc3QgZW50aXR5U291cmNlTG9jYXRpb24gPSBlbnRpdHk/Lm1ldGFkYXRhLmFubm90YXRpb25zPy5bQU5OT1RBVElPTl9TT1VSQ0VfTE9DQVRJT05dO1xuICAgIGNvbnN0IGNoYW5nZWxvZ0ZpbGVuYW1lID0gZW50aXR5Py5tZXRhZGF0YS5hbm5vdGF0aW9ucz8uWydjaGFuZ2Vsb2ctbmFtZSddO1xuICAgIGNvbnN0IGNoYW5nZWxvZ0ZpbGVSZWZlcmVuY2UgPSBlbnRpdHk/Lm1ldGFkYXRhLmFubm90YXRpb25zPy5bJ2NoYW5nZWxvZy1maWxlLXJlZiddO1xuXG4gICAgaWYgKCFjaGFuZ2Vsb2dGaWxlUmVmZXJlbmNlKSB7XG4gICAgICBpZiAoY2hhbmdlbG9nRmlsZW5hbWUgJiYgZW50aXR5U291cmNlTG9jYXRpb24pIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVhZENoYW5nZWxvZ0ZpbGUoZW50aXR5U291cmNlTG9jYXRpb24gKyBjaGFuZ2Vsb2dGaWxlbmFtZSk7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7Y29udGVudDogcmVzdWx0fSlcbiAgICAgIH0gZWxzZSBpZiAoZW50aXR5U291cmNlTG9jYXRpb24pIHtcbiAgICAgICAgY29uc3QgeyB0eXBlLCB0YXJnZXQgfSA9IHBhcnNlTG9jYXRpb25SZWYoZW50aXR5U291cmNlTG9jYXRpb24pO1xuICAgICAgICBpZiAodHlwZSA9PT0gJ3VybCcpIHtcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZWFkZXIucmVhZFVybChgJHt0YXJnZXR9Q0hBTkdFTE9HLm1kYCk7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtjb250ZW50OiAoYXdhaXQgcmVzdWx0LmJ1ZmZlcigpKS50b1N0cmluZygndXRmOCcpfSlcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSA9PT0gJ2ZpbGUnKSB7XG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVhZENoYW5nZWxvZ0ZpbGUoYCR7dGFyZ2V0fUNIQU5HRUxPRy5tZGApO1xuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7Y29udGVudDogcmVzdWx0fSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oKVxuICAgICAgfSBcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbigpO1xuICAgIH1cbiAgICBjb25zdCB7IHR5cGUsIHRhcmdldCB9ID0gcGFyc2VMb2NhdGlvblJlZihjaGFuZ2Vsb2dGaWxlUmVmZXJlbmNlKTtcbiAgICBpZiAodHlwZSA9PT0gJ3VybCcpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlYWRlci5yZWFkVXJsKHRhcmdldCk7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe2NvbnRlbnQ6IChhd2FpdCByZXN1bHQuYnVmZmVyKCkpLnRvU3RyaW5nKCd1dGY4Jyl9KVxuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ2ZpbGUnKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZWFkQ2hhbmdlbG9nRmlsZSh0YXJnZXQpO1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtjb250ZW50OiByZXN1bHR9KVxuICAgIH1cbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oKVxuICB9KTtcblxuICByb3V0ZXIudXNlKGVycm9ySGFuZGxlcigpKTtcbiAgcmV0dXJuIHJvdXRlcjtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../plugins/backstage-changelog-plugin-backend/src/service/router.ts\n");

/***/ }),

/***/ "../../node_modules/webpack/hot/log-apply-result.js":
/*!**********************************************************!*\
  !*** ../../node_modules/webpack/hot/log-apply-result.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\n/**\n * @param {(string | number)[]} updatedModules updated modules\n * @param {(string | number)[] | null} renewedModules renewed modules\n */\nmodule.exports = function (updatedModules, renewedModules) {\n\tvar unacceptedModules = updatedModules.filter(function (moduleId) {\n\t\treturn renewedModules && renewedModules.indexOf(moduleId) < 0;\n\t});\n\tvar log = __webpack_require__(/*! ./log */ \"../../node_modules/webpack/hot/log.js\");\n\n\tif (unacceptedModules.length > 0) {\n\t\tlog(\n\t\t\t\"warning\",\n\t\t\t\"[HMR] The following modules couldn't be hot updated: (They would need a full reload!)\"\n\t\t);\n\t\tunacceptedModules.forEach(function (moduleId) {\n\t\t\tlog(\"warning\", \"[HMR]  - \" + moduleId);\n\t\t});\n\t}\n\n\tif (!renewedModules || renewedModules.length === 0) {\n\t\tlog(\"info\", \"[HMR] Nothing hot updated.\");\n\t} else {\n\t\tlog(\"info\", \"[HMR] Updated modules:\");\n\t\trenewedModules.forEach(function (moduleId) {\n\t\t\tif (typeof moduleId === \"string\" && moduleId.indexOf(\"!\") !== -1) {\n\t\t\t\tvar parts = moduleId.split(\"!\");\n\t\t\t\tlog.groupCollapsed(\"info\", \"[HMR]  - \" + parts.pop());\n\t\t\t\tlog(\"info\", \"[HMR]  - \" + moduleId);\n\t\t\t\tlog.groupEnd(\"info\");\n\t\t\t} else {\n\t\t\t\tlog(\"info\", \"[HMR]  - \" + moduleId);\n\t\t\t}\n\t\t});\n\t\tvar numberIds = renewedModules.every(function (moduleId) {\n\t\t\treturn typeof moduleId === \"number\";\n\t\t});\n\t\tif (numberIds)\n\t\t\tlog(\n\t\t\t\t\"info\",\n\t\t\t\t'[HMR] Consider using the optimization.moduleIds: \"named\" for module names.'\n\t\t\t);\n\t}\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90L2xvZy1hcHBseS1yZXN1bHQuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdWJ1bnR1L3JzYy9jb250cmlidXRpb25zL2JhY2tzdGFnZS1jaGFuZ2Vsb2ctcGx1Z2luL25vZGVfbW9kdWxlcy93ZWJwYWNrL2hvdC9sb2ctYXBwbHktcmVzdWx0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbi8qKlxuICogQHBhcmFtIHsoc3RyaW5nIHwgbnVtYmVyKVtdfSB1cGRhdGVkTW9kdWxlcyB1cGRhdGVkIG1vZHVsZXNcbiAqIEBwYXJhbSB7KHN0cmluZyB8IG51bWJlcilbXSB8IG51bGx9IHJlbmV3ZWRNb2R1bGVzIHJlbmV3ZWQgbW9kdWxlc1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cGRhdGVkTW9kdWxlcywgcmVuZXdlZE1vZHVsZXMpIHtcblx0dmFyIHVuYWNjZXB0ZWRNb2R1bGVzID0gdXBkYXRlZE1vZHVsZXMuZmlsdGVyKGZ1bmN0aW9uIChtb2R1bGVJZCkge1xuXHRcdHJldHVybiByZW5ld2VkTW9kdWxlcyAmJiByZW5ld2VkTW9kdWxlcy5pbmRleE9mKG1vZHVsZUlkKSA8IDA7XG5cdH0pO1xuXHR2YXIgbG9nID0gcmVxdWlyZShcIi4vbG9nXCIpO1xuXG5cdGlmICh1bmFjY2VwdGVkTW9kdWxlcy5sZW5ndGggPiAwKSB7XG5cdFx0bG9nKFxuXHRcdFx0XCJ3YXJuaW5nXCIsXG5cdFx0XHRcIltITVJdIFRoZSBmb2xsb3dpbmcgbW9kdWxlcyBjb3VsZG4ndCBiZSBob3QgdXBkYXRlZDogKFRoZXkgd291bGQgbmVlZCBhIGZ1bGwgcmVsb2FkISlcIlxuXHRcdCk7XG5cdFx0dW5hY2NlcHRlZE1vZHVsZXMuZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlSWQpIHtcblx0XHRcdGxvZyhcIndhcm5pbmdcIiwgXCJbSE1SXSAgLSBcIiArIG1vZHVsZUlkKTtcblx0XHR9KTtcblx0fVxuXG5cdGlmICghcmVuZXdlZE1vZHVsZXMgfHwgcmVuZXdlZE1vZHVsZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0bG9nKFwiaW5mb1wiLCBcIltITVJdIE5vdGhpbmcgaG90IHVwZGF0ZWQuXCIpO1xuXHR9IGVsc2Uge1xuXHRcdGxvZyhcImluZm9cIiwgXCJbSE1SXSBVcGRhdGVkIG1vZHVsZXM6XCIpO1xuXHRcdHJlbmV3ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG5cdFx0XHRpZiAodHlwZW9mIG1vZHVsZUlkID09PSBcInN0cmluZ1wiICYmIG1vZHVsZUlkLmluZGV4T2YoXCIhXCIpICE9PSAtMSkge1xuXHRcdFx0XHR2YXIgcGFydHMgPSBtb2R1bGVJZC5zcGxpdChcIiFcIik7XG5cdFx0XHRcdGxvZy5ncm91cENvbGxhcHNlZChcImluZm9cIiwgXCJbSE1SXSAgLSBcIiArIHBhcnRzLnBvcCgpKTtcblx0XHRcdFx0bG9nKFwiaW5mb1wiLCBcIltITVJdICAtIFwiICsgbW9kdWxlSWQpO1xuXHRcdFx0XHRsb2cuZ3JvdXBFbmQoXCJpbmZvXCIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bG9nKFwiaW5mb1wiLCBcIltITVJdICAtIFwiICsgbW9kdWxlSWQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHZhciBudW1iZXJJZHMgPSByZW5ld2VkTW9kdWxlcy5ldmVyeShmdW5jdGlvbiAobW9kdWxlSWQpIHtcblx0XHRcdHJldHVybiB0eXBlb2YgbW9kdWxlSWQgPT09IFwibnVtYmVyXCI7XG5cdFx0fSk7XG5cdFx0aWYgKG51bWJlcklkcylcblx0XHRcdGxvZyhcblx0XHRcdFx0XCJpbmZvXCIsXG5cdFx0XHRcdCdbSE1SXSBDb25zaWRlciB1c2luZyB0aGUgb3B0aW1pemF0aW9uLm1vZHVsZUlkczogXCJuYW1lZFwiIGZvciBtb2R1bGUgbmFtZXMuJ1xuXHRcdFx0KTtcblx0fVxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../node_modules/webpack/hot/log-apply-result.js\n");

/***/ }),

/***/ "../../node_modules/webpack/hot/log.js":
/*!*********************************************!*\
  !*** ../../node_modules/webpack/hot/log.js ***!
  \*********************************************/
/***/ ((module) => {

eval("/** @typedef {\"info\" | \"warning\" | \"error\"} LogLevel */\n\n/** @type {LogLevel} */\nvar logLevel = \"info\";\n\nfunction dummy() {}\n\n/**\n * @param {LogLevel} level log level\n * @returns {boolean} true, if should log\n */\nfunction shouldLog(level) {\n\tvar shouldLog =\n\t\t(logLevel === \"info\" && level === \"info\") ||\n\t\t([\"info\", \"warning\"].indexOf(logLevel) >= 0 && level === \"warning\") ||\n\t\t([\"info\", \"warning\", \"error\"].indexOf(logLevel) >= 0 && level === \"error\");\n\treturn shouldLog;\n}\n\n/**\n * @param {(msg?: string) => void} logFn log function\n * @returns {(level: LogLevel, msg?: string) => void} function that logs when log level is sufficient\n */\nfunction logGroup(logFn) {\n\treturn function (level, msg) {\n\t\tif (shouldLog(level)) {\n\t\t\tlogFn(msg);\n\t\t}\n\t};\n}\n\n/**\n * @param {LogLevel} level log level\n * @param {string|Error} msg message\n */\nmodule.exports = function (level, msg) {\n\tif (shouldLog(level)) {\n\t\tif (level === \"info\") {\n\t\t\tconsole.log(msg);\n\t\t} else if (level === \"warning\") {\n\t\t\tconsole.warn(msg);\n\t\t} else if (level === \"error\") {\n\t\t\tconsole.error(msg);\n\t\t}\n\t}\n};\n\n/* eslint-disable node/no-unsupported-features/node-builtins */\nvar group = console.group || dummy;\nvar groupCollapsed = console.groupCollapsed || dummy;\nvar groupEnd = console.groupEnd || dummy;\n/* eslint-enable node/no-unsupported-features/node-builtins */\n\nmodule.exports.group = logGroup(group);\n\nmodule.exports.groupCollapsed = logGroup(groupCollapsed);\n\nmodule.exports.groupEnd = logGroup(groupEnd);\n\n/**\n * @param {LogLevel} level log level\n */\nmodule.exports.setLogLevel = function (level) {\n\tlogLevel = level;\n};\n\n/**\n * @param {Error} err error\n * @returns {string} formatted error\n */\nmodule.exports.formatError = function (err) {\n\tvar message = err.message;\n\tvar stack = err.stack;\n\tif (!stack) {\n\t\treturn message;\n\t} else if (stack.indexOf(message) < 0) {\n\t\treturn message + \"\\n\" + stack;\n\t} else {\n\t\treturn stack;\n\t}\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90L2xvZy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdWJ1bnR1L3JzYy9jb250cmlidXRpb25zL2JhY2tzdGFnZS1jaGFuZ2Vsb2ctcGx1Z2luL25vZGVfbW9kdWxlcy93ZWJwYWNrL2hvdC9sb2cuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEB0eXBlZGVmIHtcImluZm9cIiB8IFwid2FybmluZ1wiIHwgXCJlcnJvclwifSBMb2dMZXZlbCAqL1xuXG4vKiogQHR5cGUge0xvZ0xldmVsfSAqL1xudmFyIGxvZ0xldmVsID0gXCJpbmZvXCI7XG5cbmZ1bmN0aW9uIGR1bW15KCkge31cblxuLyoqXG4gKiBAcGFyYW0ge0xvZ0xldmVsfSBsZXZlbCBsb2cgbGV2ZWxcbiAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlLCBpZiBzaG91bGQgbG9nXG4gKi9cbmZ1bmN0aW9uIHNob3VsZExvZyhsZXZlbCkge1xuXHR2YXIgc2hvdWxkTG9nID1cblx0XHQobG9nTGV2ZWwgPT09IFwiaW5mb1wiICYmIGxldmVsID09PSBcImluZm9cIikgfHxcblx0XHQoW1wiaW5mb1wiLCBcIndhcm5pbmdcIl0uaW5kZXhPZihsb2dMZXZlbCkgPj0gMCAmJiBsZXZlbCA9PT0gXCJ3YXJuaW5nXCIpIHx8XG5cdFx0KFtcImluZm9cIiwgXCJ3YXJuaW5nXCIsIFwiZXJyb3JcIl0uaW5kZXhPZihsb2dMZXZlbCkgPj0gMCAmJiBsZXZlbCA9PT0gXCJlcnJvclwiKTtcblx0cmV0dXJuIHNob3VsZExvZztcbn1cblxuLyoqXG4gKiBAcGFyYW0geyhtc2c/OiBzdHJpbmcpID0+IHZvaWR9IGxvZ0ZuIGxvZyBmdW5jdGlvblxuICogQHJldHVybnMgeyhsZXZlbDogTG9nTGV2ZWwsIG1zZz86IHN0cmluZykgPT4gdm9pZH0gZnVuY3Rpb24gdGhhdCBsb2dzIHdoZW4gbG9nIGxldmVsIGlzIHN1ZmZpY2llbnRcbiAqL1xuZnVuY3Rpb24gbG9nR3JvdXAobG9nRm4pIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChsZXZlbCwgbXNnKSB7XG5cdFx0aWYgKHNob3VsZExvZyhsZXZlbCkpIHtcblx0XHRcdGxvZ0ZuKG1zZyk7XG5cdFx0fVxuXHR9O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7TG9nTGV2ZWx9IGxldmVsIGxvZyBsZXZlbFxuICogQHBhcmFtIHtzdHJpbmd8RXJyb3J9IG1zZyBtZXNzYWdlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxldmVsLCBtc2cpIHtcblx0aWYgKHNob3VsZExvZyhsZXZlbCkpIHtcblx0XHRpZiAobGV2ZWwgPT09IFwiaW5mb1wiKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhtc2cpO1xuXHRcdH0gZWxzZSBpZiAobGV2ZWwgPT09IFwid2FybmluZ1wiKSB7XG5cdFx0XHRjb25zb2xlLndhcm4obXNnKTtcblx0XHR9IGVsc2UgaWYgKGxldmVsID09PSBcImVycm9yXCIpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IobXNnKTtcblx0XHR9XG5cdH1cbn07XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vZGUvbm8tdW5zdXBwb3J0ZWQtZmVhdHVyZXMvbm9kZS1idWlsdGlucyAqL1xudmFyIGdyb3VwID0gY29uc29sZS5ncm91cCB8fCBkdW1teTtcbnZhciBncm91cENvbGxhcHNlZCA9IGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQgfHwgZHVtbXk7XG52YXIgZ3JvdXBFbmQgPSBjb25zb2xlLmdyb3VwRW5kIHx8IGR1bW15O1xuLyogZXNsaW50LWVuYWJsZSBub2RlL25vLXVuc3VwcG9ydGVkLWZlYXR1cmVzL25vZGUtYnVpbHRpbnMgKi9cblxubW9kdWxlLmV4cG9ydHMuZ3JvdXAgPSBsb2dHcm91cChncm91cCk7XG5cbm1vZHVsZS5leHBvcnRzLmdyb3VwQ29sbGFwc2VkID0gbG9nR3JvdXAoZ3JvdXBDb2xsYXBzZWQpO1xuXG5tb2R1bGUuZXhwb3J0cy5ncm91cEVuZCA9IGxvZ0dyb3VwKGdyb3VwRW5kKTtcblxuLyoqXG4gKiBAcGFyYW0ge0xvZ0xldmVsfSBsZXZlbCBsb2cgbGV2ZWxcbiAqL1xubW9kdWxlLmV4cG9ydHMuc2V0TG9nTGV2ZWwgPSBmdW5jdGlvbiAobGV2ZWwpIHtcblx0bG9nTGV2ZWwgPSBsZXZlbDtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyIGVycm9yXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBmb3JtYXR0ZWQgZXJyb3JcbiAqL1xubW9kdWxlLmV4cG9ydHMuZm9ybWF0RXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG5cdHZhciBtZXNzYWdlID0gZXJyLm1lc3NhZ2U7XG5cdHZhciBzdGFjayA9IGVyci5zdGFjaztcblx0aWYgKCFzdGFjaykge1xuXHRcdHJldHVybiBtZXNzYWdlO1xuXHR9IGVsc2UgaWYgKHN0YWNrLmluZGV4T2YobWVzc2FnZSkgPCAwKSB7XG5cdFx0cmV0dXJuIG1lc3NhZ2UgKyBcIlxcblwiICsgc3RhY2s7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIHN0YWNrO1xuXHR9XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../node_modules/webpack/hot/log.js\n");

/***/ }),

/***/ "../../node_modules/webpack/hot/poll.js?100":
/*!**************************************************!*\
  !*** ../../node_modules/webpack/hot/poll.js?100 ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var __resourceQuery = \"?100\";\n/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n/*globals __resourceQuery */\nif (true) {\n\tvar hotPollInterval = +__resourceQuery.slice(1) || 0;\n\tvar log = __webpack_require__(/*! ./log */ \"../../node_modules/webpack/hot/log.js\");\n\n\t/**\n\t * @param {boolean=} fromUpdate true when called from update\n\t */\n\tvar checkForUpdate = function checkForUpdate(fromUpdate) {\n\t\tif (module.hot.status() === \"idle\") {\n\t\t\tmodule.hot\n\t\t\t\t.check(true)\n\t\t\t\t.then(function (updatedModules) {\n\t\t\t\t\tif (!updatedModules) {\n\t\t\t\t\t\tif (fromUpdate) log(\"info\", \"[HMR] Update applied.\");\n\t\t\t\t\t\treturn;\n\t\t\t\t\t}\n\t\t\t\t\t__webpack_require__(/*! ./log-apply-result */ \"../../node_modules/webpack/hot/log-apply-result.js\")(updatedModules, updatedModules);\n\t\t\t\t\tcheckForUpdate(true);\n\t\t\t\t})\n\t\t\t\t.catch(function (err) {\n\t\t\t\t\tvar status = module.hot.status();\n\t\t\t\t\tif ([\"abort\", \"fail\"].indexOf(status) >= 0) {\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] Cannot apply update.\");\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] \" + log.formatError(err));\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] You need to restart the application!\");\n\t\t\t\t\t} else {\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] Update failed: \" + log.formatError(err));\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t}\n\t};\n\tsetInterval(checkForUpdate, hotPollInterval);\n} else {}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90L3BvbGwuanM/MTAwIiwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3VidW50dS9yc2MvY29udHJpYnV0aW9ucy9iYWNrc3RhZ2UtY2hhbmdlbG9nLXBsdWdpbi9ub2RlX21vZHVsZXMvd2VicGFjay9ob3QvcG9sbC5qcz8xMDAiXSwic291cmNlc0NvbnRlbnQiOlsiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8qZ2xvYmFscyBfX3Jlc291cmNlUXVlcnkgKi9cbmlmIChtb2R1bGUuaG90KSB7XG5cdHZhciBob3RQb2xsSW50ZXJ2YWwgPSArX19yZXNvdXJjZVF1ZXJ5LnNsaWNlKDEpIHx8IDEwICogNjAgKiAxMDAwO1xuXHR2YXIgbG9nID0gcmVxdWlyZShcIi4vbG9nXCIpO1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge2Jvb2xlYW49fSBmcm9tVXBkYXRlIHRydWUgd2hlbiBjYWxsZWQgZnJvbSB1cGRhdGVcblx0ICovXG5cdHZhciBjaGVja0ZvclVwZGF0ZSA9IGZ1bmN0aW9uIGNoZWNrRm9yVXBkYXRlKGZyb21VcGRhdGUpIHtcblx0XHRpZiAobW9kdWxlLmhvdC5zdGF0dXMoKSA9PT0gXCJpZGxlXCIpIHtcblx0XHRcdG1vZHVsZS5ob3Rcblx0XHRcdFx0LmNoZWNrKHRydWUpXG5cdFx0XHRcdC50aGVuKGZ1bmN0aW9uICh1cGRhdGVkTW9kdWxlcykge1xuXHRcdFx0XHRcdGlmICghdXBkYXRlZE1vZHVsZXMpIHtcblx0XHRcdFx0XHRcdGlmIChmcm9tVXBkYXRlKSBsb2coXCJpbmZvXCIsIFwiW0hNUl0gVXBkYXRlIGFwcGxpZWQuXCIpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXF1aXJlKFwiLi9sb2ctYXBwbHktcmVzdWx0XCIpKHVwZGF0ZWRNb2R1bGVzLCB1cGRhdGVkTW9kdWxlcyk7XG5cdFx0XHRcdFx0Y2hlY2tGb3JVcGRhdGUodHJ1ZSk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG5cdFx0XHRcdFx0dmFyIHN0YXR1cyA9IG1vZHVsZS5ob3Quc3RhdHVzKCk7XG5cdFx0XHRcdFx0aWYgKFtcImFib3J0XCIsIFwiZmFpbFwiXS5pbmRleE9mKHN0YXR1cykgPj0gMCkge1xuXHRcdFx0XHRcdFx0bG9nKFwid2FybmluZ1wiLCBcIltITVJdIENhbm5vdCBhcHBseSB1cGRhdGUuXCIpO1xuXHRcdFx0XHRcdFx0bG9nKFwid2FybmluZ1wiLCBcIltITVJdIFwiICsgbG9nLmZvcm1hdEVycm9yKGVycikpO1xuXHRcdFx0XHRcdFx0bG9nKFwid2FybmluZ1wiLCBcIltITVJdIFlvdSBuZWVkIHRvIHJlc3RhcnQgdGhlIGFwcGxpY2F0aW9uIVwiKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0bG9nKFwid2FybmluZ1wiLCBcIltITVJdIFVwZGF0ZSBmYWlsZWQ6IFwiICsgbG9nLmZvcm1hdEVycm9yKGVycikpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXHRzZXRJbnRlcnZhbChjaGVja0ZvclVwZGF0ZSwgaG90UG9sbEludGVydmFsKTtcbn0gZWxzZSB7XG5cdHRocm93IG5ldyBFcnJvcihcIltITVJdIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnQgaXMgZGlzYWJsZWQuXCIpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../node_modules/webpack/hot/poll.js?100\n");

/***/ }),

/***/ "@backstage/backend-common":
/*!*************************************************************************************************************************************!*\
  !*** external "/home/ubuntu/rsc/contributions/backstage-changelog-plugin/node_modules/@backstage/backend-common/dist/index.cjs.js" ***!
  \*************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/home/ubuntu/rsc/contributions/backstage-changelog-plugin/node_modules/@backstage/backend-common/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/backend-plugin-api":
/*!*****************************************************************************************************************************************!*\
  !*** external "/home/ubuntu/rsc/contributions/backstage-changelog-plugin/node_modules/@backstage/backend-plugin-api/dist/index.cjs.js" ***!
  \*****************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/home/ubuntu/rsc/contributions/backstage-changelog-plugin/node_modules/@backstage/backend-plugin-api/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/backend-tasks":
/*!************************************************************************************************************************************!*\
  !*** external "/home/ubuntu/rsc/contributions/backstage-changelog-plugin/node_modules/@backstage/backend-tasks/dist/index.cjs.js" ***!
  \************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/home/ubuntu/rsc/contributions/backstage-changelog-plugin/node_modules/@backstage/backend-tasks/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/catalog-client":
/*!*************************************************************************************************************************************!*\
  !*** external "/home/ubuntu/rsc/contributions/backstage-changelog-plugin/node_modules/@backstage/catalog-client/dist/index.cjs.js" ***!
  \*************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/home/ubuntu/rsc/contributions/backstage-changelog-plugin/node_modules/@backstage/catalog-client/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/catalog-model":
/*!************************************************************************************************************************************!*\
  !*** external "/home/ubuntu/rsc/contributions/backstage-changelog-plugin/node_modules/@backstage/catalog-model/dist/index.cjs.js" ***!
  \************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/home/ubuntu/rsc/contributions/backstage-changelog-plugin/node_modules/@backstage/catalog-model/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/errors":
/*!*****************************************************************************************************************************!*\
  !*** external "/home/ubuntu/rsc/contributions/backstage-changelog-plugin/node_modules/@backstage/errors/dist/index.cjs.js" ***!
  \*****************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/home/ubuntu/rsc/contributions/backstage-changelog-plugin/node_modules/@backstage/errors/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-app-backend":
/*!*****************************************************************************************************************************************!*\
  !*** external "/home/ubuntu/rsc/contributions/backstage-changelog-plugin/node_modules/@backstage/plugin-app-backend/dist/index.cjs.js" ***!
  \*****************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/home/ubuntu/rsc/contributions/backstage-changelog-plugin/node_modules/@backstage/plugin-app-backend/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-auth-backend":
/*!******************************************************************************************************************************************!*\
  !*** external "/home/ubuntu/rsc/contributions/backstage-changelog-plugin/node_modules/@backstage/plugin-auth-backend/dist/index.cjs.js" ***!
  \******************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/home/ubuntu/rsc/contributions/backstage-changelog-plugin/node_modules/@backstage/plugin-auth-backend/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-auth-node":
/*!***************************************************************************************************************************************!*\
  !*** external "/home/ubuntu/rsc/contributions/backstage-changelog-plugin/node_modules/@backstage/plugin-auth-node/dist/index.cjs.js" ***!
  \***************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/home/ubuntu/rsc/contributions/backstage-changelog-plugin/node_modules/@backstage/plugin-auth-node/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-catalog-backend":
/*!*********************************************************************************************************************************************!*\
  !*** external "/home/ubuntu/rsc/contributions/backstage-changelog-plugin/node_modules/@backstage/plugin-catalog-backend/dist/index.cjs.js" ***!
  \*********************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/home/ubuntu/rsc/contributions/backstage-changelog-plugin/node_modules/@backstage/plugin-catalog-backend/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-permission-node":
/*!*********************************************************************************************************************************************!*\
  !*** external "/home/ubuntu/rsc/contributions/backstage-changelog-plugin/node_modules/@backstage/plugin-permission-node/dist/index.cjs.js" ***!
  \*********************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/home/ubuntu/rsc/contributions/backstage-changelog-plugin/node_modules/@backstage/plugin-permission-node/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-proxy-backend":
/*!*******************************************************************************************************************************************!*\
  !*** external "/home/ubuntu/rsc/contributions/backstage-changelog-plugin/node_modules/@backstage/plugin-proxy-backend/dist/index.cjs.js" ***!
  \*******************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/home/ubuntu/rsc/contributions/backstage-changelog-plugin/node_modules/@backstage/plugin-proxy-backend/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-scaffolder-backend":
/*!************************************************************************************************************************************************!*\
  !*** external "/home/ubuntu/rsc/contributions/backstage-changelog-plugin/node_modules/@backstage/plugin-scaffolder-backend/dist/index.cjs.js" ***!
  \************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/home/ubuntu/rsc/contributions/backstage-changelog-plugin/node_modules/@backstage/plugin-scaffolder-backend/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-search-backend-node":
/*!*************************************************************************************************************************************************!*\
  !*** external "/home/ubuntu/rsc/contributions/backstage-changelog-plugin/node_modules/@backstage/plugin-search-backend-node/dist/index.cjs.js" ***!
  \*************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/home/ubuntu/rsc/contributions/backstage-changelog-plugin/node_modules/@backstage/plugin-search-backend-node/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-search-backend":
/*!********************************************************************************************************************************************!*\
  !*** external "/home/ubuntu/rsc/contributions/backstage-changelog-plugin/node_modules/@backstage/plugin-search-backend/dist/index.cjs.js" ***!
  \********************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/home/ubuntu/rsc/contributions/backstage-changelog-plugin/node_modules/@backstage/plugin-search-backend/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-techdocs-backend":
/*!**********************************************************************************************************************************************!*\
  !*** external "/home/ubuntu/rsc/contributions/backstage-changelog-plugin/node_modules/@backstage/plugin-techdocs-backend/dist/index.cjs.js" ***!
  \**********************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/home/ubuntu/rsc/contributions/backstage-changelog-plugin/node_modules/@backstage/plugin-techdocs-backend/dist/index.cjs.js");

/***/ }),

/***/ "dockerode":
/*!*****************************************************************************************************************!*\
  !*** external "/home/ubuntu/rsc/contributions/backstage-changelog-plugin/node_modules/dockerode/lib/docker.js" ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/home/ubuntu/rsc/contributions/backstage-changelog-plugin/node_modules/dockerode/lib/docker.js");

/***/ }),

/***/ "express-promise-router":
/*!**********************************************************************************************************************************************!*\
  !*** external "/home/ubuntu/rsc/contributions/backstage-changelog-plugin/node_modules/express-promise-router/lib/express-promise-router.js" ***!
  \**********************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/home/ubuntu/rsc/contributions/backstage-changelog-plugin/node_modules/express-promise-router/lib/express-promise-router.js");

/***/ }),

/***/ "express":
/*!**********************************************************************************************************!*\
  !*** external "/home/ubuntu/rsc/contributions/backstage-changelog-plugin/node_modules/express/index.js" ***!
  \**********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/home/ubuntu/rsc/contributions/backstage-changelog-plugin/node_modules/express/index.js");

/***/ }),

/***/ "fs-extra":
/*!***************************************************************************************************************!*\
  !*** external "/home/ubuntu/rsc/contributions/backstage-changelog-plugin/node_modules/fs-extra/lib/index.js" ***!
  \***************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/home/ubuntu/rsc/contributions/backstage-changelog-plugin/node_modules/fs-extra/lib/index.js");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("f621322c323eff196fe2")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = __webpack_require__.hmrS_require = __webpack_require__.hmrS_require || {
/******/ 			"main": 1
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no chunk install function needed
/******/ 		
/******/ 		// no chunk loading
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			var update = require("./" + __webpack_require__.hu(chunkId));
/******/ 			var updatedModules = update.modules;
/******/ 			var runtime = update.runtime;
/******/ 			for(var moduleId in updatedModules) {
/******/ 				if(__webpack_require__.o(updatedModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = updatedModules[moduleId];
/******/ 					if(updatedModulesList) updatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 		}
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.requireHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.require = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.require = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.requireHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = function() {
/******/ 			return Promise.resolve().then(function() {
/******/ 				return require("./" + __webpack_require__.hmrF());
/******/ 			})['catch'](function(err) { if(err.code !== 'MODULE_NOT_FOUND') throw err; });
/******/ 		}
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("../../node_modules/webpack/hot/poll.js?100");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;