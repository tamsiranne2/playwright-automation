# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Erfolgreiche Registrierung mit Fixture
- Location: tests/login.spec.ts:56:5

# Error details

```
TypeError: authPage.goto is not a function
```

# Test source

```ts
  1  | import { test as base } from '@playwright/test';
  2  | //import { LoginPage } from '../pages/LoginPage';
  3  | import { AuthPage } from '../pages/AuthPage';
  4  | 
  5  | // 1. Definiere den Typ für deine Fixtures
  6  | type MyFixtures = {
  7  |   //loginPage: LoginPage;
  8  |   authPage: AuthPage;
  9  | };
  10 | 
  11 | // 2. Erweitere das Basis-'test'
  12 | export const test = base.extend<MyFixtures>({
  13 |   //loginPage: async ({ page }, use) => {
  14 |   authPage: async ({ page }, use) => {
  15 |     // SETUP: Erstelle die Instanz
  16 |     //const loginPage = new LoginPage(page);
  17 |     const authPage = new AuthPage(page);
  18 |     
  19 |     // Automatisch die Seite öffnen, bevor der Test startet
> 20 |     await authPage.goto();
     |                    ^ TypeError: authPage.goto is not a function
  21 |     
  22 |     // Bereitstellen für den Test
  23 |     //await use(loginPage);
  24 |     await use(authPage);
  25 |     
  26 |     // TEARDOWN: Hier könnte optional Aufräumcode stehen
  27 |   },
  28 | });
  29 | 
  30 | export { expect } from '@playwright/test';
```