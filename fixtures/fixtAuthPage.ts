import { test as base } from '@playwright/test';
//import { LoginPage } from '../pages/LoginPage';
import { AuthPage } from '../pages/AuthPage';

// 1. Definiere den Typ für deine Fixtures
type MyFixtures = {
  //loginPage: LoginPage;
  authPage: AuthPage;
};

// 2. Erweitere das Basis-'test'
export const test = base.extend<MyFixtures>({
  //loginPage: async ({ page }, use) => {
  authPage: async ({ page }, use) => {
    // SETUP: Erstelle die Instanz
    //const loginPage = new LoginPage(page);
    const authPage = new AuthPage(page);
    
    // Automatisch die Seite öffnen, bevor der Test startet
    await authPage.goto();
    
    // Bereitstellen für den Test
    //await use(loginPage);
    await use(authPage);
    
    // TEARDOWN: Hier könnte optional Aufräumcode stehen
  },
});

export { expect } from '@playwright/test';