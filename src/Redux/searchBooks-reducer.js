import {
    booksApi
} from "../api/api"


const SET_BOOKS = 'GET_BOOKS'
const MODE_ACTIVATION = 'MODE_ACTIVATION'

const instalState = {
    books: [],
    loadingBooks: true,
}


const serchBooksReducers = (state = instalState, action) => {
    switch (action.type) {
        case SET_BOOKS:
            return {
                ...state,
                books: [...action.books],
                    loadingBooks: true
            }
            case MODE_ACTIVATION:
                return {
                    ...state,
                    loadingBooks: null
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

export const setmodeActivationBooks = () => {
    return {
        type: MODE_ACTIVATION,

    }
}




export const getBooks = (search) => {
    return async (dispatch) => {
        const data = await booksApi.getBooks(search)
        if (data.status === 200) {
            dispatch(setBooks(data.data.items))
        }

    }
}



export default serchBooksReducers