import { test, expect } from '@playwright/test';
test('API Token', async ({ request }) => {
    const LogInresponse = await request.post('https://reqres.in/api/login', {
        data: {
            email: 'eve.holt@reqres.in',
            password: 'cityslicka'
        }
    });

    expect(LogInresponse.status()).toBe(200);
    

    const LogInBody = await LogInresponse.json();
    console.log('Login:', LogInBody);

    const token = LogInBody.token;
    expect(token).toBeTruthy();
    const response2 = await request.get('https://reqres.in/api/users/2', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    expect(response2.status()).toBe(200);
    const responseBody2 = await response2.json();
    expect(responseBody2.data.id).toBe(2);




});