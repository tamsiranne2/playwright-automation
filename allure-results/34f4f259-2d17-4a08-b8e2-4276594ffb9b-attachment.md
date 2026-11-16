# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Erfolgreicher Login mit Fixture
- Location: tests/login.spec.ts:49:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('tab', { name: 'Se connecter' })

```

# Test source

```ts
  1  | import { Locator, Page } from '@playwright/test';
  2  | 
  3  | export class AuthPage {
  4  |     readonly page: Page;
  5  |     readonly emailInput: Locator;
  6  |     readonly passwordInput: Locator;
  7  |     readonly signInTab: Locator;
  8  |     readonly signUpTab: Locator;
  9  |     readonly signInButton: Locator;
  10 |     readonly signUpEmailInput: Locator;
  11 |     readonly signUpPasswordInput: Locator;
  12 |     readonly signUpButton: Locator;
  13 | 
  14 |     constructor(page: Page) {
  15 |         this.page = page;
  16 |         this.emailInput = page.locator('#signin-email');
  17 |         this.passwordInput = page.locator('#signin-password');
  18 |         this.signInTab = page.getByRole('tab', { name: 'Se connecter' });
  19 |         this.signUpTab = page.getByRole('tab', { name: "S'inscrire" });
  20 |         this.signInButton = page.getByRole('tabpanel', { name: 'Se connecter' })
  21 |             .getByRole('button', { name: 'Se connecter' });
  22 |         this.signUpEmailInput = page.locator('#signup-email');
  23 |         this.signUpPasswordInput = page.locator('#signup-password');
  24 |         this.signUpButton = page.getByRole('tabpanel', { name: "S'inscrire" })
  25 |             .getByRole('button', { name: "S'inscrire" });
  26 |     }
  27 |     async goto() {
  28 |         await this.page.goto('https://autosn.online');
  29 |     }
  30 | 
  31 |     async openSignIn(): Promise<void> {
> 32 |         await this.signInTab.click();
     |                              ^ Error: locator.click: Target page, context or browser has been closed
  33 |     }
  34 | 
  35 |     async openSignUp(): Promise<void> {
  36 |         await this.signUpTab.click();
  37 |     }
  38 | 
  39 |     async signIn(email: string, password: string): Promise<void> {
  40 |         await this.emailInput.fill(email);
  41 |         await this.passwordInput.fill(password);
  42 |         await this.signInButton.click();
  43 |     }
  44 | 
  45 |     async signUp(email: string, password: string): Promise<void> {
  46 |         await this.signUpTab.click();
  47 |         await this.signUpEmailInput.fill(email);
  48 |         await this.signUpPasswordInput.fill(password);
  49 |         await this.signUpButton.click();
  50 |     }
  51 | }
  52 | 
```