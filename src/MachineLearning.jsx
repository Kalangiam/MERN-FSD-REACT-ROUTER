import React from 'react'
import PropTypes from "prop-types"
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function MachineLearning({ course }) {

    MachineLearning.propTypes = {
        course: {
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired
        }
    }
    return (

        // <div className='col-3 d-flex justify-content-center'>
        //     <div className="card" style={{ width: "18rem" }}>
        //         <img className="card-img-top" src={course.img} alt="Card image cap" />
        //         <div className="card-body">
        //             <h5 className="card-title">{course.title}</h5>
        //             <p className="card-text">enable the creation, manipulation, and utilization of tools, machines, systems, and materials</p>
        //             <Link to={course.link} className="btn btn-primary">Go somewhere</Link>
        //         </div>
        //     </div>
        // </div>

        <Card className='card-container' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={course.img} />
            <Card.Body className='card h-100'>
                <Card.Title>{course.title}</Card.Title>
                <Card.Text>Enable the creation, manipulation, and utilization of tools, machines, systems, and materials
                </Card.Text>
                {/* <Button variant="success">learn more</Button> */}
                <Link to={course.link}className='btn btn-success'>learn more</Link>
            </Card.Body>
        </Card>


    )
}

export default MachineLearning