import {
    applyMiddleware
} from "redux";
import {
    combineReducers,
    createStore
} from "redux";
import thunkMiddleware from 'redux-thunk'
import pageBooksReducer from "./pageBooks-reducer";
import serchBooksReducers from "./searchBooks-reducer";


let reducers = combineReducers({
    serchBooksPage: serchBooksReducers,
    pageBook: pageBooksReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;