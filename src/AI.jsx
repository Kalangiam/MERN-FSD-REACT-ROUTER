import React from 'react'
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';

function AI({ course }) {

    AI.propTypes = {
        course: {
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired
        }
    }
    return (

        // <div className='col-6 d-flex justify-content-center'>
        //     <div className="card" style={{ width: "18rem" }}>
        //         <img className="card-img-top" src={course.img} alt="Card image cap" />
        //         <div className="card-body">
        //             <h5 className="card-title">{course.title}</h5>
        //             <p className="card-text">Enable the creation, manipulation, and utilization of tools, machines, systems, and materials.</p>
        //             <Link to={course.link} className="btn btn-primary">Go somewhere</Link>
        //         </div>
        //     </div>
        // </div>

        <Card className='card-container' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={course.img} />
        <Card.Body className='card'>
            <Card.Title>{course.title}</Card.Title>
            <Card.Text>Enable the creation, manipulation, and utilization of tools, machines, systems, and materials
            </Card.Text>
            {/* <Button variant="success">learn more</Button> */}
            <Link to={course.link}className='btn btn-success'>learn more</Link>
        </Card.Body>
    </Card>
        
    )
}

export default AI