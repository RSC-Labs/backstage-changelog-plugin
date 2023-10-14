import {
    createRouter,
  } from '@rsc-labs/backstage-changelog-plugin-backend'
  import { Router } from 'express';
  import { PluginEnvironment } from '../types';
  
  export default async function createPlugin(
    env: PluginEnvironment,
  ): Promise<Router> {
    return await createRouter({
      discovery: env.discovery,
      tokenManager: env.tokenManager,
      logger: env.logger,
      reader: env.reader
    });
  }