import {
    booksApi
} from "../api/api"

const SET_BOOKS = 'GET_BOOKS'

const instalState = {
    books: []
}


const serchBooksReducers = (state = instalState, action) => {
    switch (action.type) {
        case SET_BOOKS:
            return {
                ...state,
                books: [...action.books]
            }

            default:
                return state
    }
}

export const setBooks = (books) => {
    return {
        type: SET_BOOKS,
        books
    }
}

export const getBooks = (search) => {
    return async (dispatch) => {
        const data = await booksApi.getBooks(search)
        console.log(data)
        dispatch(setBooks(data.data.items))
    }
}


export default serchBooksReducers;