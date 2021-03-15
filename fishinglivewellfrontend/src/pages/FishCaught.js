import React from 'react'
import { Link } from 'react-router-dom'

export default function FishCaught(props) {
    const lureId = props.match.params.id 
    const fishCaught = props.location.search
        ? Number(props.location.search.split('=')[1])
        : 1

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