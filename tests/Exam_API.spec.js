const { test, expect } = require('@playwright/test');

test('Exam API', async ({ request }) => {
    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
        data: {
            title: 'Automation Test',
            body: 'Testing post lifecycle',
            userId: 5
        }
    });

    expect(response.status()).toBe(201);
    const body = await response.json();
    expect(body.title).toBe('Automation Test');
    expect(body.body).toBe('Testing post lifecycle');
    expect(body.userId).toBe(5);
    console.log('Created Post ID:', body.id);
    const postId=1;
    console.log('Created Post ID:' + postId);
    const updateResponse = await request.put(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
        {
            data: {
                title: 'Updated Automation Test'
            }
        }
    );
    expect(updateResponse.status()).toBe(200);
    const updatedBody = await updateResponse.json();
    expect(updatedBody.title).toBe('Updated Automation Test');
    const deleteResponse = await request.delete(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    expect(deleteResponse.status()).toBe(200);
    console.log('Post deleted successfully');
});