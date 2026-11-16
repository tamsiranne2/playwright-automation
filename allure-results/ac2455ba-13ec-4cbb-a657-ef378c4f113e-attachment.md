# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Erfolgreiche Registrierung mit Fixture
- Location: tests/login.spec.ts:56:5

# Error details

```
Error: locator.fill: value: expected string, got undefined
```

# Page snapshot

```yaml
- generic [ref=f4e2]:
  - region "Notifications (F8)":
    - list
  - region "Notifications alt+T"
  - generic [ref=f4e4]:
    - generic [ref=f4e5]:
      - heading "AutoSN" [level=3] [ref=f4e6]
      - paragraph [ref=f4e7]: Se connecter
    - generic [ref=f4e9]:
      - tablist [ref=f4e10]:
        - tab "Se connecter" [ref=f4e11] [cursor=pointer]
        - tab "S'inscrire" [selected] [ref=f4e12] [cursor=pointer]
      - tabpanel "S'inscrire" [ref=f4e13]:
        - generic [ref=f4e14]:
          - generic [ref=f4e15]:
            - text: Email
            - textbox "Email" [ref=f4e16]:
              - /placeholder: your@email.com
              - text: Testuser@gmail.com
          - generic [ref=f4e17]:
            - text: Numéro de téléphone
            - textbox "Numéro de téléphone" [ref=f4e18]:
              - /placeholder: +221 77 123 45 67
          - generic [ref=f4e19]:
            - text: Mot de passe
            - textbox "Mot de passe" [active] [ref=f4e20]:
              - /placeholder: ••••••••
              - text: "0017567345612"
          - button "Créer un compte" [ref=f4e21] [cursor=pointer]
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
  14 |     readonly createAccountButton: Locator;
  15 |     readonly signUpNameInput: Locator;
  16 |     readonly signUpPhoneInput: Locator;
  17 | 
  18 |     constructor(page: Page) {
  19 |         this.page = page;
  20 |         //this.connectLink = page.locator('a[href="/auth"]');
  21 |         this.emailInput = page.locator('#signin-email');
  22 |         this.passwordInput = page.locator('#signin-password');
  23 |         this.signInTab = page.getByRole('tab', { name: 'Se connecter' });
  24 | 
  25 |         this.signUpTab = page.getByRole('tab', { name: "S'inscrire" });
  26 |         this.signInButton = page.getByRole('tabpanel', { name: 'Se connecter' })
  27 |             .getByRole('button', { name: 'Se connecter' });
  28 |         // Korrigiere den Locator von 'tabpanel' auf 'tab' oder 'button'
  29 |         //this.signInTab = page.getByRole('tab', { name: 'Se connecter' });     
  30 |         this.signUpEmailInput = page.locator('#signup-email');
  31 |         this.signUpPasswordInput = page.locator('#signup-password');
  32 |         this.signUpButton = page.getByRole('tabpanel', { name: "S'inscrire" })
  33 |             .getByRole('button', { name: "S'inscrire" });
  34 |         //this.signUpNameInput = page.locator('#signup-name');
  35 |         this.signUpPhoneInput = page.locator('#signup-phone');
  36 |         this.createAccountButton = page.getByRole('button', { name: 'Créer un compte' });
  37 |     }
  38 |     async goto() {
  39 |         await this.page.goto('https://autosn.online/auth');
  40 |     }
  41 | 
  42 |     async openSignIn(): Promise<void> {
  43 |         //await this.connectLink.click();
  44 |         await this.signInTab.click();
  45 |     }
  46 | 
  47 |     async openSignUp(): Promise<void> {
  48 |         await this.signUpTab.click();
  49 |     }
  50 | 
  51 |     async signIn(email: string, password: string): Promise<void> {
  52 |         await this.emailInput.fill(email);
  53 |         await this.passwordInput.fill(password);
  54 |         await this.signInButton.click();
  55 |     }
  56 | 
  57 |     async signUp(email: string, password: string, name: string, phone: string): Promise<void> {
  58 |         await this.signUpTab.click();
  59 |         await this.signUpEmailInput.fill(email);
  60 |         await this.signUpPasswordInput.fill(password);
  61 |         //await this.signUpNameInput.fill(name);
> 62 |         await this.signUpPhoneInput.fill(phone);
     |                                     ^ Error: locator.fill: value: expected string, got undefined
  63 |         //await this.signUpButton.click();
  64 |         await this.createAccountButton.click();
  65 |     }
  66 | }
  67 | 
```