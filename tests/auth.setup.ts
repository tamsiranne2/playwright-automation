import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage'; // Pfad anpassen, falls nötig

const authFile = 'playwright/.auth/user.json';

setup('authentifizieren und State speichern', async ({ page }) => {
  const loginPage = new LoginPage(page);

  // 1. Zur Login-Seite navigieren und einloggen
  await loginPage.goto();
  await loginPage.login('tamsir.anne@hotmail.de', 'Epm27?!.');

  // 2. Sicherstellen, dass der Login erfolgreich war (z.B. Dashboard-Überschrift sichtbar)
  await expect(page.getByRole('heading', { name: 'Tableau de bord vendeur' })).toBeVisible();

  // 3. Den Zustand (Cookies, Tokens etc.) in einer JSON-Datei speichern
  await page.context().storageState({ path: authFile });
});