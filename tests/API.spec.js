import { test , expect } from '@playwright/test';

test.skip('API Test', async () => {

    const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts/1'
    );

    const data = await response.json();

    console.log(data);
});
test.skip('PUT API Testing', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
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
test.skip('POST API Testing', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'New POST',
            body: 'My name is aswathi im creating a post using playwright',
            userId: 1
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    },
    )

    expect(response.status).toBe(201);
    const data = await response.json();
    console.log(data);

});
 test.only('PATCH Test', async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PATCH',
        body: JSON.stringify({
            title: 'Partially Updated Post'
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    expect(response.status).toBe(200);
    const data = await response.json();
    console.log(data);
 });  
