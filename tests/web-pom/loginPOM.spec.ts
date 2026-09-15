import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import { HomePage } from '../../pages/home.page';
import { SignupPage } from '../../pages/signup.page';

import userData from '../../data/user.json';


test('Login Valid @p0 @positive @smoketest', async ({ page }) => {
  //pre
  const loginPage = new LoginPage(page)
  const homePage = new HomePage(page)
  const email = userData['regular_user']['email']
  const password = userData['regular_user']['password']

  //step
  await loginPage.goTo()
  await loginPage.loginAs(email,password)

  //expect
  await homePage.verifyHomePage();
  await expect(homePage.avatar).toBeVisible();
});

test('login invalid email @p1 @negative', async ({ page }) => {
  //pre
  const loginPage = new LoginPage(page)
  const email = userData['invalid_email_user']['email']
  const password = userData['invalid_email_user']['password']

  //steps
  await loginPage.goTo()
  await loginPage.loginAs(email,password)

  //expect
  expect(loginPage.invalidCredentialFlashMessage).toBeVisible;
});

test('login invalid password @p1 @negative', async ({ page }) => {
  //pre
  const loginPage = new LoginPage(page)
  const email = userData['invalid_password_user']['email']
  const password = userData['invalid_password_user']['password']

  //steps
  await loginPage.goTo()
  await loginPage.loginAs(email,password)

  //expect
  expect(loginPage.invalidCredentialFlashMessage).toBeVisible;
});

test('Test Register Button @p2 @positive', async ({ page }) => {
  //pre
  const loginPage = new LoginPage(page)
  const signupPage = new SignupPage(page)

  //steps
  await loginPage.goTo()
  await loginPage.clickSignup()

  //exp
  await signupPage.verifySignupPage();
});