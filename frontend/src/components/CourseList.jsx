import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Form, ListGroup, Modal, InputGroup, Alert } from 'react-bootstrap';

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({ titre: '', description: '' });
  const [editCourse, setEditCourse] = useState({ id: null, titre: '', description: '' });
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/api/courses')
      .then(response => setCourses(response.data))
      .catch(error => console.error('Erreur lors de la récupération des cours:', error));
  }, []);

  const handleAddCourse = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/courses', newCourse)
      .then(() => {
        setCourses([...courses, newCourse]);
        setNewCourse({ titre: '', description: '' });
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);
      })
      .catch(error => console.error('Erreur lors de l\'ajout du cours:', error));
  };

  const handleEditCourse = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/api/courses/${editCourse.id}`, editCourse)
      .then(() => {
        const updatedCourses = courses.map(course =>
          course.id === editCourse.id ? editCourse : course
        );
        setCourses(updatedCourses);
        setEditCourse({ id: null, titre: '', description: '' });
      })
      .catch(error => console.error('Erreur lors de la mise à jour du cours:', error));
  };

  const handleDeleteCourse = (id) => {
    axios.delete(`http://localhost:5000/api/courses/${id}`)
      .then(() => {
        setCourses(courses.filter(course => course.id !== id));
      })
      .catch(error => console.error('Erreur lors de la suppression du cours:', error));
  };

  return (
    <div>
      <h2>Liste des Cours</h2>
      {showAlert && <Alert variant="success">Cours ajouté avec succès !</Alert>}

      <ListGroup>
        {courses.map(course => (
          <ListGroup.Item key={course.id} className="d-flex justify-content-between">
            <div>
              {course.titre} - {course.description}
            </div>
            <div>
              <Button variant="warning" onClick={() => setEditCourse({ id: course.id, titre: course.titre, description: course.description })}>Modifier</Button>
              <Button variant="danger" onClick={() => handleDeleteCourse(course.id)}>Supprimer</Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <h3>Ajouter un Cours</h3>
      <Form onSubmit={handleAddCourse}>
        <InputGroup className="mb-3">
          <Form.Control
            type="text"
            placeholder="Titre"
            value={newCourse.titre}
            onChange={(e) => setNewCourse({ ...newCourse, titre: e.target.value })}
            required
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <Form.Control
            type="text"
            placeholder="Description"
            value={newCourse.description}
            onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
            required
          />
        </InputGroup>
        <Button variant="primary" type="submit">Ajouter</Button>
      </Form>

      {editCourse.id && (
        <Modal show={true} onHide={() => setEditCourse({ id: null, titre: '', description: '' })}>
          <Modal.Header closeButton>
            <Modal.Title>Modifier un Cours</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleEditCourse}>
              <Form.Group controlId="editTitle">
                <Form.Label>Titre</Form.Label>
                <Form.Control
                  type="text"
                  value={editCourse.titre}
                  onChange={(e) => setEditCourse({ ...editCourse, titre: e.target.value })}
                  required
                />
              </Form.Group>
              <Form.Group controlId="editDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  value={editCourse.description}
                  onChange={(e) => setEditCourse({ ...editCourse, description: e.target.value })}
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

export default CourseList;
