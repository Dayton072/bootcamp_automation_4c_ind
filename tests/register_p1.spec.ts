import { test, expect } from '@playwright/test';

test('Invalid register page 1', async ({ page }) => {
  //pre
  await page.goto('https://www.emra.chat/signup');
  //step
  await page.getByText('EmailPasswordConfirm').click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('deka@pok,wak');
  await expect(page.getByText('Please enter a valid email')).toBeVisible();
  await page.getByRole('textbox', { name: 'Password', exact: true }).click();
  await page.getByRole('textbox', { name: 'Password', exact: true }).fill('1234567');
  await expect(page.getByText('Password must be at least 8')).toBeVisible();
  await page.getByRole('textbox', { name: 'Confirm Password' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password' }).fill('1234566');
  await expect(page.getByText('Passwords do not match')).toBeVisible();
  await page.getByText('EmailPlease enter a valid email addressPasswordWeakPassword must be at least 8').click();
  //exp
  await expect(page.getByText('Create your Emra account')).toBeVisible();
});

test('Invalid email register', async ({ page }) => {
  //pre
  await page.goto('https://www.emra.chat/signup');
  //step
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('test@email,,w');
  await page.getByRole('textbox', { name: 'Password', exact: true }).click();
  await page.getByRole('textbox', { name: 'Password', exact: true }).fill('12345678');
  await page.getByRole('textbox', { name: 'Confirm Password' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password' }).fill('12345678');
  await page.getByText('EmailPlease enter a valid email addressPasswordWeakConfirm PasswordNext').click();
  //exp
  await expect(page.getByText('Create your Emra account')).toBeVisible();
});

test('invalid password', async ({ page }) => {
  await page.goto('https://www.emra.chat/signup');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('test@email.com');
  await page.getByRole('textbox', { name: 'Password', exact: true }).click();
  await page.getByRole('textbox', { name: 'Password', exact: true }).fill('1234567');
  await page.getByRole('textbox', { name: 'Confirm Password' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password' }).fill('1234567');
  await page.getByText('EmailPasswordWeakPassword').click();
  await expect(page.getByText('Password must be at least 8')).toBeVisible();
  await page.getByRole('textbox', { name: 'Password', exact: true }).click();
  await page.getByRole('textbox', { name: 'Password', exact: true }).fill('12345678');
  await page.getByText('EmailPasswordWeakConfirm').click();
  await expect(page.getByText('Passwords do not match')).toBeVisible();
  await page.getByRole('textbox', { name: 'Confirm Password' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password' }).fill('12345678');
  await page.getByRole('button', { name: 'Next' }).click();
  await expect(page.getByText('User Information')).toBeVisible();
});