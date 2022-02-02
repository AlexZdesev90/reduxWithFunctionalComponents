import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://jsonplaceholder.typicode.com/',

});

export const usersAPI = {
    getUsers() {
    return instance
        .get('users')
        .then(response => {
            return response.data;
    })
}
}
