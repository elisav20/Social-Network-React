import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "3c7c7e3b-795d-4983-977b-cd3c7549fe60",
    },
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response) => response.data);
    },
    follow(userId) {
        return instance.post(
            `https://social-network.samuraijs.com/api/1.0/follow/${userId}`
        );
    },
    unfollow(userId) {
        return instance.delete(
            `https://social-network.samuraijs.com/api/1.0/follow/${userId}`
        );
    },
};
