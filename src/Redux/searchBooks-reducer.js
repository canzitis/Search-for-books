import {
    booksApi
} from "../api/api"

const SET_BOOKS = 'GET_BOOKS'
const LOADING_BOOKS = 'LOADING_BOOKS'

const instalState = {
    books: [],
    loadingBooks: null,
}


const serchBooksReducers = (state = instalState, action) => {
    switch (action.type) {
        case SET_BOOKS:
            return {
                ...state,
                books: [...action.books],
                    loadingBooks: true
            }
            case LOADING_BOOKS:
                return {
                    ...state,

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

export const loadingBoksValue = () => {
    return {
        type: LOADING_BOOKS,
    }
}



export const getBooks = (search) => {
    debugger;
    return async (dispatch) => {
        const data = await booksApi.getBooks(search)
        if (data.status === 200) {
            console.log(data)
            dispatch(setBooks(data.data.items))
            dispatch(loadingBoksValue())
        }

    }
}


export default serchBooksReducers;