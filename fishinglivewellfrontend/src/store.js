import {createStore, compose, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import { livewellReducer } from './reducers/livewellReducer'
import { lureDetailsReducer, lureListReducer } from "./reducers/lureReducer"

const initialState = {
    livewellFish: {
        fishCaught: localStorage.getItem('livewellFish')
        ? JSON.parse(localStorage.getItem('livewellFish'))
        : [],
    }
}

const reducer = combineReducers({
    lureList: lureListReducer,
    lureDetails: lureDetailsReducer,
    livewell: livewellReducer, 
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose 

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))

export default store 
