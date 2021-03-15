import { LIVEWELL_ADD_FISH } from "../constant/livewellConstant";

export const livewellReducer = (state = {livewellFish:[]}, action) => {
    switch(action.type) {
        case LIVEWELL_ADD_FISH:
            const fish = action.payload
            return {
                ...state, livewellFish: [...state.livewellFish, fish]
            }

        default:
            return state 
    }
}