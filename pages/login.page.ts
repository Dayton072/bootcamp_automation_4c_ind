import { type Locator, type Page } from "@playwright/test";

export class LoginPage {
    // == Page Instance ==
    readonly page: Page;

    // == Locators ==
    readonly emailField: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;

    readonly invalidCredentialFlashMessage: Locator;

    // == Constructors ==
    constructor (page:Page){
        this.page = page

        // == Initialize Locators ==
        this.emailField = page.locator("#email");
        this.passwordField = page.locator("#password");
        this.loginButton = page.getByRole('button', { name: 'Sign In' })

        this.invalidCredentialFlashMessage = page.getByText('Invalid credentials')
    }

    // == Actions Methods ==
    
}