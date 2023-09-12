import React from 'react'

const Usetestt = () => {
let loggedIn=4
  return (
    
    <div>
    {loggedIn===1?
    <h1>USER1</h1>
    :loggedIn===2?<h1>user2</h1>
    :loggedIn===3?<h1>user3</h1>
    :<h1>user4</h1>}
      
    </div>
  )
}

export default Usetestt
