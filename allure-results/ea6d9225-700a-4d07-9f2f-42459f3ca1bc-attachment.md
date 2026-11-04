# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Login Test
- Location: tests/login.spec.ts:30:5

# Error details

```
ReferenceError: loginPage is not defined
```

# Test source

```ts
  1  | /** ohne POM import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Authentication Flow', () => {
  4  |   test('should allow user to log in with valid credentials', async ({ page }) => {
  5  |     // 1. Navigation zu einer echten Test-Webseite
  6  |     await page.goto('https://autosn.online');
  7  |     await page.getByRole('link', { name: 'Se connecter' }).click();
  8  | 
  9  |     // 2. Interaktionen mit den echten Locators der Seite
  10 |     await page.getByLabel('email').fill('tamsir.anne@hotmail.de');
  11 |     await page.getByLabel('Mot de passe').fill('Epm27?!.');
  12 |     await page.getByRole('button', { name: 'Se connecter' }).click();
  13 |    
  14 | 
  15 |     // 3. Web-first Assertion
  16 |     await expect(page.getByRole('heading', { name: 'Tableau de bord vendeur'})).toBeVisible();
  17 |   });
  18 | });
  19 | **/
  20 | // Nun with POM
  21 | //jetzt mit POM und Fixture file
  22 | import { test, expect } from '@playwright/test';
  23 | // In deinen Testdateien:
  24 | 
  25 | //import { LoginPage } from '../pages/LoginPage';
  26 | 
  27 | 
  28 | 
  29 | //ohne fixtures 
  30 | test('Login Test', async ({ page }) => {
  31 |   // auskommentiert weil jetzt fixture genutztwird
  32 |   // const loginPage = new LoginPage(page);
  33 |   
> 34 |   await loginPage.goto();
     |   ^ ReferenceError: loginPage is not defined
  35 |   await loginPage.login('tamsir.anne@hotmail.de', 'Epm27?!.');
  36 | 
  37 |   await expect(page.getByRole('heading', { name: 'Tableau de bord' })).toBeVisible();
  38 | });
  39 | 
  40 | //mit fixtures
  41 | /*import { test, expect } from '../fixtures/fixtLoginPage'; // Lädt deine eigene Version inklusive Fixtures!
  42 | test('Erfolgreicher Login mit Fixture', async ({ loginPage, page }) => {
  43 |   await loginPage.goto();
  44 |   await loginPage.login('tamsir.anne@hotmail.de', 'Epm27?!.');
  45 | 
  46 |   await expect(page.getByRole('heading', { name: 'Tableau de bord' })).toBeVisible();
  47 | });*/
```