const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Teacher = require('../models/Teacher');
const config = require('../config');

exports.register = async (req, res) => {
  const { username, password } = req.body;
  try {
    let teacher = await Teacher.findOne({ username });
    if (teacher) {
      return res.status(400).json({ message: 'Username already exists' });
    }
    teacher = new Teacher({
      username,
      password: await bcrypt.hash(password, 10),
    });
    await teacher.save();
    res.json({ message: 'Teacher registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const teacher = await Teacher.findOne({ username });
    if (teacher && await bcrypt.compare(password, teacher.password)) {
      const token = jwt.sign({ id: teacher.id }, config.secretOrKey, { expiresIn: '1h' });
      res.json({ token });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
