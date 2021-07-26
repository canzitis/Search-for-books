import {
    applyMiddleware
} from "redux";
import {
    combineReducers,
    createStore
} from "redux";
import thunkMiddleware from 'redux-thunk'
import PageBooksReducer from "./pageBooks-reducer";
import serchBooksReducers from "./searchBooks-reducer";


let reducers = combineReducers({
    serchBooksPage: serchBooksReducers,
    pageBook: PageBooksReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;