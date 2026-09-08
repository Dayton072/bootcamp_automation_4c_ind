import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

//test account
//dktest@email.com
//test1234

test('Login Valid', async ({ page }) => {
  //pre
  const loginPage = new LoginPage(page)
  const email = 'dktest@email.com'
  const password = 'test1234'

  //step
  await loginPage.goTo()
  await loginPage.loginAs(email,password)

  //expect
  await expect(page).toHaveURL('https://www.emra.chat/home');
  await expect(page.getByRole('button', { name: 'Home' })).toBeVisible();

  await expect(page.getByRole('button', { name: 'DK Test dktest@email.com DT' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Home' })).toBeVisible();
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