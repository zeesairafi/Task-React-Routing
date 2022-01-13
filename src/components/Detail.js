import React from 'react'
import { Link } from 'react-router-dom'


function Detail() {

    let cookie
    return (
        <Link to="/products">
        <div className="detail">
            {cookie && // if there is cookie show its data 
                <>
                    <h5>{cookie.name}Cookie Name</h5>
                    <img src={cookie.image} alt="cookie" />
                    <p>{cookie.price} KD</p>
                    <p>{cookie.description}Description</p>
                </>}


        </div>
</Link>
    )
}

export default Detail
