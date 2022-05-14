import React from 'react';
import './Headernav.css';
import logo from '../../images/logo.png';
const Headernav = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className='container'>
                    <img className='logo-img' src={logo} alt="" />
                </div>
            </div>
           {/* Navication */}
           <div className='d-flex justify-content-center bg-light'>
            <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
           </div>
        </div>
    );
};

export default Headernav;