import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  //pre
  await page.goto('https://www.emra.chat/signup');
  ///pre2
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('e@e.e');
  await page.getByRole('textbox', { name: 'Password', exact: true }).click();
  await page.getByRole('textbox', { name: 'Password', exact: true }).fill('12345678');
  await page.getByRole('textbox', { name: 'Confirm Password' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password' }).fill('12345678');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('aw');
  await page.getByRole('textbox', { name: 'Phone Number' }).click();
  await page.getByRole('textbox', { name: 'Phone Number' }).fill('1234567890');
  await page.getByRole('button', { name: 'Next' }).click();
  //steps
  await page.getByRole('button', { name: 'Create Account' }).click();
  await page.getByRole('textbox', { name: 'Company Name' }).click();
  await page.getByRole('textbox', { name: 'Company Name' }).fill('c');
  await page.getByRole('button', { name: 'Create Account' }).click();
  await page.getByLabel('Industry').selectOption('saas');
  await page.getByRole('button', { name: 'Create Account' }).click();
  await page.getByRole('button', { name: 'Create Account' }).click();
  await page.getByLabel('Company Size').selectOption('1-10');
});