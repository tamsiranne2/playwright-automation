# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Erfolgreiche Registrierung mit Fixture
- Location: tests/login.spec.ts:56:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('tabpanel', { name: 'S\'inscrire' }).getByRole('button', { name: 'S\'inscrire' })
  - operation was aborted: Test timeout of 30000ms exceeded.

```

# Page snapshot

```yaml
- generic [ref=f1e2]:
  - region "Notifications (F8)":
    - list
  - region "Notifications alt+T"
  - generic [ref=f1e4]:
    - generic [ref=f1e5]:
      - heading "AutoSN" [level=3] [ref=f1e6]
      - paragraph [ref=f1e7]: Se connecter
    - generic [ref=f1e9]:
      - tablist [ref=f1e10]:
        - tab "Se connecter" [ref=f1e11] [cursor=pointer]
        - tab "S'inscrire" [selected] [ref=f1e12] [cursor=pointer]
      - tabpanel "S'inscrire" [ref=f1e13]:
        - generic [ref=f1e14]:
          - generic [ref=f1e15]:
            - text: Email
            - textbox "Email" [ref=f1e16]:
              - /placeholder: your@email.com
              - text: Testuser Test001
          - generic [ref=f1e17]:
            - text: Numéro de téléphone
            - textbox "Numéro de téléphone" [ref=f1e18]:
              - /placeholder: +221 77 123 45 67
          - generic [ref=f1e19]:
            - text: Mot de passe
            - textbox "Mot de passe" [active] [ref=f1e20]:
              - /placeholder: ••••••••
              - text: "0017567345612"
          - button "Créer un compte" [ref=f1e21] [cursor=pointer]
```

# Test source

```ts
  1  | import { Locator, Page } from '@playwright/test';
  2  | 
  3  | export class AuthPage {
  4  |     readonly page: Page;
  5  |     //readonly connectLink: Locator;
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
  17 |         //this.connectLink = page.locator('a[href="/auth"]');
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
  32 |         await this.page.goto('https://autosn.online/auth');
  33 |     }
  34 | 
  35 |     async openSignIn(): Promise<void> {
  36 |         //await this.connectLink.click();
  37 |         await this.signInTab.click();
  38 |     }
  39 | 
  40 |     async openSignUp(): Promise<void> {
  41 |         await this.signUpTab.click();
  42 |     }
  43 | 
  44 |     async signIn(email: string, password: string): Promise<void> {
  45 |         await this.emailInput.fill(email);
  46 |         await this.passwordInput.fill(password);
  47 |         await this.signInButton.click();
  48 |     }
  49 | 
  50 |     async signUp(email: string, password: string): Promise<void> {
  51 |         await this.signUpTab.click();
  52 |         await this.signUpEmailInput.fill(email);
  53 |         await this.signUpPasswordInput.fill(password);
> 54 |         await this.signUpButton.click();
     |                                 ^ Error: locator.click: Test timeout of 30000ms exceeded.
  55 |     }
  56 | }
  57 | 
```