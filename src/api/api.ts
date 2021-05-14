import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'ec16bc5c-e85d-44b7-ba30-15fe65f3b43f',
    },
});

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => response.data);
    },
};

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/${userId}`).then((response) => response.data);
    },

    getStatus(userId: string) {
        return instance.get(`profile/status/${userId}`).then((response) => response.data);
    },

    updateStatus(status: string) {
        return instance.put('/profile/status', { status });
    },
};

export const followAPI = {
    follow(userId: number) {
        return instance.post(`follow/${userId}`).then((response) => response.data);
    },

    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`).then((response) => response.data);
    },
};

export const authAPI = {
    getUserData() {
        return instance.get(`auth/me`).then((response) => response.data);
    },
};
