import { test } from '@playwright/test';

test.skip('API Test', async () => {

    const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts/1'
    );

    const data = await response.json();

    console.log(data);
});
test.only('PUT API Testing', async( ) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1',{
        method: 'PUT',
        body: JSON.stringify({
            id: 1,
            title: 'Updated Post',
            body: 'This is the updated post content.',
            userId: 1
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    console.log(data);
});