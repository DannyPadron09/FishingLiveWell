import React from 'react'
import Lure from '../components/Lure'
import data from '../data'

export default function LurePage(props) {


    const lure = data.lures.find(x => x._id === props.match.params.id)
    
    // If lure doesn't exist 
    if(!lure) {
        return <div>Product Not Found</div>
    }

    return (
        <div>
            <div className="row top">
                <div className="lure-picture">
                    <img className="large" src={lure.lureImage} alt={lure.lureBrand} />
                </div>
                <div className="lure-stats">
                   <ul>
                       <li>
                           <h1>
                               {lure.lureBrand}
                           </h1>
                       </li>
                       <li>
                           <h2>
                               {lure.product}
                           </h2>
                       </li>
                       <li>
                           <h3>
                               Color - {lure.lureColor}
                           </h3>
                       </li>
                       <li>
                           <h3>
                               {lure.price}
                           </h3>
                       </li>
                       <li>
                           <p>
                               Do I own? (checkboxes)
                           </p>
                       </li>
                       <li>
                           Fish Stats: <span>Fish Caught</span>
                       </li>
                   </ul>
                </div>
                <div className="add-lure">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>Did I purchase?</div>
                                </div>
                            </li>
                            <li>
                                <button className="primary block">Add to Tackle Box</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}