import React, { useContext, useEffect } from 'react'
import { context } from '../context/context'
const Test = () => {
    const a=useContext(context)
    useEffect(() =>{
      a.update();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return (
    <div>
    <h1>my name is {a.state.name}</h1>
    <h1>i read in class {a.state.class}</h1>
    </div>
    )
  }

  export default Test
  
  //  <h1>My name is {data.name} and I read in {data.class}</h1> 
  //  <h1>I am {data.age} year old</h1>