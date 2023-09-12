import React from 'react'

const Props = (props) => {
  return (
    <div style={{backgroundColor:"green",margin: 10, textAlign:'center'}}>
<h1>name: {props.name}</h1>

<h1> age: {props.age}</h1>

<h1> email: {props.email}</h1>

<h1>adress: {props.adress}</h1>

    </div>
  )
}

export default Props
