import React from 'react'
import { useState } from 'react'
import Callback from './Project/Callback';

const Color = () => {

    const[UIcolor,setUiColor]= useState(null);

    const getColor = (color) =>{
        setUiColor(color);
    };
  return (
    <div>
    <div className='App_color_container'>
    style={{background: `${UIcolor}`}}
    </div>

    <Callback getColor={getColor}/>
    
      
    </div>
  )
}

export default Color
