import React from 'react'
import MachineLearning from './MachineLearning'
import { Outlet } from 'react-router-dom'

function Dashboard() {
    let Machinelearning = [
        {
            id: 1,
            title: "Basic Machine Learning",
            link:"/ml/basicml",
            img:"https://www.smartdatacollective.com/wp-content/uploads/2020/12/machine-learning-advantages.jpg"
        },
        {
            id: 2,
            title: "Advanced ML",
            link:"/ml/advanceml",
            img:"https://www.allbusiness.com/asset/2018/10/machine-learning-300x235.jpg"
        },
        {
            id: 3,
            title: "AWS with ML",
            link:"/ml/awsml",
            img:"https://nasasitebuilder.nasawestprime.com/sciencemsfc/wp-content/uploads/sites/39/2021/10/Machine-Learning.jpg"
        },
        {
            id: 4,
            title: "ML and AI",
            link:"/ml/mlai",
            img:"https://thumbs.dreamstime.com/b/machine-learning-technology-artificial-intelligence-modern-manufacturing-machine-learning-technology-artificial-166726408.jpg"
        },
        {
            id: 5,
            title: "Intermediate ML",
            link:"/ml/intermediateml",
            img:"https://nasasitebuilder.nasawestprime.com/sciencemsfc/wp-content/uploads/sites/39/2021/10/Machine-Learning.jpg"
        },
        {
            id: 6,
            title: "ML for Industry",
            link:"/ml/mlforindustry",
            img:"https://thumbs.dreamstime.com/b/machine-learning-technology-artificial-intelligence-modern-manufacturing-machine-learning-technology-artificial-166726408.jpg"
        },
        {
            id: 7,
            title: "ML for Business",
            link:"/ml/mlforbusines",
            img:"https://www.smartdatacollective.com/wp-content/uploads/2020/12/machine-learning-advantages.jpg"
        },
        {
            id: 8,
            title: "Research in ML",
            link:"/ml/mlresearch",
            img:"https://nasasitebuilder.nasawestprime.com/sciencemsfc/wp-content/uploads/sites/39/2021/10/Machine-Learning.jpg"
        }
    ]

    return (
        <div>
            <div className='row'>
                {
                    Machinelearning.map((course) => (<MachineLearning key={course.id} course={course} />))
                }

            </div>
            <Outlet />
        </div>
    )
}

export default Dashboard