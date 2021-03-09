import Axios from "axios"
import { LURE_DETAILS_REQUEST, LURE_DETAILS_SUCCESS, LURE_DETAILS_FAIL, LURE_LIST_FAIL, LURE_LIST_REQUEST, LURE_LIST_SUCCESS } from "../constant/lureConstant"

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

export const lureDetails = (lureId) => async(dispatch) => {
    dispatch({ type: LURE_DETAILS_REQUEST, payload: lureId})
    try {
        const {data} = Axios.get(`/api/lures/${lureId}`)
        dispatch({type: LURE_DETAILS_SUCCESS, payload: data})
    } catch(error) {
        dispatch({type: LURE_DETAILS_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message})
    }
}