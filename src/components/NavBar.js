import React from 'react'
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <nav>
           
                <div>
                    
                  <Link
                  rel="Home"
                  href="https://i.pinimg.com/originals/8f/cf/71/8fcf719bce331fe39d7e31ebf07349f3.jpg"
                   to="/">Home</Link>  

                </div>
                <div>
                    <Link to= "/productlist">Product List</Link>

                </div>
                <div>
                   <Link to="/detail" >Details</Link>
                   </div>
            
        </nav>
    )
}

export default NavBar
