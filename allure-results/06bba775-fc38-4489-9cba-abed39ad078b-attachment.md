# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Erfolgreicher Login mit Fixture
- Location: tests/login.spec.ts:42:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('link', { name: /anmelden|login|Se connecter/i })

```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | 
  3  | export class LoginPage {
  4  |   readonly page: Page;
  5  |   readonly connectLink: Locator;
  6  |   readonly emailInput: Locator;
  7  |   readonly passwordInput: Locator;
  8  |   readonly submitButton: Locator;
  9  | 
  10 |   constructor(page: Page) {
  11 |     this.page = page;
  12 |     this.connectLink = page.getByRole('link', { name: /anmelden|login|Se connecter/i });
  13 |     this.emailInput = page.getByLabel('Email');
  14 |     this.passwordInput = page.getByLabel('Mot de passe');
  15 | //this.connectLink = page.getByRole('link', { name: /anmelden|login|se connecter/i });
  16 |     this.submitButton = page.getByRole('button', { name: /anmelden|login|se connecter|einloggen/i });
  17 |   }
  18 | 
  19 |   async goto() {
  20 |     await this.page.goto('https://autosn.online');
  21 |   }
  22 | 
  23 |   async login(email: string, pass: string) {
> 24 |     await this.connectLink.click();
     |                            ^ Error: locator.click: Target page, context or browser has been closed
  25 |     await this.emailInput.fill(email);
  26 |     await this.passwordInput.fill(pass);
  27 |     await this.submitButton.click();
  28 |   }
  29 | }
```