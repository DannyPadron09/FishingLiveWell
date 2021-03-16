import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToLivewell } from '../actions/livewellActions'

export default function FishCaught(props) {
    const lureId = props.match.params.id 
    // const fishCaught = props.location.search
    //     ? Number(props.location.search.split('=')[0])
    //     : 0

    const fishCaught = (props.location.search).slice(12).split('%20').join(' ')

    const dispatch = useDispatch()
    useEffect(() => {
        if (lureId) {
            dispatch(addToLivewell(lureId, fishCaught))
        }
    }, [dispatch, lureId, fishCaught])

    return (
        <div>
            <Link to="/">Back to All Lures</Link>
            <h1>Live Well</h1>
            <p>
                ADD TO LIVEWELL : LureID: {lureId} FishCaught: {fishCaught}
            </p>
        </div>
    )
}