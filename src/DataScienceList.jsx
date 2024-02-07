import React from 'react'
import DataScience from './DataScience'

function DataScienceList() {
    
  let Datascience = [
    {
      id: 1,
      title: "Basic Data Science",
    },
    {
      id: 2,
      title: "Advanced Data Science"
    }
  ]
  return (
    <div className='row'>
        {
            Datascience.map((course)=>(<DataScience key={course.id} course={course}/>))
        }
    </div>
  )
}

export default DataScienceList