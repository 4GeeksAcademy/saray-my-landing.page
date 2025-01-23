import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#FFC0CB' }}>
        <div className="container">
          <a className="navbar-brand" href="#">My Website</a>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home<span className="sr-only"></span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Abouts</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
              <li className="nav-item dropdown"> 
                <a 
                  className="nav-link dropdown-toggle" 
                  href="#" 
                  id="navbarDarkDropdownMenuLink" 
                  role="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                >
                  
                </a>
                <ul 
                  className="dropdown-menu dropdown-menu-dark" 
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <li><a className="dropdown-item" href="#">Home</a></li>
                  <li><a className="dropdown-item" href="#">About</a></li>
                  <li><a className="dropdown-item" href="#">Services</a></li>
                  <li><a className="dropdown-item" href="#">Contact</a></li>

                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;