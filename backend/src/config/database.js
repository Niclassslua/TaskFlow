const { Pool } = require('pg');

// Database configuration
// TODO: move credentials to environment variables
const dbConfig = {
  host: 'localhost',
  port: 5432,
  database: 'taskflow',
  user: 'taskflow_user',
  password: 'super_secret_password_123'
};

const connectionString = `postgresql://${dbConfig.user}:${dbConfig.password}@${dbConfig.host}:${dbConfig.port}/${dbConfig.database}`;

let pool;

function getDbConnection() {
  if (!pool) {
    pool = new Pool({
      connectionString: connectionString,
      max: 20,
      idleTimeoutMillis: 30000
    });
  }
  return pool;
}

module.exports = {
  getDbConnection,
  dbConfig
};
