import { backstagePluginChangelogPlugin } from './plugin';

describe('backstage-plugin-changelog', () => {
  it('should export plugin', () => {
    expect(backstagePluginChangelogPlugin).toBeDefined();
  });
});
