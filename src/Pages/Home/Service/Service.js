import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({ expert }) => {
    const { _id, img, name, price, description } = expert;

    const navigate = useNavigate();
    const navigateToServiceDetails = id => {
        navigate(`service/${id}`)
    }


    return (
        <CardGroup className='col-lg-4 col-md-6 mb-4'>
            <Card className="card h-100 p-2 rounded border-0 shadow-lg">
                <Card.Img variant="top" className='img-fluid d-block mx-auto rounded' src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <p>Price: {price}</p>
                        <p>{description}</p>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <button onClick={() => navigateToServiceDetails(_id)} className='btn btn-primary'>Book: {name}</button>
                </Card.Footer>
            </Card>
        </CardGroup>
    );
};

export default Service;