import React from 'react'

export default function Lure(props) {

    const { lure } = props
    return (
        <div key={lure._id} className="card">
            <a href={`/lure/${lure._id}`}>
                <img className="medium" src={lure.lureImage} alt={lure.product} />
            </a>
            <div className="card-body">
                <a href={`/lure/${lure._id}`}>
                    <h2>{lure.lureBrand}</h2>
                    <h3>{lure.product}</h3>
                    <h3>{lure.lureColor}</h3>
                </a>
                <div className="do-i-own">
                    Do I own? <br />
                    <span>Yes<i className="fas fa-check-square"></i></span>
                    <span>No<i className="fas fa-check-square"></i></span>
                </div>
                <div className="price">
                    {lure.price}
                </div>
            </div>
        </div>
    )
}