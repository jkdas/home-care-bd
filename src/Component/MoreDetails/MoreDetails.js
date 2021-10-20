import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const MoreDetails = () => {
    const { sid } = useParams();
    // full course detail store data in useState
    const [moreDetails, setMoreDetails] = useState([]);
    // Single course detail store data in useState
    const [singleServiceDetail, setSingleServiceDetail] = useState({});

    // coursedetails data load from local json data file
    useEffect(() => {
        fetch('/serviceDetails.json')
            .then(res => res.json())
            .then(data => setMoreDetails(data))
    }, [])
    // find course detail according to course id 
    useEffect(() => {
        const foundSingleServiceDetail = moreDetails?.find(service => service.serviceId === sid)
        setSingleServiceDetail(foundSingleServiceDetail);
    }, [moreDetails])

    return (
        <>
            <div>

                <Container className="my-5">
                    <Row className="d-flex align-items-center justify-content-center">
                        <Col md="7" className="mb-3">
                            <div>
                                <img className="img-fluid" src={singleServiceDetail?.detailImg} alt="" />
                            </div>
                        </Col>
                        <Col md="5">
                            <div className="ms-4 ps-3">
                                <h2>{singleServiceDetail?.serviceName}</h2>
                                <p>{singleServiceDetail?.description}</p>
                            </div>
                        </Col>
                    </Row>





                </Container>
            </div>
        </>
    );
};

export default MoreDetails;