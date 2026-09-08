import {expect, type Locator, type Page} from '@playwright/test'

export class HomePage{
    // == PAGE INSTANCE
    readonly page: Page;

    // == LOCATOR
    readonly avatar: Locator;

    // == CONSTRUCTOR
    constructor (page:Page) {
        this.page = page;

        // == INITIALIZE LOCATORS
        this.avatar = page.getByRole('button', { name: 'DK Test dktest@email.com DT' })
    }

    // == ACTION METHODS
    async goTo(){
        await this.page.goto('https://www.emra.chat/home');
    }

    async verifyHomePage(){
        await expect(this.page).toHaveURL('https://www.emra.chat/home');
    }
}