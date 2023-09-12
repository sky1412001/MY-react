import React from 'react'
import Folder2 from './Folder2'

const Folder1 = ({name,age,city,course,Mobile}) => {
  return (
    <div>
    <Folder2 
    name={name} 
    age={age}
    city={city}
    course={course}
    Mobile={Mobile}
    />

      
    </div>
  )
}

export default Folder1
