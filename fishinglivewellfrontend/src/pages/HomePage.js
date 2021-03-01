import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Lure from '../components/Lure'

export default function HomePage() {

    const [lures, setLures] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get('/api/lures')
            setLures(data)
        }
        fetchData()
    }, [])

    return (
        <div>
            <div className="row center">
                {
                    lures.map(lure => (
                        <Lure key={lure._id} lure={lure} />
                    ))
                }
            </div> 
        </div>
    )
}