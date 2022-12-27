import React from 'react'
import { Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Display({ header, title, text, theLink }) {
    return (
        <>
            <Card>
                <Card.Header>{header}</Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {text}
                    </Card.Text>
                    <Nav.Link href={theLink}>
                        <Button variant='primary' size='lg'>Get Started</Button>
                    </Nav.Link>
                </Card.Body>
            </Card>
        </>
    )
}
