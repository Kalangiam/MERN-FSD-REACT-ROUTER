import React from 'react'
import { Link } from 'react-router-dom'


function Course() {
    return (

        <div className='course'>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark ">
                <div className='container-fluid'>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="coursenav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link mx-sm-2 active" to="/ml">Machine Learning</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mx-sm-2 active" to="/fs">Full Stack Web Development</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mx-sm-2 active" to="/ai">Artificial Intelligence</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        </div>
     




    )
}

export default Course