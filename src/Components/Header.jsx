import React from 'react'
import logo from '../images/logo.svg'



const Header = () => {
    return (
        <div>
          <div className="container-fluid contenedor-1">
              <header className="container header">
                   <div className="col-md-6 logo">
                       <img src={logo} alt=""/>
                   </div>

                   <div className="col-md-6 menu">
                        <a href=""><span>About</span></a>
                        <a href=""><span>Careers</span></a>
                        <a href=""><span>Events</span></a>
                        <a href=""><span>Products</span></a>
                        <a href=""><span>Support</span></a>
                   </div>
              </header>

              <div className="texto-1">
                  <h1>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
              </div>
          </div>
        </div>
    )
}

export default Header
