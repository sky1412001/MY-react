import React,{useState,useRef,useEffect} from 'react'

const Userefc = () => {
    const[myData,setMyData]=useState("");

    const count = useRef(0);
    console.log(count);
    useEffect(()=>{
        count.current = count.current +1;
    })
  return (
    <div>
    <input
    type='text'
    value={myData}
    onChange={(e)=> setMyData(e.target.value)}
    />
    <p>the counting is {count.current}</p>
      
    </div>
  )
}

export default Userefc
