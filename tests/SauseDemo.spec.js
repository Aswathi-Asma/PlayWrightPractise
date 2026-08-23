import { test, expect } from '@playwright/test';
test('SauseDemo@ashu', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveTitle(/Swag Labs/);
    await page.getByText('Sauce Labs Backpack').click();
    await page.getByRole('button', { name: 'Add to cart' }).click();
    await page.getByRole('button', { name: 'Back to products' }).click();
    await page.getByText('Sauce Labs Fleece Jacket').click();
    await page.getByRole('button', { name: 'Add to cart' }).click();
    await page.locator('.shopping_cart_link').click();
    await page.locator('[data-test="remove-sauce-labs-fleece-jacket"]').click();
    await page.getByRole('button', { name: 'continue shopping' }).click();
    await page.pause();

})