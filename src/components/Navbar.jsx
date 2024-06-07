import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <Link class="navbar-brand" to="#">StudentApp</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="/">AddStudent</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/search">SearchStudent</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/delete">DeleteStudent</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/view">ViewStudent</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar