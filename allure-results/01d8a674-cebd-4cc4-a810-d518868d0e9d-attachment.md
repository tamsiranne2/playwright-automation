# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dashboard.spec.ts >> Direkter Zugriff auf das Dashboard ohne Login-Wiederholung
- Location: tests/dashboard.spec.ts:7:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: 'Tableau de bord vendeur' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByRole('heading', { name: 'Tableau de bord vendeur' }) with timeout 5000ms
  - waiting for getByRole('heading', { name: 'Tableau de bord vendeur' })

```

```yaml
- region "Notifications (F8)":
  - list
- region "Notifications alt+T"
- heading "AutoSN" [level=3]
- paragraph: Se connecter
- tablist:
  - tab "Se connecter" [selected]
  - tab "S'inscrire"
- tabpanel "Se connecter":
  - text: Email
  - textbox "Email":
    - /placeholder: your@email.com
  - text: Mot de passe
  - textbox "Mot de passe":
    - /placeholder: ••••••••
  - button "Se connecter"
```

# Test source

```ts
  1  | //import { test, expect } from '@playwright/test';
  2  | 
  3  | import { test } from "../fixtures/fixtAuthPage";
  4  | import { expect } from '@playwright/test';
  5  | 
  6  | //test('Direkter Zugriff auf das Dashboard ohne Login-Wiederholung', async ({ page }) => {
  7  | test('Direkter Zugriff auf das Dashboard ohne Login-Wiederholung', async ({ page}) => {
  8  |   // Gehe explizit auf die Dashboard-URL oder lade die Seite neu, 
  9  |   // damit der gespeicherte StorageState (Cookies) im Browser greift.
  10 |   await page.goto('/dashboard'); // Oder '/vendeur' bzw. die genaue URL deines Dashboards
  11 | 
  12 |   // Jetzt sollte die Überschrift da sein
> 13 |   await expect(page.getByRole('heading', { name: 'Tableau de bord vendeur' })).toBeVisible();
     |                                                                                ^ Error: expect(locator).toBeVisible() failed
  14 | });
```