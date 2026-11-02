import { test, expect } from '@playwright/test';

test('Direkter Zugriff auf das Dashboard ohne Login-Wiederholung', async ({ page }) => {
  // Gehe explizit auf die Dashboard-URL oder lade die Seite neu, 
  // damit der gespeicherte StorageState (Cookies) im Browser greift.
  await page.goto('/dashboard'); // Oder '/vendeur' bzw. die genaue URL deines Dashboards

  // Jetzt sollte die Überschrift da sein
  await expect(page.getByRole('heading', { name: 'Tableau de bord vendeur' })).toBeVisible();
});