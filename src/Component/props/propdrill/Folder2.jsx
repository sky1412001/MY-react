import React from 'react'
import Folder3 from './Folder3'

const Folder2 = ({name,age,city,course,Mobile}) => {
  return (
    <div>
      <Folder3 
      name={name} 
      age={age}
      city={city}
      course={course}
      Mobile={Mobile}
      />
    </div>
  )
}

export default Folder2
