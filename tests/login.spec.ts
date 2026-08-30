import { test, expect } from '@playwright/test';

test('login invalid', async ({ page }) => {
  //pre
  await page.goto('https://www.emra.chat/login');

  //steps
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('test@email.com');
  await page.getByRole('textbox', { name: 'Email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('test123');
  await page.getByRole('button', { name: 'Sign In' }).click();

  //expect
  await expect(page.getByRole('listitem')).toBeVisible();
});