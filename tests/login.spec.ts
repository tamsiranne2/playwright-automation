//1. 
/** ohne POM ganz einfach alles im Test was nicht empfehlenswert ist
- import { test, expect } from '@playwright/test';

test.describe('Authentication Flow', () => {
  test('should allow user to log in with valid credentials', async ({ page }) => {
    // 1. Navigation zu einer echten Test-Webseite
    await page.goto('https://autosn.online');
    await page.getByRole('link', { name: 'Se connecter' }).click();

    // 2. Interaktionen mit den echten Locators der Seite
    await page.getByLabel('email').fill('tamsir.anne@hotmail.de');
    await page.getByLabel('Mot de passe').fill('Epm27?!.');
    await page.getByRole('button', { name: 'Se connecter' }).click();
   

    // 3. Web-first Assertion
    await expect(page.getByRole('heading', { name: 'Tableau de bord vendeur'})).toBeVisible();
  });
});
**/

//2.
// Nun mit dem POM aber noch ohne den Fixtures files.. falls fixture genutzt wird muss das folgende Block auskommentiert with POM
/** 
import { test, expect } from '@playwright/test';
// In deinen Testdateien:

import { LoginPage } from '../pages/LoginPage';

test('Login Test', async ({ page }) => {
  
   const loginPage = new LoginPage(page);
  
  await loginPage.goto();
  await loginPage.login('tamsir.anne@hotmail.de', 'Epm27?!.');

  await expect(page.getByRole('heading', { name: 'Tableau de bord' })).toBeVisible();
});
**/

//3. 
// mit fixtures
import { test, expect } from '../fixtures/fixtAuthPage'; // Lädt deine eigene Version inklusive Fixtures!

// WICHTIG: Überschreibt den globalen storageState aus der playwright.config.ts,
// damit diese Tests ausgeloggt starten und Login/Registrierung überhaupt testen können.
test.use({ storageState: { cookies: [], origins: [] } });

//test('Erfolgreicher Login mit Fixture', async ({ loginPage, page }) => {
test('Erfolgreicher Login mit Fixture', async ({ authPage, page }) => {
  // goto() wird bereits automatisch durch die Fixture aufgerufen
  await authPage.openSignIn();
  await authPage.signIn('tamsir.anne@hotmail.de', 'Epm27?!.');

  await expect(page.getByRole('heading', { name: 'Tableau de bord vendeur' })).toBeVisible();
});

test('Erfolgreiche Registrierung mit Fixture', async ({ authPage, page }) => {
  // Kein erneutes await authPage.goto() nötig, da die Fixture die Seite schon geöffnet hat
  await authPage.openSignUp();
  
  // Reihenfolge beachten: (email, password, phone)
  const email = `Testuser3+${Date.now()}@gmail.com`;
  await authPage.signUp(email, 'TestAI13!', '0017567345612');

  await expect(page.getByRole('heading', { name: 'Tableau de bord vendeur' })).toBeVisible({ timeout: 15000 });
});