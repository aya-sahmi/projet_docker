import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Form, ListGroup, Modal, InputGroup, Alert } from 'react-bootstrap';

const ProfessorList = () => {
  const [professors, setProfessors] = useState([]);
  const [newProfessor, setNewProfessor] = useState({ nom: '', email: '' });
  const [editProfessor, setEditProfessor] = useState({ id: null, nom: '', email: '' });
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/api/professors')
      .then(response => {
        console.log(response.data);
        setProfessors(response.data);
      })
      .catch(error => console.error('Erreur lors de la récupération des professeurs:', error));
  }, []);

  const handleAddProfessor = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/professors', newProfessor)
      .then((response) => {
        setProfessors([...professors, response.data]);
        setNewProfessor({ nom: '', email: '' });
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);
      })
      .catch(error => console.error('Erreur lors de l\'ajout du professeur:', error));
  };

  const handleEditProfessor = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/api/professors/${editProfessor.id}`, editProfessor)
      .then((response) => {
        const updatedProfessors = professors.map(professor =>
          professor.id === editProfessor.id ? response.data : professor
        );
        setProfessors(updatedProfessors);
        setEditProfessor({ id: null, nom: '', email: '' });
      })
      .catch(error => console.error('Erreur lors de la mise à jour du professeur:', error));
  };

  const handleDeleteProfessor = (id) => {
    axios.delete(`http://localhost:5000/api/professors/${id}`)
      .then(() => {
        setProfessors(professors.filter(professor => professor.id !== id));
      })
      .catch(error => console.error('Erreur lors de la suppression du professeur:', error));
  };

  return (
    <div>
      <h2>Liste des Professeurs</h2>
      {showAlert && <Alert variant="success">Professeur ajouté avec succès !</Alert>}

      <ListGroup>
        {professors.map(professor => (
          <ListGroup.Item key={professor.id} className="d-flex justify-content-between">
            <div>
              {professor.nom} - {professor.email}
            </div>
            <div>
              <Button variant="warning" onClick={() => setEditProfessor({ id: professor.id, nom: professor.nom, email: professor.email })}>Modifier</Button>
              <Button variant="danger" onClick={() => handleDeleteProfessor(professor.id)}>Supprimer</Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <h3>Ajouter un Professeur</h3>
      <Form onSubmit={handleAddProfessor}>
        <InputGroup className="mb-3">
          <Form.Control
            type="text"
            placeholder="Nom"
            value={newProfessor.nom}
            onChange={(e) => setNewProfessor({ ...newProfessor, nom: e.target.value })}
            required
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <Form.Control
            type="email"
            placeholder="Email"
            value={newProfessor.email}
            onChange={(e) => setNewProfessor({ ...newProfessor, email: e.target.value })}
            required
          />
        </InputGroup>
        <Button variant="primary" type="submit">Ajouter</Button>
      </Form>

      {editProfessor.id && (
        <Modal show={true} onHide={() => setEditProfessor({ id: null, name: '', email: '' })}>
          <Modal.Header closeButton>
            <Modal.Title>Modifier un Professeur</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleEditProfessor}>
              <Form.Group controlId="editName">
                <Form.Label>Nom</Form.Label>
                <Form.Control
                  type="text"
                  value={editProfessor.nom}
                  onChange={(e) => setEditProfessor({ ...editProfessor, nom: e.target.value })}
                  required
                />
              </Form.Group>
              <Form.Group controlId="editEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  value={editProfessor.email}
                  onChange={(e) => setEditProfessor({ ...editProfessor, email: e.target.value })}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit">Modifier</Button>
            </Form>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default ProfessorList;
