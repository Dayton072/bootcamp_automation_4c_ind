import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import { HomePage } from '../../pages/home.page';

//test account
//dktest@email.com
//test1234

test('Login Valid', async ({ page }) => {
  //pre
  const loginPage = new LoginPage(page)
  const homePage = new HomePage(page)
  const email = 'dktest@email.com'
  const password = 'test1234'

  //step
  await loginPage.goTo()
  await loginPage.loginAs(email,password)

  //expect
  await homePage.goTo()
  await expect(homePage.avatar).toBeVisible();
});

test('login invalid email', async ({ page }) => {
  //pre
  await page.goto('https://www.emra.chat/login');

  //steps
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('test@email.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('test123');
  await page.getByRole('button', { name: 'Sign In' }).click();

  //expect
  await expect(page.getByRole('listitem')).toBeVisible();
});

test('login invalid password', async ({ page }) => {
  //pre
  await page.goto('https://www.emra.chat/login');

  //steps
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('dktest@email.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('test12345');
  await page.getByRole('button', { name: 'Sign In' }).click();

  //expect
  await expect(page.getByRole('listitem')).toBeVisible();
});

test('Test Register Button', async ({ page }) => {
  //pre
  await page.goto('https://www.emra.chat/login');
  //steps
  await page.getByRole('link', { name: 'Sign up' }).click();
  //exp
  await expect(page).toHaveURL('https://www.emra.chat/signup');
});