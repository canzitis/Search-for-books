import {
    booksApi
} from "../api/api"

const GET_BOOKS = 'GET_BOOKS'

const instalState = {

}


const serchBooksReducers = (state = instalState, action) => {
    switch (action.type) {
        case GET_BOOKS:
            return {
                ...state,
                data: action.search
            }

            default:
                return state
    }
}

export const setBooks = (search) => {
    return {
        type: GET_BOOKS,
        search
    }
}

export const getBooks = (search) => {
    return async (dispatch) => {
        const data = await booksApi.getBooks(search)
        console.log(data)
    }
}


export default serchBooksReducers;