import React from 'react';
import { Row } from 'react-bootstrap';
import "./Footer.css";

const Footer = () => {
    return (
        <div>
            <div className="row footer-container bg-success">

                <Row>
                    <div className="col-md-4">

                        <h3 className="text-white">Home Care BD</h3>
                        <p>Nursing is a profession within the health care sector focused on the care of individuals,families ,and communities so they may attain maintain.</p>

                    </div>
                    <div className="col-md-4 text-center">

                        <h3 className="">Contact Us</h3>
                        <h6> Block A, Mirpur-1, Sector 51, Mirpur, Dhaka </h6>
                        <p>9953393875 / 9996607438</p>
                        <p>Email: homecarebd@gmail.com</p>

                    </div>

                    <div className="col-md-4 text-center d-flex align-items-center">
                        <div>
                            <img className="img-fluid" src="../images/care-1.jpg" alt="" />
                        </div>
                        <div>
                            <h3 className="">24/7 Available</h3>
                            <h6>Our team of professional home nurses and medical attendants is available on-call 24/7 across Lucknow and Kanpur.</h6>
                        </div>




                    </div>
                </Row>


            </div>

        </div>
    );
};

export default Footer;