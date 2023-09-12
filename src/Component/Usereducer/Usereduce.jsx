import React, { useState,useReducer } from 'react'
const intialState ={
  firstname:' ',
  lastname:' '  
}
const reducer = (state,action)=>{
  switch(action.type) {
    case 'ADD_DATA' : 
    return {
      ...state,
      data: [...state.data,action.payload]
    };
    default:
      return state;
  }      
  };
  const Usereduce = () =>{
    const [inputValues,setInputvalues]=useState('');
    const[,dispatch]= useReducer(reducer ,intialState);

    const handleInput = (event) => {
      setInputvalues(event.target.value);
    };
    const handleInputData =() => {
      dispatch({type:'ADD_DATA',playload:inputValues});
      setInputvalues({
        firstname:'',
        lastname:''
      });
    };
   

 return(
  <div className='App'>
  <input type="text" value={inputValues} onChange={handleInput} placeholder="enter your fname" />
  <input type="text" value={inputValues} onChange={handleInput} placeholder="enter your lname" />
  <button onClick={handleInputData}>Add data</button>

  <table>
  <thead>
  <th>firstname</th>
  </thead>
  <tbody>
  {((data, index)=>{
    <tr key={index}>
    <td>{data.firstname}</td>
    <td>{data.lastname}</td>
    </tr>
  })}
  </tbody>
  </table>
  </div>

 )
};
export default Usereduce
