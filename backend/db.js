import { createConnection } from 'mysql2';

const db = createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gestioncours'
});

db.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données:', err);
    }
    else {
        console.log('Connexion réussie à la base de données MySQL');
    }
});

export default db;
