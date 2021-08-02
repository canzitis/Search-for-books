import {
    booksApi
} from "../api/api"


const SET_BOOKS = 'GET_BOOKS'
const MODE_ACTIVATION = 'MODE_ACTIVATION'
const SET_TOTAL_ITEMS = 'SET_TOTAL_ITEMS'
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_SEARCH_DATA = "SET_SEARCH_DATA"
const SET_START_INDEX = "SET_START_INDEX"

const instalState = {
    search: null,
    printType: null,
    orderBy: null,
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
                        case SET_SEARCH_DATA:
                            return {
                                ...state,
                                search: action.search,
                                    printType: action.printType,
                                    orderBy: action.orderBy,
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


export const setSearchData = (search, printType, orderBy) => {
    return {
        type: SET_SEARCH_DATA,
        search,
        printType,
        orderBy
    }
}

export const setStartIndex = (startIndex) => {
    return {
        type: SET_START_INDEX,
        startIndex
    }
}



export const getBooks = (startIndex = 0, search, printType, orderBy) => {
    debugger;
    return async (dispatch) => {
        dispatch(setStartIndex(startIndex))
        dispatch(setSearchData(search, printType, orderBy, ))
        dispatch(setmodeActivationBooks())
        const data = await booksApi.getBooks(startIndex, search, printType, orderBy)
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