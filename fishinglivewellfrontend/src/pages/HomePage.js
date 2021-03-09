import React, { useEffect } from 'react'
import Lure from '../components/Lure'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import { useDispatch, useSelector } from 'react-redux'
import { listLures } from '../actions/lureActions'

export default function HomePage() {

    const dispatch = useDispatch()

    const lureList = useSelector( state => state.lureList)

    const { loading, error, lures} = lureList

    useEffect(() => {
        dispatch(listLures())
    }, [])

    return (
        <div>
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
            <div className="row center">
                {
                    lures.map(lure => (
                        <Lure key={lure._id} lure={lure} />
                    ))
                }
            </div> 
            )}
        </div>
    )
}
