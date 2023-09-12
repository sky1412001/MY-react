import { useState } from 'react'
import { context } from './context'
export const Wrapper = (props) => {

  const s1 = {
    "name" : "Akash",
    "class" : "5b"
  }
  const [state,setState]= useState(s1);
   const update= () => {
    setTimeout(() => {
      setState({
        "name" : "Manu",
        "class" : "7b"
      },3000)
      
    })
  }
  
  return (
    <context.Provider   value={{state:state,update:update}}>
    
   
    {props.children} 
   
    </context.Provider>
  )
}
export default Wrapper