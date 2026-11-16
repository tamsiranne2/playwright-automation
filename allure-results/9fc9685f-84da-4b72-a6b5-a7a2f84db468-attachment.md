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
  5  |     readonly connectLink: Locator;
  6  |     readonly emailInput: Locator;
  7  |     readonly passwordInput: Locator;
  8  |     readonly signInTab: Locator;
  9  |     readonly signUpTab: Locator;
  10 |     readonly signInButton: Locator;
  11 |     readonly signUpEmailInput: Locator;
  12 |     readonly signUpPasswordInput: Locator;
  13 |     readonly signUpButton: Locator;
  14 | 
  15 |     constructor(page: Page) {
  16 |         this.page = page;
  17 |         this.connectLink = page.locator('a[href="/auth"]');
  18 |         this.emailInput = page.locator('#signin-email');
  19 |         this.passwordInput = page.locator('#signin-password');
  20 |         this.signInTab = page.getByRole('tab', { name: 'Se connecter' });
  21 |         this.signUpTab = page.getByRole('tab', { name: "S'inscrire" });
  22 |         this.signInButton = page.getByRole('tabpanel', { name: 'Se connecter' })
  23 |             .getByRole('button', { name: 'Se connecter' });
  24 |         // Korrigiere den Locator von 'tabpanel' auf 'tab' oder 'button'
  25 |         //this.signInTab = page.getByRole('tab', { name: 'Se connecter' });     
  26 |         this.signUpEmailInput = page.locator('#signup-email');
  27 |         this.signUpPasswordInput = page.locator('#signup-password');
  28 |         this.signUpButton = page.getByRole('tabpanel', { name: "S'inscrire" })
  29 |             .getByRole('button', { name: "S'inscrire" });
  30 |     }
  31 |     async goto() {
  32 |         await this.page.goto('https://autosn.online');
  33 |     }
  34 | 
  35 |     async openSignIn(): Promise<void> {
> 36 |         await this.signInTab.click();
     |                              ^ Error: locator.click: Target page, context or browser has been closed
  37 |     }
  38 | 
  39 |     async openSignUp(): Promise<void> {
  40 |         await this.signUpTab.click();
  41 |     }
  42 | 
  43 |     async signIn(email: string, password: string): Promise<void> {
  44 |         await this.emailInput.fill(email);
  45 |         await this.passwordInput.fill(password);
  46 |         await this.signInButton.click();
  47 |     }
  48 | 
  49 |     async signUp(email: string, password: string): Promise<void> {
  50 |         await this.signUpTab.click();
  51 |         await this.signUpEmailInput.fill(email);
  52 |         await this.signUpPasswordInput.fill(password);
  53 |         await this.signUpButton.click();
  54 |     }
  55 | }
  56 | 
```