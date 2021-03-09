import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Checkbox from '../components/Checkbox'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import { lureStats } from '../actions/lureActions'


export default function LurePage(props) {

    const dispatch = useDispatch()
    const lureId = props.match.params.id

    const lureDetails = useSelector((state) => state.lureDetails)

    const { loading, error, lure} = lureDetails
    

    useEffect(() => {
        dispatch(lureStats(lureId))
    }, [dispatch, lureId])
    
    
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
                            <li>
                                <h3>
                                    {lure.price}
                                </h3>
                            </li>
                            <li>
                                <p>
                                    <div className="do-i-own">
                                        <span style={{marginLeft: 8}}>Do I own?</span>
                                        <input type="checkbox" value={lure.lureBrand} checked="checked" />
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
                                        <div>Fish this Lure has caught:</div>
                                    </div>
                                </li>
                                <br />
                                <li>
                                    "Listed fish would go here"
                                </li>
                                <br />
                                <li>
                                    <button className="primary block">Add Fish</button>
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