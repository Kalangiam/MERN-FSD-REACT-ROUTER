import React from 'react'
import PropTypes from "prop-types"

function DataScience({ course }) {
    DataScience.propTypes = {
        course: {
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired
        }
    }
    return (

        <div className='col-3'>
            <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{course.title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>

    )
}

export default DataScience