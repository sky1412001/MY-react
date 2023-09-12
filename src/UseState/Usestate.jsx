import React, { useState } from 'react'
function App(){
    const[data,setdata]=useState(null)
    const[print,setPrint] =useState(false)
    function getData(val){
        console.log(val.target.value)
        setdata(val.target.value)
    }


return (
    
    <div className="App">
    {
        print?
        <h1>{data}</h1>
        : null
    }
   
    <input type="text" onChange={getData}/>
    <button onClick={()=>setPrint(true)}>print</button>
    </div>
    )
}

export default App;


// const Usestate = () => {
    //     const[count,setcounter]=useState(0)
    //     const COUNTS=()=>{
        //         setcounter(count+1)
        
//         <h1>Count {count}</h1>
//         <button onClick={COUNTS}> click</button>
//         <button onClick={Decrease}>decrease</button>
//         <button onClick={RESET}>RESET</button>
// //     }
//     const Decrease =()=>{
//         setcounter(count-1)
//     }
//     const RESET =()=>{
//         setcounter(0)
//     }