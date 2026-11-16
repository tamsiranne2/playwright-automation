# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Erfolgreicher Login mit Fixture
- Location: tests/login.spec.ts:49:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('tab', { name: 'Se connecter' })
  - operation was aborted: Test timeout of 30000ms exceeded.

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
  27 | 
  28 |     async openSignIn(): Promise<void> {
> 29 |         await this.signInTab.click();
     |                              ^ Error: locator.click: Test timeout of 30000ms exceeded.
  30 |     }
  31 | 
  32 |     async openSignUp(): Promise<void> {
  33 |         await this.signUpTab.click();
  34 |     }
  35 | 
  36 |     async signIn(email: string, password: string): Promise<void> {
  37 |         await this.emailInput.fill(email);
  38 |         await this.passwordInput.fill(password);
  39 |         await this.signInButton.click();
  40 |     }
  41 | 
  42 |     async signUp(email: string, password: string): Promise<void> {
  43 |         await this.signUpTab.click();
  44 |         await this.signUpEmailInput.fill(email);
  45 |         await this.signUpPasswordInput.fill(password);
  46 |         await this.signUpButton.click();
  47 |     }
  48 | }
  49 | 
```