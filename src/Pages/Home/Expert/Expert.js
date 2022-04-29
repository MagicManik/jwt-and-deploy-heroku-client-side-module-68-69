import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Expert = ({ expert }) => {
    // console.log(expert)
    const { img, name, price, description } = expert;

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
                    <Link to={'/checkout'}><button className='btn btn-primary'>Checkout</button></Link>
                </Card.Footer>
            </Card>
        </CardGroup>
    );
};

export default Expert;