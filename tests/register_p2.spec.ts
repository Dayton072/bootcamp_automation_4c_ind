import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  //pre
  await page.goto('https://www.emra.chat/signup');
  //steps page 1
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('e@a.c');
  await page.getByRole('textbox', { name: 'Email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password', exact: true }).fill('12345678');
  await page.getByRole('textbox', { name: 'Confirm Password' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password' }).fill('12345678');
  await page.getByRole('button', { name: 'Next' }).click();
  //steps page 2
  await page.getByText('BackNext').click();
  //validation of name
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('w');
  await expect(page.getByText('Name must be at least 2')).toBeVisible();
  //field name successful
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).press('ControlOrMeta+a');
  await page.getByRole('textbox', { name: 'Full Name' }).fill('fullname');
  await page.getByRole('combobox').click();
  //change country code
  await page.getByRole('option', { name: 'Canada (+1)' }).click();
  await expect(page.getByRole('textbox').nth(1)).toBeVisible();
  //validation of blank phone number
  await page.getByRole('textbox', { name: 'Phone Number' }).click();
  await page.getByRole('textbox', { name: 'Phone Number' }).fill('');
  await page.getByRole('button', { name: 'Next' }).click();
  await expect(page.getByText('Please enter a valid phone')).toBeVisible();
  //validation of phone number digits
  await page.getByRole('textbox', { name: 'Phone Number' }).click();
  await page.getByRole('textbox', { name: 'Phone Number' }).fill('123456789');
  await page.getByRole('button', { name: 'Next' }).click();
  await expect(page.getByText('Please enter a valid phone')).toBeVisible();
  //successfull phone number
  await page.getByRole('textbox', { name: 'Phone Number' }).click();
  await page.getByRole('textbox', { name: 'Phone Number' }).fill('1234567890');
  await page.getByRole('button', { name: 'Next' }).click();
  //exp
  await expect(page.getByText('Tell us about your company')).toBeVisible();
});