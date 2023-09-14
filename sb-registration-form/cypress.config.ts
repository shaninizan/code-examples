import { loadEnvConfig } from '@next/env';
import { defineConfig } from 'cypress';

const { combinedEnv } = loadEnvConfig(process.cwd());
export default defineConfig({
  env: combinedEnv,
  e2e: {
    baseUrl: 'http://localhost:3000',
    experimentalStudio: true,
    retries: {
      runMode: 3,
    },
    screenshotOnRunFailure: true,
    video: true,
  },

  // component: {
  //   devServer: {
  //     framework: 'create-react-app',
  //     bundler: 'webpack',
  //   },
  //   setupNodeEvents(on, config) {
  //     require('@cypress/code-coverage/task')(on, config);

  //     return config;
  //   },
  // },
});
