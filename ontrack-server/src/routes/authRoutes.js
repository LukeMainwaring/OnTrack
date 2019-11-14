const express = require('express');
const db = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();

// Add a new user
router.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  // TODO: more validation
  if (!email) {
    return res
      .status(422)
      .send({ error: true, message: 'Please provide email' });
  }
  if (!password) {
    return res.status(422).send({ message: 'Please provide password' });
  }

  const sql = 'INSERT INTO users (email, password) VALUE ? ';
  // generate encrypted password before signup
  bcrypt.genSalt(10, (err, salt) => {
    if (err) throw err;
    bcrypt.hash(password, salt, (err, hash) => {
      if (err) throw err;
      const user = [[email, hash]];
      db.query(sql, [user], (error, results, fields) => {
        if (error) throw error;

        const token = jwt.sign({ userId: email }, 'MY_SECRET_KEY');
        res.send({
          message: 'New user has been created successfully.',
          token
        });
      });
    });
  });
});

router.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).send({ error: 'Must provide email and password' });
  }

  db.query(
    'SELECT * FROM users where email=?',
    email,
    (error, results, fields) => {
      if (error) throw error;
      user = results[0];

      // User validation
      if (!user) {
        return res.status(422).send({ error: 'Invalid password or email' });
      }

      bcrypt.compare(password, user.password, function(err, isMatch) {
        if (isMatch) {
          const token = jwt.sign({ userId: user.id }, 'MY_SECRET_KEY');
          res.send({ token });
        } else {
          return res.status(422).send({ error: 'Invalid password or email' });
        }
      });
    }
  );
});

module.exports = router;
