import React from 'react'
import AI from './AI'


function ArtificicalIntelligence() {
    
  let Ai = [
    {
      id: 1,
      title: "Basics in AI",
      img:"https://miro.medium.com/v2/resize:fit:900/1*lhXnMEI22BarZkdzsv054Q.jpeg",
      link:"/ai/basicai"
    },
    {
      id: 2,
      title: "Advanced AI",
      img:"https://wallpaperaccess.com/full/1398313.jpg",
      link:"/ai/advancedai"
    },
    {
      id: 1,
      title: "AI with Python",
      img:"https://www.cxoinsightme.com/wp-content/uploads/2020/07/AI_shutterstock_1722492775-scaled.jpg",
      link:"/ai/aiwithpython"
    },
    {
      id: 2,
      title: "TensorFlow",
      img:"https://statnano.com/resource/news/files/images/21/2/thumbnail_7d6f4dbe5936c4c10cfd4281cf9ec4db.jpg",
      link:"/ai/tensorflow"
    }
  ]
  return (
    <div className='row'>
        {
            Ai.map((course)=>(<AI key ={course.id} course ={course}/>))
        }
    </div>
  )
}

export default ArtificicalIntelligence