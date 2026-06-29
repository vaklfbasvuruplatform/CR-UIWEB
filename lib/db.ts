import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host:     'mysql-f768acc-mehmetler00000-6177.h.aivencloud.com',
  user:     'avnadmin',
  password: 'AVNS_Jx5S6JQDgCXBWduL6lR',
  database: 'defaultdb',
  port:     18217,
  ssl:      { rejectUnauthorized: false },
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
