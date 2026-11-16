# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Erfolgreiche Registrierung mit Fixture
- Location: tests/login.spec.ts:59:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: 'Tableau de bord vendeur' })
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByRole('heading', { name: 'Tableau de bord vendeur' }) with timeout 5000ms
  - waiting for getByRole('heading', { name: 'Tableau de bord vendeur' })
  - Target page, context or browser has been closed

```

```yaml
- region "Notifications (F8)":
  - list
- region "Notifications alt+T":
  - list:
    - listitem:
      - img
      - text: Cet email est déjà enregistré. Veuillez vous connecter.
- heading "AutoSN" [level=3]
- paragraph: Se connecter
- tablist:
  - tab "Se connecter"
  - tab "S'inscrire" [selected]
- tabpanel "S'inscrire":
  - text: Email
  - textbox "Email":
    - /placeholder: your@email.com
    - text: Testuser3@gmail.com
  - text: Numéro de téléphone
  - textbox "Numéro de téléphone":
    - /placeholder: +221 77 123 45 67
    - text: "0017567345612"
  - text: Mot de passe
  - textbox "Mot de passe":
    - /placeholder: ••••••••
    - text: TestAI13!
  - button "Créer un compte"
```

# Test source

```ts
  1  | //1. 
  2  | /** ohne POM ganz einfach alles im Test was nicht empfehlenswert ist
  3  | - import { test, expect } from '@playwright/test';
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
  24 | // Nun mit dem POM aber noch ohne den Fixtures files.. falls fixture genutzt wird muss das folgende Block auskommentiert with POM
  25 | /** 
  26 | import { test, expect } from '@playwright/test';
  27 | // In deinen Testdateien:
  28 | 
  29 | import { LoginPage } from '../pages/LoginPage';
  30 | 
  31 | test('Login Test', async ({ page }) => {
  32 |   
  33 |    const loginPage = new LoginPage(page);
  34 |   
  35 |   await loginPage.goto();
  36 |   await loginPage.login('tamsir.anne@hotmail.de', 'Epm27?!.');
  37 | 
  38 |   await expect(page.getByRole('heading', { name: 'Tableau de bord' })).toBeVisible();
  39 | });
  40 | **/
  41 | 
  42 | //3. 
  43 | // mit fixtures
  44 | import { test, expect } from '../fixtures/fixtAuthPage'; // Lädt deine eigene Version inklusive Fixtures!
  45 | 
  46 | // WICHTIG: Überschreibt den globalen storageState aus der playwright.config.ts,
  47 | // damit diese Tests ausgeloggt starten und Login/Registrierung überhaupt testen können.
  48 | test.use({ storageState: { cookies: [], origins: [] } });
  49 | 
  50 | //test('Erfolgreicher Login mit Fixture', async ({ loginPage, page }) => {
  51 | test('Erfolgreicher Login mit Fixture', async ({ authPage, page }) => {
  52 |   // goto() wird bereits automatisch durch die Fixture aufgerufen
  53 |   await authPage.openSignIn();
  54 |   await authPage.signIn('tamsir.anne@hotmail.de', 'Epm27?!.');
  55 | 
  56 |   await expect(page.getByRole('heading', { name: 'Tableau de bord vendeur' })).toBeVisible();
  57 | });
  58 | 
  59 | test('Erfolgreiche Registrierung mit Fixture', async ({ authPage, page }) => {
  60 |   // Kein erneutes await authPage.goto() nötig, da die Fixture die Seite schon geöffnet hat
  61 |   await authPage.openSignUp();
  62 |   
  63 |   // Reihenfolge beachten: (email, password, phone)
  64 |   await authPage.signUp('Testuser3@gmail.com', 'TestAI13!', '0017567345612');
  65 | 
> 66 |   await expect(page.getByRole('heading', { name: 'Tableau de bord vendeur' })).toBeVisible();
     |                                                                                ^ Error: expect(locator).toBeVisible() failed
  67 | });
```