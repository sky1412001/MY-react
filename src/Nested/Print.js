import React from 'react'
import User from './Nested/User'

const Print = () => {
    const user = [
        {name: "Akash" , email: "akash@gmail.com" , address: [{houseno:"123" ,city:"Delhi"}]},
        {name: "Abhi" , email: "abhi@gmail.com" , address:[{houseno:"124", city:"Noida"}]},
        {name: "Aman" , email: "aman@gmail.com" , address: [{houseno:"125", city:"Gurugram"}]}
    ]
  return (
    <div>
   
      {
        user.map((item)=>
        {
            return (<h1>
              <User data={item} />
            </h1>
            )
          }
        )
      }
    </div>
  )
}

export default Print
