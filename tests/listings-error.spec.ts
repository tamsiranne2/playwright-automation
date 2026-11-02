import { test, expect } from '@playwright/test';

test('Sollte eine Fehlermeldung anzeigen, wenn das Laden der Inserate fehlschlägt (HTTP 500)', async ({ page }) => {
  // 1. Netzwerk-Anfrage für Listings abfangen, BEVOR die Seite geladen wird
  //await page.route('**/rest/v1/listings**', async (route) => {
  await page.route('**/rest/v1/browse**', async (route) => {
    await route.fulfill({
      status: 500,
      contentType: 'application/json',
      body: JSON.stringify({ message: 'Internal Server Error' }),
    });
  });

  // 2. Zur Zielseite navigieren (z. B. Startseite oder Dashboard, wo Inserate geladen werden)
  await page.goto('/browse');

  // 3. Überprüfen, ob das Frontend stabil bleibt und einen Fehlerhinweis anzeigt
  // (Hinweis: Passe den Suchtext / Selektor an den tatsächlichen Text an, den deine App anzeigt)
  await expect(page.getByText(/fehler|error|laden fehlgeschlagen/i)).toBeVisible();
});