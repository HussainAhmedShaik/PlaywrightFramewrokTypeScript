import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
import * as path from 'path';
const now: Date = new Date();

const timestamp: string =
  `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}_` +
  `${String(now.getHours()).padStart(2, '0')}-${String(now.getMinutes()).padStart(2, '0')}-${String(now.getSeconds()).padStart(2, '0')}`;

console.log(timestamp);

// Load the env file for the active environment.
// Defaults to "dev" — run with ENV=qa npm test (or one of the npm scripts) to switch.
const environment = process.env.ENV || 'qa';
dotenv.config({ path: path.resolve(__dirname, `env/.env.${environment}`) });

export default defineConfig({
  testDir: './tests',
 
  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,
  
  
 
  reporter: [
  [
    'html',
    {
      outputFolder: `./reports/Test-report-${timestamp}`,
      open: 'never',
    },
  ],
  [
    'allure-playwright',
    {
      outputFolder: `./allure-results/${timestamp}`,
    },
  ],
],
  
  use: {
  baseURL: process.env.BASE_URL,
  headless: process.env.CI ? true : false,
  screenshot: "only-on-failure",
  video: "retain-on-failure",
  trace: "on-first-retry",
  viewport: { width: 1920, height: 1080 },
  ignoreHTTPSErrors: true,
  actionTimeout: 30000,
  navigationTimeout: 60000
},

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
