import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('./serviceDetails.json')
            .then(res => res?.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className="container">
                <br />
                <h1>Our Services</h1>
                <br />
                <Row xs={1} md={3} className="g-4">
                    {
                        services.map(service => <ServiceDetails
                            key={service?.serviceId}
                            service={service}
                        ></ServiceDetails>)
                    }
                </Row>
            </div>

        </div>
    );
};

export default Services;