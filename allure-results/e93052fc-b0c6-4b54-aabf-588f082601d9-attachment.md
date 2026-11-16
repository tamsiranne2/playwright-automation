# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Erfolgreiche Registrierung mit Fixture
- Location: tests/login.spec.ts:56:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: 'Tableau de bord vendeur' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByRole('heading', { name: 'Tableau de bord vendeur' }) with timeout 5000ms
  - waiting for getByRole('heading', { name: 'Tableau de bord vendeur' })

```

```yaml
- region "Notifications (F8)":
  - list
- region "Notifications alt+T"
- heading "AutoSN" [level=3]
- paragraph: Se connecter
- tablist:
  - tab "Se connecter"
  - tab "S'inscrire" [selected]
- tabpanel "S'inscrire":
  - text: Email
  - textbox "Email":
    - /placeholder: your@email.com
    - text: Testuser@gmail.com
  - text: Numéro de téléphone
  - textbox "Numéro de téléphone":
    - /placeholder: +221 77 123 45 67
    - text: TestAI13
  - text: Mot de passe
  - textbox "Mot de passe":
    - /placeholder: ••••••••
    - text: "0017567345612"
  - button "Créer un compte"
```

# Test source

```ts
  1  | //1. 
  2  | /** ohne POM ganz einfach alles im Test was nicht empfehlenswert ist
  3  |  * import { test, expect } from '@playwright/test';
  4  | 
  5  | test.describe('Authentication Flow', () => {
  6  |   test('should allow user to log in with valid credentials', async ({ page }) => {
  7  |     // 1. Navigation zu einer echten Test-Webseite
  8  |     await page.goto('https://autosn.online');
  9  |     await page.getByRole('link', { name: 'Se connecter' }).click();
  10 | 
  11 |     // 2. Interaktionen mit den echten Locators der Seite
  12 |     await page.getByLabel('email').fill('tamsir.anne@hotmail.de');
  13 |     await page.getByLabel('Mot de passe').fill('Epm27?!.');
  14 |     await page.getByRole('button', { name: 'Se connecter' }).click();
  15 |    
  16 | 
  17 |     // 3. Web-first Assertion
  18 |     await expect(page.getByRole('heading', { name: 'Tableau de bord vendeur'})).toBeVisible();
  19 |   });
  20 | });
  21 | **/
  22 | 
  23 | //2.
  24 | // Nun mit dem POM aber noch ohne den Fixtures files.. fails fixture genutzt wird muss das folgende Block auskommentiert with POM
  25 | /** 
  26 | import { test, expect } from '@playwright/test';
  27 | // In deinen Testdateien:
  28 | 
  29 | import { LoginPage } from '../pages/LoginPage';
  30 | 
  31 | 
  32 | 
  33 | 
  34 | test('Login Test', async ({ page }) => {
  35 |   
  36 |    const loginPage = new LoginPage(page);
  37 |   
  38 |   await loginPage.goto();
  39 |   await loginPage.login('tamsir.anne@hotmail.de', 'Epm27?!.');
  40 | 
  41 |   await expect(page.getByRole('heading', { name: 'Tableau de bord' })).toBeVisible();
  42 | });
  43 | **/
  44 | 
  45 | //3. 
  46 | //mit fixtures
  47 | import { test, expect } from '../fixtures/fixtAuthPage'; // Lädt deine eigene Version inklusive Fixtures!
  48 | //test('Erfolgreicher Login mit Fixture', async ({ loginPage, page }) => {
  49 | test('Erfolgreicher Login mit Fixture', async ({ authPage, page }) => {
  50 |   await authPage.openSignIn();
  51 |   await authPage.signIn('tamsir.anne@hotmail.de', 'Epm27?!.');
  52 | 
  53 |   await expect(page.getByRole('heading', { name: 'Tableau de bord' })).toBeVisible();
  54 | });
  55 | 
  56 | test('Erfolgreiche Registrierung mit Fixture', async ({ authPage, page }) => {
  57 |   //await authPage.goto();
  58 |   await authPage.goto('https://autosn.online/auth');
  59 | 
  60 |   await authPage.openSignUp();
  61 |   await authPage.signUp('Testuser@gmail.com', '0017567345612',  'TestAI13');
  62 | 
> 63 |   await expect(page.getByRole('heading', { name: 'Tableau de bord vendeur' })).toBeVisible();
     |                                                                                ^ Error: expect(locator).toBeVisible() failed
  64 | });
```