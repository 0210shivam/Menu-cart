import React from 'react';
import { useBusiness } from '../contexts/BusinessDetails';
import { Link } from 'react-router-dom';

const Footer = () => {
    const { company_name, link_name, address, city, phone, email } = useBusiness();

    return (
        <div style={{ marginTop: '50px' }}>
            <hr />
            <footer className="text-center text-lg-start bg-body-tertiary text-muted">
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-5 col-lg-5 col-xl-3 mr-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    {company_name}
                                </h6>
                                <p><i className="fas fa-home me-3" />
                                    {address}
                                </p>
                                <p>
                                    {city}
                                </p>
                            </div>
                            {/* <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                                <p>
                                    <a href="#!" className="text-reset">
                                        Angular
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">
                                        React
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">
                                        Vue
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">
                                        Laravel
                                    </a>
                                </p>
                            </div> */}
                            {/* <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                                <p>
                                    <a href="#!" className="text-reset">
                                        Pricing
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">
                                        Settings
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">
                                        Orders
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">
                                        Help
                                    </a>
                                </p>
                            </div> */}
                            <div className="col-md-4 col-lg-5 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                {/* <p>
                                    <i className="fas fa-home me-3" /> New York, NY 10012, US
                                </p> */}
                                <p>
                                    <i className="fas fa-envelope me-3" />
                                    {email}
                                </p>
                                <p>
                                    <i className="fas fa-phone me-3" /> +91 {phone}
                                </p>
                                {/* <p>
                                    <i className="fas fa-print me-3" /> + 01 234 567 89
                                </p> */}
                            </div>
                        </div>
                    </div>
                </section>
                <div
                    className="text-center p-4"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
                >
                    © 2021 Copyright:
                    <Link className="text-reset fw-bold" to="/">
                        Example.com
                    </Link>
                </div>
            </footer>
        </div>

    );
};

export default Footer;
