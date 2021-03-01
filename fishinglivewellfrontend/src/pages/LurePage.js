import React from 'react'
import Lure from '../components/Lure'
import data from '../data'

export default function LurePage(props) {

    const lure = data.lures.find(x => x._id === props.match.params.id)

    return (
        <div>
            <div className="row">
                <div className="lure-picture">
                    <img src={lure.lureImage} alt={lure.lureBrand} />
                </div>
                <div className="lure-stats">

                </div>
                <div className="add-lure">

                </div>
            </div>
        </div>
    )
}