import Axios from "axios"
import { LURE_LIST_FAIL, LURE_LIST_REQUEST, LURE_LIST_SUCCESS } from "../constant/lureConstant"

export const listLures = () => async (dispatch) => {
    dispatch({
        type: LURE_LIST_REQUEST
    })
    try {
        const { data } = await Axios.get('/api/lures')
        dispatch({type: LURE_LIST_SUCCESS, payload: data})
    } catch(error){
        dispatch({type: LURE_LIST_FAIL, payload: error.message})
    }
}