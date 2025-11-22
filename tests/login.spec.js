require('dotenv').config();
const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

test('Verify user can login', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.goto(process.env.ORANGE_URL);

    await loginPage.login(
        process.env.ORANGE_USER,
        process.env.ORANGE_PASS
    );

    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
});
