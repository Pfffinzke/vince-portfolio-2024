import React from 'react'
import './top.css'
import me from '../../assets/Vince.png'


const Top = () => {
  return (
    <>
    
    <div className="container top__container">
        <div className="top__shape">     
        <img src={me} class="me__shape__1" alt="vince"/>
        <div className="me__shape__1__shadow">     
        </div>
        </div>
        
    </div>
    
    </>
         )
}

export default Top