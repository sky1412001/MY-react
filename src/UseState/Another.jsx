import React, { useState } from 'react'

const Another = () => {
    const [name,setName]=useState("") 
    const [myid,setMyid]=useState("") 
    const [selection,setSelction]=useState("")
    const [tnc,setTnc]=useState(false) 
     
    function getdata(e) {

        console.log(name, myid, selection, tnc)
        e.preventDefault();
    }
  return (
    <div>
    <form >
    <input  type="text" placeholder='enter your name' onChange={(e)=>setName(e.target.value)} /><br /> <br />
    <input   type="text" placeholder='enter your id' onChange={(e)=>setMyid(e.target.value)} /><br /><br />
    <select onChange={(e)=>setSelction(e.target.value)}>
    <option>Top</option>
    <option>right</option>
    <option>bottom</option>
    <option>left</option>
    </select>
    <br />
    <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)} /><span>terms & Condition</span>
    </form>
     <button onClick={getdata}>Submit</button> 
    </div>
  )
}

export default Another
