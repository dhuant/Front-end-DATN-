import React from 'react';
import { Card, Button, } from 'react-bootstrap';
import {withRouter, Link} from 'react-router-dom'

const EstateMapCard = (props) => {
    const { est } = props;
    const url = `/properties/${est._id}`;
    
    return (
        <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src="/img/properties/properties-1.jpg" style={{ height: '150px', width: '100%' }} />
            <Card.Body>
                <Card.Title>{est.name}</Card.Title>
                <Card.Text>
                    {est.address}
                </Card.Text>
                <Link to= {url} target="_blank">
                <Button variant="primary">Go detail</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default withRouter(EstateMapCard);