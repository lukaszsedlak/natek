import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: 0,
  workers: 2,
  reporter: [ ['html', { open: 'always' }] ],
  use: {
    trace: 'off',
  },
  projects: [
    {
      name: 'login',
    },
  ],
});
