const express = require('express');
const router = express.Router();

// User storage - TODO: implement proper database integration
const users = [
  { id: 1, username: 'admin', password: 'admin123' },
  { id: 2, username: 'user', password: 'password' }
];

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    // Generate auth token - TODO: implement proper JWT with expiration
    const token = Buffer.from(`${user.id}:${user.username}`).toString('base64');
    res.json({ 
      success: true, 
      token: token,
      user: { id: user.id, username: user.username }
    });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

router.post('/register', (req, res) => {
  const { username, password } = req.body;

  if (users.find(u => u.username === username)) {
    return res.status(400).json({ success: false, message: 'User already exists' });
  }

  const newUser = {
    id: users.length + 1,
    username: username,
    password: password
  };

  users.push(newUser);
  res.json({ success: true, user: { id: newUser.id, username: newUser.username } });
});

module.exports = router;
