import {
    booksApi
} from "../api/api"


const SET_BOOKS = 'GET_BOOKS'
const MODE_ACTIVATION = 'MODE_ACTIVATION'
const SET_TOTAL_ITEMS = 'SET_TOTAL_ITEMS'
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_SEARCH_NAME = "SET_SEARCH_NAME"
const SET_START_INDEX = "SET_START_INDEX"

const instalState = {
    searchName: null,
    books: [],
    startIndex: 0,
    currentPage: 1,
    pageSize: 40,
    totalItems: 0,
    loadingBooks: true,
    portionSize: 5,
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
                case SET_TOTAL_ITEMS:
                    return {
                        ...state,
                        totalItems: action.totalItems
                    }
                    case SET_CURRENT_PAGE:
                        return {
                            ...state,
                            currentPage: action.currentPage
                        }
                        case SET_SEARCH_NAME:
                            return {
                                ...state,
                                searchName: action.searchName
                            }
                            case SET_START_INDEX:
                                return {
                                    ...state,
                                    startIndex: action.startIndex
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

export const setTotalItems = (totalItems) => {
    return {
        type: SET_TOTAL_ITEMS,
        totalItems
    }
}

export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
};


export const setSearchName = (searchName) => {
    return {
        type: SET_SEARCH_NAME,
        searchName
    }
}

export const setStartIndex = (startIndex) => {
    return {
        type: SET_START_INDEX,
        startIndex
    }
}



export const getBooks = (search, startIndex = 0) => {
    return async (dispatch) => {
        dispatch(setStartIndex(startIndex))
        dispatch(setSearchName(search))
        const data = await booksApi.getBooks(search, startIndex)
        if (data.status === 200) {
            dispatch(setBooks(data.data.items))
            dispatch(setTotalItems(data.data.totalItems))

        }

    }
}

export const getcurrentPage = (currentPage) => {
    return (dispatch) => {
        dispatch(setCurrentPage(currentPage))

    }
}












export default serchBooksReducers