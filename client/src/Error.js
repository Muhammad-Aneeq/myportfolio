import React from 'react'
import error from "./images/error.jpg"

const Error = () => {
  return (
    <div>
      <figure style={{textAlign:"center"}}>
        <img src={error} alt="error" style={{width:"100vh"}} />
      </figure>
    </div>
  )
}

export default Error
