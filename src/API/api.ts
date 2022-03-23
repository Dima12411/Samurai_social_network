import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "eb3fdeb7-2ab9-4f80-8301-3199001af3a0"
    }
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    getUserProfile(userId: string) {
        return profileAPI.getUserProfile(userId)

    },
    unfollowUser(userId: number) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },
    followUser(userId: number) {
        return instance.post(`follow/${userId}`, {})
            .then(response => response.data)
    },
}

export const profileAPI = {
    getUserProfile(userId: string) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    getUserStatus(userId: string) {
        return instance.get(`status/${userId}`)
            .then(responce => responce.data)
    },
    updateStatus(status: string) {
        return instance.put(`status`, {status})
    }
}

export const authAPI = {
    loginUser() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
}

