import { test, expect } from '@playwright/test';

test('Sollte eine Fehlermeldung anzeigen, wenn das Laden der Inserate fehlschlägt (HTTP 500)', async ({ page }) => {
  
  // 1. Abfangen aller Anfragen, die "browse" oder "listings" im Pfad enthalten
  await page.route('**/*{browse,listings}*', async (route) => {
    console.log('Intercepted API call:', route.request().url());
    await route.fulfill({
      status: 500,
      contentType: 'application/json',
      body: JSON.stringify({ message: 'Internal Server Error' }),
    });
  });

  // 2. Auf die Seite navigieren
  await page.goto('/browse');

  // 3. Auf Fehlermeldung ODER leeren Zustand prüfen
  // Prüfe, welcher Text tatsächlich in der UI gerendert wird
  await expect(page.getByText(/erreur|error|fehler|impossible de charger/i)).toBeVisible();
});