import { LURE_DETAILS_FAIL, LURE_DETAILS_REQUEST, LURE_DETAILS_SUCCESS, LURE_LIST_FAIL, LURE_LIST_REQUEST, LURE_LIST_SUCCESS } from "../constant/lureConstant"

export const lureListReducer = (state = {loading: true, lures:[]}, action) => {

    switch(action.type){

        case LURE_LIST_REQUEST:
            return {loading: true}
        
        case LURE_LIST_SUCCESS:
            return {loading: false, lures: action.payload}

        case LURE_LIST_FAIL:
            return {loading: false, error: action.payload}

        default: 
            return state 
    }
} 

export const lureDetailsReducer = (state = { lure: {}, loading: true}, action) => {
    switch (action.type) {
        case LURE_DETAILS_REQUEST:
            return { loading: true}

        case LURE_DETAILS_SUCCESS:
            return { loading: false, lure: action.payload}

        case LURE_DETAILS_FAIL: 
            return { loading: false, error: action.payload}

        default: 
            return state 
    }
}