import { test, expect } from '@playwright/test';

// Hinweis: Für Tests, die den gespeicherten Login-Zustand (storageState) nutzen,
// brauchst du die authPage-Fixture nicht – der Standard-Import reicht aus.
// import { test } from "../fixtures/fixtAuthPage";

test('Direkter Zugriff auf das Dashboard ohne Login-Wiederholung', async ({ page }) => {
  // Gehe explizit auf die Dashboard-URL (relativ zur baseURL 'https://autosn.online'),
  // damit der gespeicherte StorageState (Cookies & LocalStorage) greift.
  await page.goto('/dashboard'); // Falls die Route abweicht, z. B. '/vendeur' eintragen

  // Jetzt sollte die Überschrift ohne erneuten Login sichtbar sein
  await expect(page.getByRole('heading', { name: 'Tableau de bord vendeur' })).toBeVisible();
});