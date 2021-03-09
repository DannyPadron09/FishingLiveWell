import {createStore, compose, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import { lureDetailsReducer, lureListReducer } from "./reducers/lureReducer"

const initialState = {}

const reducer = combineReducers({
    lureList: lureListReducer,
    lureDetails: lureDetailsReducer, 
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose 

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))

export default store 
