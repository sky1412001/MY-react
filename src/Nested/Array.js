import React from 'react'
import {Table} from 'react-bootstrap'

const Array = () => {
    const user = [
        {name: "Akash" , email: "akash@gmail.com" , address: [{houseno:"123" ,city:"Delhi"}]},
        {name: "Abhi" , email: "abhi@gmail.com" , address:[{houseno:"124", city:"Noida"}]},
        {name: "Aman" , email: "aman@gmail.com" , address: [{houseno:"125", city:"Gurugram"}]}
    ]
  return (
    <div>
    <Table variant="" striped>
    <tbody>
    <td>name</td>
    <td>email</td>
    <td>Address</td>
    </tbody>
    {
        user.map((item)=>
        <tr>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{
            item.address.map((data)=>
            <tr>
            <td>{data.houseno}</td>
            <td>{data.city}</td>
            </tr>
            )
        }</td>
        </tr>
        )
    }
    </Table>
    
    </div>
  )
}

export default Array
