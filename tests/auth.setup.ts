import { test as setup, expect } from '@playwright/test';
import { AuthPage } from '../pages/AuthPage';

const authFile = 'playwright/.auth/user.json';

setup('authentifizieren und State speichern', async ({ page }) => {
  const authPage = new AuthPage(page);

  // 1. Zur Seite navigieren und den Connect-Link ausführen
  await authPage.goto();

  // 2. Sicherstellen, dass das Login-Tab aktiv ist
  await authPage.openSignIn();

  // 3. E-Mail und Passwort eingeben und absenden
  await authPage.signIn('tamsir.anne@hotmail.de', 'Epm27?!.');

  // 4. Sicherstellen, dass der Login erfolgreich war (Dashboard sichtbar)
  await expect(page.getByRole('heading', { name: 'Tableau de bord vendeur' })).toBeVisible();

  // 5. Den authentifizierten Zustand (Cookies, Tokens etc.) in der JSON-Datei speichern
  await page.context().storageState({ path: authFile });
});