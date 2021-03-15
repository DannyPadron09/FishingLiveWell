import React from 'react'

export default function FishCaught(props) {
    const lureId = props.match.params.id 
    const fishCaught = props.location.search
        ? Number(props.location.search.split('=')[1])
        : 1

    return (
        <div>
            <h1>Live Well</h1>
            <p>
                ADD TO LIVEWELL : LureID: {lureId} FishCaught: {fishCaught}
            </p>
        </div>
    )
}