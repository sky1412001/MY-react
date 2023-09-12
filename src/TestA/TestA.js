import React, { useContext } from 'react'
import { context } from '../context/context'


const TestA = () => {
    const data=useContext(context)
  return (
    <div>
     <h1>lives in {data.address}</h1> 
     <h1>my mobile no is{data.Phoneno}</h1>
     <h2>Cousrse:{data.Course}</h2>
    </div>
  )
}
export  default TestA
