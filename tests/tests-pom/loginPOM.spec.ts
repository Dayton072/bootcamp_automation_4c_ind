import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import { HomePage } from '../../pages/home.page';
import { SignupPage } from '../../pages/signup.page';

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
  await homePage.verifyHomePage();
  await expect(homePage.avatar).toBeVisible();
});

test('login invalid email', async ({ page }) => {
  //pre
  const loginPage = new LoginPage(page)
  const email = 'fail@email.com'
  const password = 'test1234'

  //steps
  await loginPage.goTo()
  await loginPage.loginAs(email,password)

  //expect
  expect(loginPage.invalidCredentialFlashMessage).toBeVisible;
});

test('login invalid password', async ({ page }) => {
  //pre
  const loginPage = new LoginPage(page)
  const email = 'dktest@email.com'
  const password = 'test12345'

  //steps
  await loginPage.goTo()
  await loginPage.loginAs(email,password)

  //expect
  expect(loginPage.invalidCredentialFlashMessage).toBeVisible;
});

test('Test Register Button', async ({ page }) => {
  //pre
  const loginPage = new LoginPage(page)
  const signupPage = new SignupPage(page)
  await page.goto('https://www.emra.chat/login');

  //steps
  await loginPage.goTo()
  await loginPage.clickSignup()

  //exp
  await signupPage.goTo()
});