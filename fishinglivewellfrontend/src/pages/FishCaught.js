import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToLivewell } from '../actions/livewellActions'
import MessageBox from '../components/MessageBox'

export default function FishCaught(props) {
    const lureId = props.match.params.id 

    const fishCaught = (props.location.search).slice(12)
    const fishSpecies = fishCaught.split('%20').join(' ').split('?')[0]
    const fishWeight = fishCaught.split('?').pop()

    const livewell = useSelector((state) => state.livewell)
    const { livewellFish } = livewell


    const dispatch = useDispatch()
    useEffect(() => {
        if (lureId) {
            dispatch(addToLivewell(lureId, fishCaught))
        }
    }, [dispatch, lureId, fishCaught])

    return (
        <div>
            <Link to="/">Back to All Lures</Link>
            <div className="row top">
                <div className="col-2">
                    <h1>Live Well</h1>
                    {livewellFish.length === 0 ? <MessageBox>
                        Livewell is empty. <Link to="/">Catch some fish!!</Link>
                    </MessageBox>
                    :
                    (
                        <ul>
                            {
                                livewellFish.map((fish) => (
                                    <li key={fish.lure}>
                                        <div className="row">
                                            <div>
                                                <b>Fish Species</b> : {fishSpecies} <b>Weight</b> : {fishWeight} 
                                            </div>
                                            <div className="min-30">
                                                <Link to={`/lure/${fish.lure}`}>{fish.species}</Link>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
}