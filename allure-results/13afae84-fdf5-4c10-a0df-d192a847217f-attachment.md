# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Login Test
- Location: tests/login.spec.ts:30:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: /se connecter/i })
  - operation was aborted: Test timeout of 30000ms exceeded.

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - region "Notifications (F8)":
    - list
  - region "Notifications alt+T"
  - generic [ref=e3]:
    - banner [ref=e5]:
      - generic [ref=e6]:
        - link "AutoSN" [ref=e7] [cursor=pointer]:
          - /url: /
        - navigation [ref=e13]:
          - link "Tableau de bord" [ref=e14] [cursor=pointer]:
            - /url: /dashboard
        - generic [ref=e15]:
          - link "Acheter" [ref=e16] [cursor=pointer]:
            - /url: /browse
          - link "Vendre" [ref=e17] [cursor=pointer]:
            - /url: /dashboard
          - button "Déconnexion" [ref=e18] [cursor=pointer]
          - button [ref=e19] [cursor=pointer]
    - generic [ref=e23]:
      - heading "Achat et vente de voitures d'occasion au Sénégal" [level=1] [ref=e24]
      - paragraph [ref=e25]: Profitez de notre offre d'annonces gratuites. Parcourez notre collection de véhicules premium et trouvez la correspondance parfaite
      - generic [ref=e26]:
        - link "Parcourir les voitures" [ref=e27] [cursor=pointer]:
          - /url: /browse
        - link "Vendre" [ref=e28] [cursor=pointer]:
          - /url: /dashboard
    - generic [ref=e30]:
      - generic [ref=e31]:
        - heading "Voitures en vedette" [level=2] [ref=e32]
        - paragraph [ref=e33]: Découvrez notre sélection de véhicules de qualité
      - generic [ref=e34]:
        - link "Volkswagen Touareg Volkswagen Touareg 2010 17,000,000 CFA 0 km Gasoline Automatic Dakar" [ref=e35] [cursor=pointer]:
          - /url: /car/179a1967-3a25-417f-8bcb-50cdf561a96a
          - generic [ref=e36]:
            - img "Volkswagen Touareg" [ref=e38]
            - generic [ref=e39]:
              - generic [ref=e40]:
                - generic [ref=e41]:
                  - heading "Volkswagen Touareg" [level=3] [ref=e42]
                  - paragraph [ref=e43]: "2010"
                - generic [ref=e44]: 17,000,000 CFA
              - generic [ref=e45]:
                - generic [ref=e46]: 0 km
                - generic [ref=e51]: Gasoline
                - generic [ref=e56]: Automatic
            - paragraph [ref=e61]: Dakar
        - link "mercedes VAN mercedes VAN 2010 17,000,000 CFA 200,000 km Gasoline Automatic DAKAR" [ref=e62] [cursor=pointer]:
          - /url: /car/3b8859ae-fdee-4e32-908c-37213a1e56c5
          - generic [ref=e63]:
            - img "mercedes VAN" [ref=e65]
            - generic [ref=e66]:
              - generic [ref=e67]:
                - generic [ref=e68]:
                  - heading "mercedes VAN" [level=3] [ref=e69]
                  - paragraph [ref=e70]: "2010"
                - generic [ref=e71]: 17,000,000 CFA
              - generic [ref=e72]:
                - generic [ref=e73]: 200,000 km
                - generic [ref=e78]: Gasoline
                - generic [ref=e83]: Automatic
            - paragraph [ref=e88]: DAKAR
        - link "porsche Cayenne porsche Cayenne 2014 18,500,000 CFA 180,000 km Gasoline Automatic Thies" [ref=e89] [cursor=pointer]:
          - /url: /car/afa82fa3-4240-43cf-9e09-6998b1649614
          - generic [ref=e90]:
            - img "porsche Cayenne" [ref=e92]
            - generic [ref=e93]:
              - generic [ref=e94]:
                - generic [ref=e95]:
                  - heading "porsche Cayenne" [level=3] [ref=e96]
                  - paragraph [ref=e97]: "2014"
                - generic [ref=e98]: 18,500,000 CFA
              - generic [ref=e99]:
                - generic [ref=e100]: 180,000 km
                - generic [ref=e105]: Gasoline
                - generic [ref=e110]: Automatic
            - paragraph [ref=e115]: Thies
        - link "bmw x3 bmw x3 2017 18,000,000 CFA 0 km Gasoline Automatic Dakar" [ref=e116] [cursor=pointer]:
          - /url: /car/c91cc064-41b5-4ffd-99b4-197d4acf8242
          - generic [ref=e117]:
            - img "bmw x3" [ref=e119]
            - generic [ref=e120]:
              - generic [ref=e121]:
                - generic [ref=e122]:
                  - heading "bmw x3" [level=3] [ref=e123]
                  - paragraph [ref=e124]: "2017"
                - generic [ref=e125]: 18,000,000 CFA
              - generic [ref=e126]:
                - generic [ref=e127]: 0 km
                - generic [ref=e132]: Gasoline
                - generic [ref=e137]: Automatic
            - paragraph [ref=e142]: Dakar
        - link "Peugeot 308 Peugeot 308 2012 2,200,000 CFA 200,000 km Diesel Manual Mbour" [ref=e143] [cursor=pointer]:
          - /url: /car/2b2c9ae7-f672-4721-b8a8-1fbe1d2656f5
          - generic [ref=e144]:
            - img "Peugeot 308" [ref=e146]
            - generic [ref=e147]:
              - generic [ref=e148]:
                - generic [ref=e149]:
                  - heading "Peugeot 308" [level=3] [ref=e150]
                  - paragraph [ref=e151]: "2012"
                - generic [ref=e152]: 2,200,000 CFA
              - generic [ref=e153]:
                - generic [ref=e154]: 200,000 km
                - generic [ref=e159]: Diesel
                - generic [ref=e164]: Manual
            - paragraph [ref=e169]: Mbour
    - generic [ref=e171]:
      - generic [ref=e172]:
        - heading "Comment ça marche" [level=2] [ref=e173]
        - paragraph [ref=e174]: Trouver votre voiture idéale est facile avec notre processus simple
      - generic [ref=e175]:
        - generic [ref=e177]:
          - heading "Parcourir" [level=3] [ref=e182]
          - paragraph [ref=e183]: Explorez notre vaste collection de véhicules
        - generic [ref=e185]:
          - heading "Comparer" [level=3] [ref=e190]
          - paragraph [ref=e191]: Comparez les caractéristiques et les prix
        - generic [ref=e193]:
          - heading "Acheter" [level=3] [ref=e199]
          - paragraph [ref=e200]: Finalisez votre achat en toute confiance
    - contentinfo [ref=e201]:
      - generic [ref=e202]:
        - generic [ref=e203]:
          - link "Conditions générales" [ref=e204] [cursor=pointer]:
            - /url: /terms
          - generic [ref=e205]: "|"
          - link "Charte d'utilisation" [ref=e206] [cursor=pointer]:
            - /url: /terms
          - generic [ref=e207]: "|"
          - link "Conseils de sécurité" [ref=e208] [cursor=pointer]:
            - /url: /security-tips
        - paragraph [ref=e209]: © 2025 AutoSN. Tous droits réservés.
```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | 
  3  | export class LoginPage {
  4  |   readonly page: Page;
  5  |   readonly connectLink: Locator;
  6  |   readonly emailInput: Locator;
  7  |   readonly passwordInput: Locator;
  8  |   readonly submitButton: Locator;
  9  | 
  10 |   constructor(page: Page) {
  11 |     this.page = page;
  12 |     //this.connectLink = page.getByRole('link', { name: /anmelden|login|Se connecter/i });
  13 |     //this.connectLink = page.locator('a[href="/auth"]');
  14 |     this.connectLink = page.getByRole('link', { name: /se connecter/i });
  15 |     this.emailInput = page.getByLabel('Email');
  16 |     this.passwordInput = page.getByLabel('Mot de passe');
  17 | //this.connectLink = page.getByRole('link', { name: /anmelden|login|se connecter/i });
  18 |     this.submitButton = page.getByRole('button', { name: /anmelden|login|Se connecter|einloggen/i });
  19 |   }
  20 | 
  21 |   async goto() {
  22 |     await this.page.goto('https://autosn.online');
  23 |   }
  24 | 
  25 |   async login(email: string, pass: string) {
> 26 |     await this.connectLink.click();
     |                            ^ Error: locator.click: Test timeout of 30000ms exceeded.
  27 |     await this.emailInput.fill(email);
  28 |     await this.passwordInput.fill(pass);
  29 |     await this.submitButton.click();
  30 |   }
  31 | }
```