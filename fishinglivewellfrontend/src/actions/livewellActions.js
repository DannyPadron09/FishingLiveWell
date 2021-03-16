import Axios from "axios"
import { LIVEWELL_ADD_FISH } from "../constant/livewellConstant"

export const addToLivewell = (lureId, fishCaught) => async(dispatch, getState) => {
    const {data} = await Axios.get(`/api/lures/${lureId}`)
    dispatch({
        type: LIVEWELL_ADD_FISH,
        payload:{
            species: data.species,
            weight: data.weight,
            lure: data._id,
            fishCaught,
        }
    })
    localStorage.setItem('livewellFish', JSON.stringify(getState().fishCaught))
}