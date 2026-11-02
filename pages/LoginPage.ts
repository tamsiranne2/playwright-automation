import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly connectLink: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.connectLink=page.getByRole('link', { name: 'Se connecter' });
    this.emailInput = page.getByLabel('Email');
    this.passwordInput = page.getByLabel('Mot de passe');
    this.submitButton = page.getByRole('button', { name: 'Se connecter' });
  }

  async goto() {
    await this.page.goto('https://autosn.online');
  }

  async login(email: string, pass: string) {
    await this.connectLink.click();
    await this.emailInput.fill(email);
    await this.passwordInput.fill(pass);
    await this.submitButton.click();
  }
}