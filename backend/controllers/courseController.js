import db from '../db.js';

export function createCourse(req, res) {
    const { titre, description, professeur_id } = req.body;
    const query = 'INSERT INTO cours (titre, description, professeur_id) VALUES (?, ?, ?)';

    db.query(query, [titre, description, professeur_id], (err, result) => {
        if (err) {
        return res.status(400).json({ message: err.message });
        }
        res.status(201).json({ id: result.insertId, titre, description, professeur_id });
    });
}

export function getCourses(req, res) {
    const query = 'SELECT * FROM cours';
    db.query(query, (err, results) => {
        if (err) {
        return res.status(400).json({ message: err.message });
        }
        res.status(200).json(results);
    });
}

export function updateCourse(req, res) {
    const { titre, description, professeur_id } = req.body;
    const query = 'UPDATE cours SET titre = ?, description = ?, professeur_id = ? WHERE id = ?';

    db.query(query, [titre, description, professeur_id, req.params.id], (err, result) => {
        if (err) {
        return res.status(400).json({ message: err.message });
        }
        res.status(200).json({ message: 'Course updated successfully' });
    });
}

export function deleteCourse(req, res) {
    const query = 'DELETE FROM cours WHERE id = ?';

    db.query(query, [req.params.id], (err, result) => {
        if (err) {
        return res.status(400).json({ message: err.message });
        }
        res.status(200).json({ message: 'Course deleted successfully' });
    });
}
