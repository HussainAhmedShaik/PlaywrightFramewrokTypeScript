# Playwright TypeScript Automation Framework

A scalable UI automation framework built with **Playwright** and **TypeScript**, following the **Page Object Model (POM)** design pattern with reusable fixtures, environment-based configuration, logging support, and reporting capabilities.

---

## Project Overview

This framework is designed to provide:

* Cross-browser web automation testing
* Environment-specific execution (DEV / QA)
* Page Object Model architecture
* Reusable Playwright fixtures
* Logging and debugging support
* OTP authentication utilities
* HTML and Allure reporting

---

## Technology Stack

| Technology    | Purpose                 |
| ------------- | ----------------------- |
| Playwright    | UI Automation           |
| TypeScript    | Programming Language    |
| Allure Report | Advanced Test Reporting |
| Dotenv        | Environment Management  |
| Winston       | Logging                 |
| Otplib        | OTP/TOTP Authentication |
| Cross-env     | Environment Switching   |

---

## Project Structure

```text
playwright-typescript-framework
│
├── env
│   ├── .env.dev
│   └── .env.qa
│
├── src
│   │
│   ├── fixtures
│   │   ├── index.ts
│   │   └── login.fixture.ts
│   │
│   ├── Pages
│   │   └── LoginPage.ts
│   │
│   ├── utils
│   │   ├── base_page.ts
│   │   └── logger.ts
│   │
│   └── tests
│       └── login.specs.ts
│
├── playwright.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

## Framework Design

### Page Object Model (POM)

All page-specific locators and actions are maintained inside the `Pages` folder.

Example:

```typescript
const loginPage = new LoginPage(page);

await loginPage.login(username, password);
```

Benefits:

* Better maintainability
* Reduced code duplication
* Reusable page actions
* Easy scalability

---

### Fixtures

Reusable fixtures are available inside:

```text
src/fixtures
```

Fixtures help manage:

* Browser initialization
* Authentication setup
* Common test data
* Shared test utilities

Example:

```typescript
import { test } from '../fixtures';
```

---

### Utilities

The `utils` folder contains reusable helper classes.

#### Base Page

```text
src/utils/base_page.ts
```

Provides common page methods such as:

* Click
* Fill
* Wait
* Navigation
* Element interaction

#### Logger

```text
src/utils/logger.ts
```

Provides centralized logging using Winston.

Example:

```typescript
logger.info("Login started");
logger.error("Login failed");
```

---

## Environment Configuration

Environment variables are maintained under:

```text
env/.env.dev
env/.env.qa
```

### Example

```env
BASE_URL=https://example.com

USERNAME=testuser

PASSWORD=password

OTP_SECRET=YOUR_SECRET
```

Framework execution is controlled using the `ENV` variable.

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd playwright-typescript-framework
```

### Install Dependencies

```bash
npm install
```

### Install Playwright Browsers

```bash
npx playwright install
```

---

## Running Tests

### DEV Environment

```bash
npm run test:dev
```

or

```bash
npm test
```

### QA Environment

```bash
npm run test:qa
```

---

## Execution Modes

### Headed Mode

DEV:

```bash
npm run test:headed-dev
```

QA:

```bash
npm run test:headed-qa
```

### Debug Mode

```bash
npm run test:debug
```

### Playwright UI Mode

```bash
npm run test:ui
```

### Chromium Only

```bash
npm run test:chromium
```

---

## Reports

### Playwright HTML Report

Open generated report:

```bash
npm run report
```

---

### Allure Report

Generate report:

```bash
npm run allure:generate
```

Open report:

```bash
npm run allure:open
```

Serve report:

```bash
npm run allure:serve
```

---

## Sample Test

```typescript
import { test, expect } from '../fixtures';

test('Verify Login', async ({ loginPage }) => {
  await loginPage.login();
  await expect(loginPage.dashboard).toBeVisible();
});
```

---

## Best Practices

* Follow Page Object Model.
* Keep locators inside page classes.
* Avoid hardcoded test data.
* Store credentials in `.env` files.
* Use fixtures for reusable setup.
* Use logging for troubleshooting.
* Generate reports after every execution.
* Keep tests independent and atomic.

---

## Available Commands

| Command                 | Description                      |
| ----------------------- | -------------------------------- |
| npm test                | Run tests in DEV                 |
| npm run test:dev        | Run tests in DEV                 |
| npm run test:qa         | Run tests in QA                  |
| npm run test:headed-dev | Run DEV tests in headed mode     |
| npm run test:headed-qa  | Run QA tests in headed mode      |
| npm run test:debug      | Debug execution                  |
| npm run test:ui         | Playwright UI Mode               |
| npm run test:chromium   | Chromium-only execution          |
| npm run report          | Open Playwright Report           |
| npm run allure:generate | Generate Allure Report           |
| npm run allure:open     | Open Allure Report               |
| npm run allure:serve    | Generate and Serve Allure Report |

---

## Future Enhancements

* API Testing Support
* Database Validation
* Parallel Execution Optimization
* CI/CD Integration (GitHub Actions / Jenkins)
* Docker Support
* Cross-Browser Matrix Execution
* Test Data Management Framework

---

## Author
Shaik Hussain Ahmed

Automation Framework built using Playwright + TypeScript following modern test automation best practices.
