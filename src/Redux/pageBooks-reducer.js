import {
    booksApi
} from "../api/api.js"

const SET_PAGE_BOOK = 'SET_PAGE_BOOK'


const instalState = {
    book: []

}

const PageBooksReducer = (state = instalState, action) => {
    switch (action.type) {
        case SET_PAGE_BOOK:
            return {
                ...state,
                book: action.book

            }
            default:
                return state
    }
}


export const setBookPage = (book) => {
    return {
        type: SET_PAGE_BOOK,
        book
    }
}



export const getBookPage = (id) => {
    return async (dispatch) => {
        const data = await booksApi.getBookPage(id)
        console.log(data)
        dispatch(setBookPage(data.data))


    }
}

export default PageBooksReducer