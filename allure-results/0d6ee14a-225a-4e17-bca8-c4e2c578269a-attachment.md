# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dashboard.spec.ts >> Direkter Zugriff auf das Dashboard ohne Login-Wiederholung
- Location: tests/dashboard.spec.ts:6:5

# Error details

```
ReferenceError: expect is not defined
```

# Page snapshot

```yaml
- generic [ref=f7e2]:
  - region "Notifications (F8)":
    - list
  - region "Notifications alt+T"
  - generic [ref=f7e4]:
    - generic [ref=f7e5]:
      - heading "AutoSN" [level=3] [ref=f7e6]
      - paragraph [ref=f7e7]: Se connecter
    - generic [ref=f7e9]:
      - tablist [ref=f7e10]:
        - tab "Se connecter" [selected] [ref=f7e11] [cursor=pointer]
        - tab "S'inscrire" [ref=f7e12] [cursor=pointer]
      - tabpanel "Se connecter" [ref=f7e13]:
        - generic [ref=f7e14]:
          - generic [ref=f7e15]:
            - text: Email
            - textbox "Email" [ref=f7e16]:
              - /placeholder: your@email.com
          - generic [ref=f7e17]:
            - text: Mot de passe
            - textbox "Mot de passe" [ref=f7e18]:
              - /placeholder: ••••••••
          - button "Se connecter" [ref=f7e19] [cursor=pointer]
```

# Test source

```ts
  1  | //import { test, expect } from '@playwright/test';
  2  | 
  3  | import { test } from "../fixtures/fixtAuthPage";
  4  | 
  5  | //test('Direkter Zugriff auf das Dashboard ohne Login-Wiederholung', async ({ page }) => {
  6  | test('Direkter Zugriff auf das Dashboard ohne Login-Wiederholung', async ({ page, authPage }) => {
  7  |   // Gehe explizit auf die Dashboard-URL oder lade die Seite neu, 
  8  |   // damit der gespeicherte StorageState (Cookies) im Browser greift.
  9  |   await authPage.goto('/dashboard'); // Oder '/vendeur' bzw. die genaue URL deines Dashboards
  10 | 
  11 |   // Jetzt sollte die Überschrift da sein
> 12 |   await expect(page.getByRole('heading', { name: 'Tableau de bord vendeur' })).toBeVisible();
     |   ^ ReferenceError: expect is not defined
  13 | });
```