import { Router } from 'express';
const router = Router();
import { createCourse, getCourses, updateCourse, deleteCourse } from '../controllers/courseController.js';

router.post('/', createCourse);
router.get('/', getCourses);
router.put('/:id', updateCourse);
router.delete('/:id', deleteCourse);

export default router;