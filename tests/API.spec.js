import { test, expect } from '@playwright/test';

test.skip('API Test', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
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
            userId: 1,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
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
            userId: 1,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    expect(response.status).toBe(201);
    const data = await response.json();
    console.log(data);
});

test.skip('Exam Put', async ({ request }) => {
    const response = await request.put('https://jsonplaceholder.typicode.com/posts/1', {
        data: {
            title: 'Updated by Playwright',
            body: 'PUT API testing',
            userId: 1,
        },
    });

    expect(response.status()).toBe(200);
    const data = await response.json();
    expect(data.title).toBe('Updated by Playwright');
    expect(data.body).toBe('PUT API testing');
    expect(data.userId).toBe(1);
    expect(data.id).toBe(1);
    console.log(data);
});

test.skip('Request test', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
    expect(response.status()).toBe(200);

    const data = await response.json();
    console.log(data);
});

test.skip('Practice API Test', async ({ request }) => {
    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
        data: {
            title: 'New POST',
            body: 'My name is aswathi im creating a post using playwright',
            userId: 1,
        },
    });

    expect(response.status()).toBe(201);
    const data = await response.json();
    console.log(data);
});

test.skip('API Practice Test', async ({ request }) => {
    const response = await request.put('https://jsonplaceholder.typicode.com/posts/1', {
        data: {
            title: 'Updated Post',
            body: 'This is the updated post content.',
            userId: 1,
        },
    });

    expect(response.status()).toBe(200);
    const data = await response.json();
    expect(data.title).toBe('Updated Post');
    expect(data.body).toBe('This is the updated post content.');
    expect(data.userId).toBe(1);
    console.log(data);
});

test.skip('PATCH TEST', async ({ request }) => {
    const response = await request.patch('https://jsonplaceholder.typicode.com/posts/1', {
        data: {
            title: 'Patched Title',
        },
    });

    expect(response.status()).toBe(200);
    const data = await response.json();
    expect(data.title).toBe('Patched Title');
    console.log(data);
});

test.skip('DELETE TEST', async ({ request }) => {
    const response = await request.delete('https://jsonplaceholder.typicode.com/posts/1');

    expect(response.status()).toBe(200);
    console.log('Post deleted successfully');
});

test.skip('POST with Query Parameter', async ({ request }) => {
    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
        params: {
            userId: 2,
        },
        data: {
            title: 'New Post with Query Parameter',
            body: 'This is a new post created with query parameters.',
        },
    });

    expect(response.status()).toBe(201);
    const data = await response.json();
    console.log(data);
});

test.skip('GET with Query Parameter', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts', {
        params: {
            userId: 1,
        },
    });

    expect(response.status()).toBe(200);
    const data = await response.json();
    expect(Array.isArray(data)).toBeTruthy();
    expect(data.every(post => post.userId === 1)).toBe(true);
    console.log(data);
});

test.skip('Practice Test', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts?userId=2');

    expect(response.status()).toBe(200);
    const data = await response.json();
    expect(data).toHaveLength(10);
    expect(data.every(post => post.userId === 2)).toBe(true);

    expect(data[0]).toHaveProperty('title');
    console.log(data[0].title);
});

test.only('Exam Put EXAM ME', async ({ request }) => {
    const response = await request.put('https://jsonplaceholder.typicode.com/posts/1', {
        data: {
            title: 'Updated API Test',
            body: 'Learning API testing',
            userId: 1,
        },
    
    });
    expect(response.status()).toBe(200);

    const data = await response.json();
    expect(data.title).toBe('Updated API Test');
    expect(data.body).toBe('Learning API testing');
    expect(data.userId).toBe(1);
    expect(data.id).toBe(1);


    console.log(data.userId);
});
