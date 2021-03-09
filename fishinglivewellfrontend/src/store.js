import data from "./data"
import {createStore} from 'redux'

const initialState = {}

const reducer = (state, action) => {
    return {lures: data.lures}
}

const store = createStore(reducer, initialState)

export default store 
