const express = require('express');
const router = express.Router();
const { authenticate } = require('../auth/jwtStrategy');
const { studentValidation } = require('../validate/student');
const {
  getAllStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} = require('../controllers/studentController');

// @route   GET api/students
// @desc    Get all students
// @access  Private
router.get('/', authenticate, getAllStudents);

// @route   POST api/students
// @desc    Add a new student
// @access  Private
router.post('/', authenticate, studentValidation, addStudent);

// @route   PUT api/students/:id
// @desc    Update a student
// @access  Private
router.put('/:id', authenticate, studentValidation, updateStudent);

// @route   DELETE api/students/:id
// @desc    Delete a student
// @access  Private
router.delete('/:id', authenticate, deleteStudent);

module.exports = router;
