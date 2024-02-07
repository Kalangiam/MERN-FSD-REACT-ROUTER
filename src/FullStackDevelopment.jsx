import React from 'react'
import FullStack from './FullStack'

function FullStackDevelopment() {

    let Fullstack = [
        {
            id: 1,
            title: "MEAN FSD",
            img:"https://swansoftwaresolutions.com/wp-content/uploads/2020/04/05.14.20-Meet-a-Full-Stack-Developer-Vlad-Ryba.jpg",
            link:"/fs/meanfsd"
        },
        {
            id: 2,
            title: "MERN FSD",
            img:"https://www.spec-india.com/wp-content/uploads/2020/06/Full_Stack.png",
            link:"/fs/mernfsd"
        },
        {
            id: 3,
            title: "LAMP SD",
            img:"https://www.spec-india.com/wp-content/uploads/2020/11/What-is-full-stack-developer.png",
            link:"/fs/lampsd"
        },
        {
            id: 4,
            title: "Ruby on Rails",
            img:"https://www.spec-india.com/wp-content/uploads/2020/06/Full_Stack.png",
            link:"/fs/ruby"
        },{
            id: 5,
            title: "Python Django",
            img:"https://www.spec-india.com/wp-content/uploads/2020/11/What-is-full-stack-developer.png",
            link:"/fs/django"
        },
        {
            id: 6,
            title: "ASP.NET",
            img:"https://swansoftwaresolutions.com/wp-content/uploads/2020/04/05.14.20-Meet-a-Full-Stack-Developer-Vlad-Ryba.jpg",
            link:"/fs/asp"
        },
       
    ]
    return (
        <div className='row'>
            {
                Fullstack.map((course) => (<FullStack key={course.id} course={course} />))
            }
        </div>
    )
}

export default FullStackDevelopment