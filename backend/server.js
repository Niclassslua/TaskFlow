const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./src/routes/auth');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'TaskFlow API' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
