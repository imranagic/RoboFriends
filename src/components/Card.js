/*import React from "react";

const Card = () =>{
    return(
        <div>
            <img src="" alt="" />
            <div>
                <h2>
                    Jane Doe 
                </h2>
                <p>jane.doe@gmail.com</p>
            </div>
        </div>
    )
}*/

import React from 'react'
import { useState } from 'react'

function Card({name, email, id}) {
    
  return (
    
    
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?200x200`} alt="robots" />
            <div>
                <h2>
                    {name}
                </h2>
                <p>{email}</p>
            </div>
        </div>
  )
}

export default Card