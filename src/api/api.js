import * as axios from 'axios';

const instanceAPI = axios.create({
    withCredentials: true,
    baseURL: 'https://www.googleapis.com/books/v1/volumes',
    headers: {
        "API-KEY": "AIzaSyC3L9NO1mvqLFNRmjKfpZ5w6lDuPUlzFQs"
    }
})

export const booksApi = {
    getBooks(searchText) {
        debugger;
        return instanceAPI.get(`?q=${searchText}`).then(response => {
            debugger;
            return response
        })
    }
}