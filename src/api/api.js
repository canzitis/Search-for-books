import * as axios from 'axios';

const instanceAPI = {
    baseURL: 'https://www.googleapis.com/books/v1/volumes',
    APIKEY: "AIzaSyD3oJS1p78XgHfV-fwAKDQnH9rSvhcDsxA"
}

export const booksApi = {
    getBooks(searchText) {
        debugger;
        return axios.get(`${instanceAPI.baseURL}?maxResults=40&q=${searchText}&key=${instanceAPI.APIKEY}`).then(response => {
            debugger;
            return response
        })
    },

    getBookPage(id) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes/${id}?key=${instanceAPI.APIKEY}`).then(response => {
            return response
        })
    }
}