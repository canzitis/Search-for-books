import {
    booksApi
} from "../api/api"


const SET_BOOKS = 'GET_BOOKS'

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
        debugger;
        const data = await booksApi.getBooks(search)
        if (data.status === 200) {
            dispatch(setBooks(data.data.items))
        }

    }
}



export default serchBooksReducers