import * as axios from 'axios';

const instanceAPI = {
    baseURL: 'https://www.googleapis.com/books/v1/volumes',
    APIKEY: "AIzaSyBe_fTqQ_crJP5sUkYNvevPlMHcNZOiwpI"
}

export const booksApi = {
    getBooks(startIndex, searchText, printType, orderBy, ) {
        debugger;
        return axios.get(`${instanceAPI.baseURL}?startIndex=${startIndex}&maxResults=40&q=${searchText}&printType=${printType}&orderBy=${orderBy}&key=${instanceAPI.APIKEY}`).then(response => {
            return response
        })
    },

    getBookPage(id) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes/${id}?key=${instanceAPI.APIKEY}`).then(response => {
            return response
        })
    }
}