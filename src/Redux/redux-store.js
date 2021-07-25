import {
    applyMiddleware
} from "redux";
import {
    combineReducers,
    createStore
} from "redux";
import thunkMiddleware from 'redux-thunk'
import serchBooksReducers from "./searchBooks-reducer";


let reducers = combineReducers({
    serchBooksPage: serchBooksReducers
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;