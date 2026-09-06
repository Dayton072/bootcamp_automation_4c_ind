import { test, expect } from '@playwright/test';

test('success create new account @register', async ({ page }) => {
  //Note: For Registration Automation. Ask about duplicate data?
  //Best practices with DB access and no access?
  //pre
  await page.goto('https://www.emra.chat/signup');
  //steps
  await page.getByText('EmailPasswordConfirm').click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('testemailsuccess@email.com');
  await page.getByRole('textbox', { name: 'Password', exact: true }).click();
  await page.getByRole('textbox', { name: 'Password', exact: true }).fill('customized');
  await page.getByRole('textbox', { name: 'Confirm Password' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password' }).fill('customized');
  await page.getByRole('button', { name: 'Next' }).click();
    //P2
  await page.getByText('BackNext').click();
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Orang Hutan');
  await page.getByRole('textbox', { name: 'Phone Number' }).click();
  await page.getByRole('textbox', { name: 'Phone Number' }).fill('87782009389');
  await page.getByRole('button', { name: 'Next' }).click();
    //P3
  await page.getByRole('textbox', { name: 'Company Name' }).click();
  await page.getByRole('textbox', { name: 'Company Name' }).fill('Test Comp');
  await page.getByLabel('Industry').selectOption('ecommerce');
  await page.getByLabel('Company Size').selectOption('11-50');
  await page.getByRole('button', { name: 'Create Account' }).click();
  //expect
  await expect(page.getByRole('button', { name: 'Dashboard' })).toBeVisible();
  await expect(page).toHaveURL('https://www.emra.chat/onboarding/whatsapp');
});

test('create account with existing email', async ({ page }) => {
  //Note: For Registration Automation. Ask about duplicate data?
  //Best practices with DB access and no access?
  //pre
  await page.goto('https://www.emra.chat/signup');
  //steps
  await page.getByText('EmailPasswordConfirm').click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('testemailsuccess@email.com');
  await page.getByRole('textbox', { name: 'Password', exact: true }).click();
  await page.getByRole('textbox', { name: 'Password', exact: true }).fill('customized');
  await page.getByRole('textbox', { name: 'Confirm Password' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password' }).fill('customized');
  await page.getByRole('button', { name: 'Next' }).click();
    //P2
  await page.getByText('BackNext').click();
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Orang Hutan');
  await page.getByRole('textbox', { name: 'Phone Number' }).click();
  await page.getByRole('textbox', { name: 'Phone Number' }).fill('87782009389');
  await page.getByRole('button', { name: 'Next' }).click();
    //P3
  await page.getByRole('textbox', { name: 'Company Name' }).click();
  await page.getByRole('textbox', { name: 'Company Name' }).fill('Test Comp');
  await page.getByLabel('Industry').selectOption('ecommerce');
  await page.getByLabel('Company Size').selectOption('11-50');
  await page.getByRole('button', { name: 'Create Account' }).click();
  //expect
  await expect(page.getByText('Email has already been taken')).toBeVisible();
});