import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://new-backend.unistory.app/api/',
})

export const userAPI = {
    get: async () => {
        const user = await instance.get('data')
        return user.data.items
    }
}