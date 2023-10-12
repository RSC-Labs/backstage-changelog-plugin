import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { backstagePluginChangelogPlugin, EntityChangelogCard } from '../src/plugin';

createDevApp()
  .registerPlugin(backstagePluginChangelogPlugin)
  .addPage({
    element: <EntityChangelogCard />,
    title: 'Root Page',
    path: '/backstage-plugin-changelog'
  })
  .render();
