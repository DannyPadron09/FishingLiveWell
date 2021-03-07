import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import data from '../data'
import Checkbox from '../components/Checkbox'


export default function LurePage(props) {


    const lure = data.lures.find(x => x._id === props.match.params.id)
    const [checked, setCheckbox] = useState(false)

    function handleCheckboxChange(event) {
        this.setState({ checked: event.target.checked })
    }


    // If lure doesn't exist 
    if(!lure) {
        return <div>
                    <Link to='/'>Back to All Lures</Link> <br />
                    Product Not Found
                </div>
    }

    return (
        <div>
            <Link to="/">Back to All Lures</Link>

            <div className="row top">

                {/* Div that handles lure picture*/}
                <div className="lure-picture">
                    <img className="large" src={lure.lureImage} alt={lure.lureBrand} />
                </div>

                {/* Div that handles all info about the individual lure*/}
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
                                <div className="do-i-own">
                                    <span style={{marginLeft: 8}}>Do I own?</span>
                                    <Checkbox checked={checked} onChange={handleCheckboxChange} />
                                </div>
                           </p>
                       </li>
                       <li>
                           Fish Stats: <span>Fish Caught</span>
                       </li>
                   </ul>
                </div>

                {/* The div that keeps the action of adding lure to tackle box*/}
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