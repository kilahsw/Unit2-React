import React from 'react'
import { Link, useParams } from 'react-router-dom'


const ShowVideo = () => {
    let {id} = useParams();
    console.log()
    return (
        <div>
            {id}
        </div>
    )
}

export default ShowVideo