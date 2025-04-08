import db from '../db.js';

export function createProfessor(req, res) {
    const { nom, email } = req.body;
    const query = 'INSERT INTO professeurs (nom, email) VALUES (?, ?)';

    db.query(query, [nom, email], (err, result) => {
        if (err) {
            return res.status(400).json({ message: err.message });
        }
        res.status(201).json({ id: result.insertId, nom, email });
    });
}


export function getProfessors(req, res) {
    const query = 'SELECT * FROM professeurs';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(400).json({ message: err.message });
        }
        res.status(200).json(results);
    });
}

export function updateProfessor(req, res) {
    const { nom, email } = req.body;
    const query = 'UPDATE professeurs SET nom = ?, email = ? WHERE id = ?';
    db.query(query, [nom, email, req.params.id], (err, result) => {
        if (err) {
            return res.status(400).json({ message: err.message });
        }
        res.status(200).json({ id: req.params.id, nom, email });
    });
}


export function deleteProfessor(req, res) {
    const query = 'DELETE FROM professeurs WHERE id = ?';
    db.query(query, [req.params.id], (err, result) => {
        if (err) {
            return res.status(400).json({ message: err.message });
        }
        res.status(200).json({ message: 'Professor deleted successfully' });
    });
}
