import { LURE_LIST_FAIL, LURE_LIST_REQUEST, LURE_LIST_SUCCESS } from "../constant/lureConstant"

export const lureListReducer = (state = {lures:[]}, action) => {

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