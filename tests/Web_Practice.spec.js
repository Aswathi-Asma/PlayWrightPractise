import { test, expect } from "@playwright/test"

test('Web Application Practice', async ({ page }) => {
    await page.goto('https://www.amazon.in/', { waitUntil: 'domcontentloaded' });

    const continueShopping = page.getByRole('button', { name: /continue shopping/i });
    if (await continueShopping.isVisible({ timeout: 5000 }).catch(() => false)) {
        await continueShopping.click();
    }

    const searchBox = page.locator('#twotabsearchtextbox');
    await searchBox.fill('laptop');

    const goButton = page.locator('#nav-search-submit-button');
    await goButton.click();

    await expect(page).toHaveURL(/\/s\?k=laptop/i);

    const productLink = page.locator('div[data-component-type="s-search-result"] h2 a').filter({ hasText: /ASUS Vivobook 16/i }).first();
    await productLink.waitFor({ state: 'visible' });
    await productLink.click();

    await expect(page.locator('#productTitle')).toContainText(/ASUS Vivobook 16/i, { timeout: 15000 });

    const addToCartButton = page.locator('#add-to-cart-button');
    await addToCartButton.waitFor({ state: 'visible' });
    await addToCartButton.click();
});
