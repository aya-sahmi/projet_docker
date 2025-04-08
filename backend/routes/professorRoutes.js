import { Router } from 'express';
const router = Router();
import { createProfessor, getProfessors, updateProfessor, deleteProfessor } from '../controllers/professorController.js';

router.post('/', createProfessor);
router.get('/', getProfessors);
router.put('/:id', updateProfessor);
router.delete('/:id', deleteProfessor);

export default router;
