import React from 'react'
import{Link} from "react-router-dom";
//rcep for react Class Export Components With PropTypes
 
const NavBar=()=>{
    return (
      <div>
         <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">NewsApp</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
           <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav me-auto my-2 my-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                  </li>
                  <li className="nav-item"><Link className="nav-link" to="/Business">Business</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/Entertainment">Entertainment</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/General">General</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/Health">Health</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/Science">Science</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/Sports">Sports</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/Technology">Technology</Link></li>       
              </ul>
          </div>
    </div>
</nav>
      </div>
    )
}
export default NavBar
