import React ,{ useState } from 'react'
function App(){
  const[count,setCounter]=useState(0)
  const  COUNT =() =>{
    if(count === 0){
    setCounter(count+1)
    }
    else{
      setCounter(count-1)
    }
  }
  

  return (
    <div>
    <h1>{count}</h1>
    <button onClick={COUNT}>toggle🚀</button>
      
    </div>
  )
}

export default App;
