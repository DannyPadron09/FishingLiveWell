import Axios from "axios"
import { LIVEWELL_ADD_FISH } from "../constant/livewellConstant"

export const addToLivewell = (lureId, fishCaught) => async(dispatch, getState) => {
    const {data} = await Axios.get(`/api/lures/${lureId}`)
    dispatch({
        type: LIVEWELL_ADD_FISH,
        payload:{
            species: data.fishCaught.species,
            weight: data.fishCaught.weight,
            lure: data._id,
            fishCaught,
        }
    })
}