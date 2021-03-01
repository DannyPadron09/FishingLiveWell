import React from 'react'
import data from '../data'
import Lure from '../components/Lure'

export default function HomePage() {
    return (
        <div>
            <div className="row center">
                {
                    data.lures.map(lure => (
                        <Lure key={lure._id} lure={lure} />
                    ))
                }
            </div> 
        </div>
    )
}