import React from 'react'
import './hed.css';
function Header() {
    return (
          <div className="head">
              <nav className="navbar navbar-expand-lg navbar-dark bg-success " id="naav">
                         <a className="navbar-brand" href="#">Pop Music</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                         <div className="collapse navbar-collapse " id="navbarSupportedContent" >
                        <ul className="navbar-nav mr-auto"> 
                        <li className="nav-item active " id="nn">
                            <a className="nav-link">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ">Your Song</a>
                        </li>
                        </ul>
                        </div>
                      </nav>
                  
        </div>
    )
}
export default Header;