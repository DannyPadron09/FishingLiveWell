import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Lure from '../components/Lure'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'

export default function HomePage() {

    const [lures, setLures] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const { data } = await axios.get('/api/lures')
                setLoading(false)
                setLures(data)
            } catch (err) {
                setError(err.message)
                setLoading(false)
            }
        }
        fetchData()
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