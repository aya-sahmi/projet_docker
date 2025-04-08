import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import professorRoutes from './routes/professorRoutes.js';
import courseRoutes from './routes/courseRoutes.js';

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.use('/api/professors', professorRoutes);
app.use('/api/courses', courseRoutes);

const port = 5000;
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
