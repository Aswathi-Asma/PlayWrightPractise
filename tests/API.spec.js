import { test, expect } from '@playwright/test';
import { request } from 'node:http';

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
test.skip('PATCH Test', async () => {
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
test.skip('Request test', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
    expect(response.status()).toBe(200);
    const data = await response.json();
    console.log(data);
})
test.skip('Practice API Test', async ({ request }) => {
    const response = await request.post(
        'https://jsonplaceholder.typicode.com/posts', {
        data: {
            title: 'New POST',
            body: 'My name is aswathi im creating a post using playwright',
            userId: 1
        }
    }
    );
    expect(response.status()).toBe(201);
    const data = await response.json();
    console.log(data);
});
test.skip('API Practice Test', async ({ request }) => {
    const response = await request.put(
        'https://jsonplaceholder.typicode.com/posts/1', {
        data: {
            title: 'Updated Post',
            body: 'This is the updated post content.',
            userId: 1,
        }
    }
    );
    expect(response.status()).toBe(200);
    const data = await response.json();
    expect(data.title).toBe('Updated Post');
    expect(data.body).toBe('This is the updated post content.');
    expect(data.userId).toBe(1);
    console.log(data);
});
test.skip('PATCH TEST', async ({ request }) => {
    const response = await request.patch(
        'https://jsonplaceholder.typicode.com/posts/1', {
        data: {
            title: 'Patched Title'
        }
    }
    );
    expect(response.status()).toBe(200);
    const data = await response.json();
    expect(data.title).toBe('Patched Title');
    console.log(data);
});
test.only('DELETE TEST', async ({ request }) => {
    const response = await request.delete('https://jsonplaceholder.typicode.com/posts/1');

    expect(response.status()).toBe(200);
    console.log('Post deleted successfully');

});



