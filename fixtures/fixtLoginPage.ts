import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

// 1. Definiere den Typ für deine Fixtures
type MyFixtures = {
  loginPage: LoginPage;
};

// 2. Erweitere das Basis-'test'
export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    // SETUP: Erstelle die Instanz
    const loginPage = new LoginPage(page);
    
    // Bereitstellen für den Test
    await use(loginPage);
    
    // TEARDOWN: Hier könnte optional Aufräumcode stehen
  },
});

export { expect } from '@playwright/test';