import {type Locator, type Page} from '@playwright/test'

export class SignupPage{
    // == PAGE INSTANCE
    readonly page: Page;

    // == LOCATOR
    readonly emailField: Locator;
    readonly passwordField: Locator;
    readonly confirmPasswordField: Locator;
    readonly loginButton: Locator;

    // == CONSTRUCTOR
    constructor (page:Page) {
        this.page = page;

        // == INITIALIZE LOCATORS
        this.emailField = page.getByRole('textbox', { name: 'Email' });
        this.passwordField = page.getByRole('textbox', { name: 'Password' });
        this.confirmPasswordField = page.getByRole('textbox', { name: 'Confirm Password' })
        // can also use page.locator("#<id>")
        this.loginButton = page.getByRole('button', { name: 'Sign In' })
    }

    // == ACTION METHODS
    async goTo(){
        await this.page.goto('https://www.emra.chat/signup');
    }
}