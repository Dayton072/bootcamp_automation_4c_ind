import { type Locator, type Page } from '@playwright/test'

export class LoginPage{
    // == PAGE INSTANCE ==
    readonly page: Page;

    // == LOCATORS ==
    readonly emailField: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;

    readonly invalidCredentialFlashMessage: Locator;

    // == CONSTRUCTOR ==
    constructor (page: Page){
        this.page = page;
    
        // == INITIALIZE LOCATORS ==
        this.emailField = page.getByRole('textbox', { name: 'Email' });
        this.passwordField = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Sign In' });

        this.invalidCredentialFlashMessage = page.getByText('Invalid credentials')

    }

    // == ACTION METHODS ==
    async goTo(){
        await this.page.goto('https://www.emra.chat/login');
    }

    async loginAs(email: string, password: string){
        await this.emailField.fill(email);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }
}