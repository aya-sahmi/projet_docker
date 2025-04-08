import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <Container className="text-center">
        <h1>Gestion des Cours</h1>
        <p>Bienvenue sur l'application de gestion des cours. Choisissez une section :</p>
        <Row className="justify-content-center mt-4">
            <Col md={4}>
            <Button variant="primary" size="lg" block as={Link} to="/professors">
                Gérer les Professeurs
            </Button>
            </Col>
            <Col md={4}>
            <Button variant="secondary" size="lg" block as={Link} to="/courses">
                Gérer les Cours
            </Button>
            </Col>
        </Row>
        </Container>
    );
}

export default HomePage;
