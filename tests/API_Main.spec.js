import { test, expect } from '@playwright/test';
import { UserAPI } from './API_Class.spec';

test('Delete user', async ({ request }) => {
    const userAPI = new UserAPI(request);

    const response = await userAPI.deleteUser(2,{
        name: 'Ashu',
        job: 'Lead QA Engineer'
    });

    expect(response.status()).toBe(204)
});