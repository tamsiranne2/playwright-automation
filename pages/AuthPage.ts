import { Locator, Page } from '@playwright/test';

export class AuthPage {
    readonly page: Page;
    readonly connectLink: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly signInTab: Locator;
    readonly signUpTab: Locator;
    readonly signInButton: Locator;
    readonly signUpEmailInput: Locator;
    readonly signUpPasswordInput: Locator;
    readonly signUpButton: Locator;
    readonly createAccountButton: Locator;
    readonly signUpPhoneInput: Locator;

    constructor(page: Page) {
        this.page = page;
        this.connectLink = page.getByRole('link', { name: 'Se connecter' });
        this.emailInput = page.locator('#signin-email');
        this.passwordInput = page.locator('#signin-password');
        this.signInTab = page.getByRole('tab', { name: 'Se connecter' });
        this.signUpTab = page.getByRole('tab', { name: "S'inscrire" });
        
        this.signInButton = page.getByRole('tabpanel', { name: 'Se connecter' })
            .getByRole('button', { name: 'Se connecter' });
            
        this.signUpEmailInput = page.locator('#signup-email');
        this.signUpPasswordInput = page.locator('#signup-password');
        this.signUpButton = page.getByRole('tabpanel', { name: "S'inscrire" })
            .getByRole('button', { name: "S'inscrire" });
        this.signUpPhoneInput = page.locator('#signup-phone');
        this.createAccountButton = page.getByRole('button', { name: 'Créer un compte' });
    }

    async goto(): Promise<void> {
        await this.page.goto('https://autosn.online');
        await this.connectLink.click();
    }

    async openSignIn(): Promise<void> {
        await this.signInTab.click();
    }

    async openSignUp(): Promise<void> {
        await this.signUpTab.click();
    }

    async signIn(email: string, password: string): Promise<void> {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.signInButton.click();
    }

    async signUp(email: string, password: string, phone: string): Promise<void> {
        await this.signUpTab.click();
        await this.signUpEmailInput.fill(email);
        await this.signUpPasswordInput.fill(password);
        await this.signUpPhoneInput.fill(phone);
        await this.createAccountButton.click();
    }
}