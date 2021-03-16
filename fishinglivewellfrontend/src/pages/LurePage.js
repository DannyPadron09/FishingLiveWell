import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { lureStats } from '../actions/lureActions'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import { LIVEWELL_ADD_FISH } from '../constant/livewellConstant'


export default function LurePage(props) {

    const dispatch = useDispatch()
    const lureId = props.match.params.id
    const [fishCaught, setFishSpecies] = useState(0)

    const lureDetails = useSelector((state) => state.lureDetails)

    const { loading, error, lure} = lureDetails
    

    useEffect(() => {
        dispatch(lureStats(lureId))
    }, [dispatch, lureId])

    const addToLiveWell = () => {
        props.history.push(`/livewell/${lureId}?fishCaught=${fishCaught}`)
    }
    
    
    return (
        <div>
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ): (                
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
                        </ul>
                    </div>

                    {/* The div that keeps the action of adding lure to tackle box*/}
                    <div className="add-lure">
                        <div className="card card-body">
                            <ul>
                                <li>
                                    <div className="row">
                                        <div>Add new fish to the LiveWell:</div>
                                        <div>
                                        <form>    
                                            <label>
                                                Fish Caught: 
                                                <input type="text" name="fishCaught" placeholder="Fish Species" onChange={(e) => setFishSpecies(e.target.value)}  />
                                            </label>
                                            <label>
                                                Weight: 
                                                <input type="text" name="fishWeight" placeholder="Fish Weight" />
                                            </label>
                                            <button onClick={addToLiveWell} className="primary block">Add Fish</button>
                                        </form>
                                        </div>
                                    </div>
                                </li>
                                <br />
                                <li>
                                    <div className="row">
                                        <div>
                                            
                                        </div>
                                    </div>
                                </li>
                                <br />
                                <li>
                                    
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}