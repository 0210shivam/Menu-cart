import React from 'react';
import { useBusiness } from '../contexts/BusinessDetails';
import { Link } from 'react-router-dom';

const Header = () => {
    const { businessLogo, link_name } = useBusiness();

    return (
        <div>
            <div className="container-fluid  px-0">
                <nav className="navbar updated-navbar">
                    <div className="container">
                        <Link to='/' className="navbar-brand">
                            <img
                                style={{ height: '50px' }}
                                src={businessLogo}
                                className="card-img-top"
                                alt="..."
                            />
                        </Link>
                        <div className="d-flex justify-content-center justify-content-lg-between p-4">
                            <Link to="/" className="me-4 text-reset">
                                <i className="fab fa-facebook-f" />
                            </Link>
                            <Link to={link_name} className="me-4 text-reset">
                                <i className="fab fa-instagram" />
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;
