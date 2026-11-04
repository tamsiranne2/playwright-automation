//1. 
/** ohne POM ganz einfach alles im Test was nicht empfehlenswert ist
 * import { test, expect } from '@playwright/test';

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
// Nun mit dem POM aber noch ohne den Fixtures files.. fails fixture genutzt wird muss das folgende Block auskommentiert with POM
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
//mit fixtures
import { test, expect } from '../fixtures/fixtLoginPage'; // Lädt deine eigene Version inklusive Fixtures!
test('Erfolgreicher Login mit Fixture', async ({ loginPage, page }) => {
  await loginPage.goto();
  await loginPage.login('tamsir.anne@hotmail.de', 'Epm27?!.');

  await expect(page.getByRole('heading', { name: 'Tableau de bord' })).toBeVisible();
});