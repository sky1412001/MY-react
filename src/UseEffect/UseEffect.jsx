import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [data,setdata]=useState(0) 
    const [count,setCount]=useState(100)
       useEffect(()=>{ 
       console.log("hello")
       },[data])
       useEffect(()=>{ 
        console.log()
        },[count])
       
  return (
    <div>
    <h1>{data}</h1>
    <h1>{count}</h1>
      <button onClick={()=>{setdata(data+1)}}>button1</button><br /><br />
      <button onClick={()=>{setCount(count-1)}}>button2</button>
    </div>
  )
}

export default UseEffect
