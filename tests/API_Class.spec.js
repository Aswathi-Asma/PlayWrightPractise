export class UserAPI {
    constructor(request) {
        this.request = request;
    }
    async updateUser(userId, userData) {
    return await this.request.put(
        `https://reqres.in/api/users/${userId}`,
        {
            data: userData
        }
    );
}
 

    async getUser(userId) {
        return await this.request.get(
            `https://reqres.in/api/users/${userId}`
        );
    }

    async patchUser(userId, userData) {
        return await this.request.patch(
            `https://reqres.in/api/users/${userId}`,
            {
                data: userData
            }
        );
    }
    async deleteUser(userId) {
    return await this.request.delete(
        `https://reqres.in/api/users/${userId}`
    );
}
}