const Student = require('../models/Student');

exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.addStudent = async (req, res) => {
  const { name, subject, marks } = req.body;
  try {
    let student = await Student.findOne({ name, subject });
    if (student) {
      student.marks += marks;
      await student.save();
      res.json(student);
    } else {
      student = new Student({
        name,
        subject,
        marks,
      });
      await student.save();
      res.json(student);
    }
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateStudent = async (req, res) => {
  const { id } = req.params;
  const { name, subject, marks } = req.body;
  try {
    const student = await Student.findById(id);
    if (student) {
      student.name = name;
      student.subject = subject;
      student.marks = marks;
      await student.save();
      res.json(student);
    } else {
      res.status(404).json({ message: 'Student not found' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteStudent = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Student.findByIdAndDelete(id);
    if (student) {
      res.json({ message: 'Student deleted successfully' });
    } else {
      res.status(404).json({ message: 'Student not found' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
