import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export default function Lure(props) {

    const { lure } = props


    return (
        <div key={lure._id} className="card">
            <Link to={`/lure/${lure._id}`}>
                <img className="medium" src={lure.lureImage} alt={lure.product} />
            </Link>
            <div className="card-body">
                <Link to={`/lure/${lure._id}`}>
                    <h2>{lure.lureBrand}</h2>
                    <h3>{lure.product}</h3>
                    <h3>{lure.lureColor}</h3>
                </Link>
            </div>
        </div>
    )
}