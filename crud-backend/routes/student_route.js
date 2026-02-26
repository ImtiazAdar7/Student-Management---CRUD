const app = require('../app');
const router = require('express').Router();
const {getAllStudents, getOneStudent, addStudent, updateStudent, deleteStudent} = require('../controllers/student_controller');
/**
 * @author Imtiaz Adar
 * @email imtiazadarofficial@gmail.com
 */
router.get('/', getAllStudents);
router.get('/:ID', getOneStudent);
router.post('/', addStudent);
router.put('/:ID', updateStudent);
router.delete('/:ID', deleteStudent);

module.exports = router;