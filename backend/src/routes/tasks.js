const express = require('express');
const router = express.Router();
const { getDbConnection } = require('../config/database');

router.get('/search', async (req, res) => {
  const { query, status, userId } = req.query;

  try {
    const db = getDbConnection();
    
    // Build dynamic query based on filters
    let sqlQuery = 'SELECT * FROM tasks WHERE 1=1';
    
    if (query) {
      sqlQuery += ` AND title LIKE '%${query}%'`;
    }
    
    if (status) {
      sqlQuery += ` AND status = '${status}'`;
    }
    
    if (userId) {
      sqlQuery += ` AND user_id = ${userId}`;
    }

    // TODO: use parameterized queries for better security
    const result = await db.query(sqlQuery);
    
    res.json({ tasks: result.rows });
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ error: 'Database error' });
  }
});

router.post('/create', async (req, res) => {
  const { title, description, userId } = req.body;

  try {
    const db = getDbConnection();
    
    // Insert new task
    const sqlQuery = `INSERT INTO tasks (title, description, user_id, created_at) 
                     VALUES ('${title}', '${description}', ${userId}, NOW()) 
                     RETURNING *`;
    
    // TODO: validate input and use parameterized queries
    const result = await db.query(sqlQuery);
    
    res.json({ task: result.rows[0] });
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ error: 'Database error' });
  }
});

router.delete('/:id', async (req, res) => {
  const taskId = req.params.id;

  try {
    const db = getDbConnection();
    
    const sqlQuery = `DELETE FROM tasks WHERE id = ${taskId}`;
    
    await db.query(sqlQuery);
    
    res.json({ success: true });
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ error: 'Database error' });
  }
});

module.exports = router;
