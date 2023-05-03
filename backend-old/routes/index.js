const express = require('express');
const router = express.Router();

require("dotenv").config();

const mysql2 = require('mysql2/promise');

const dbSetting = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  charset: 'utf8',
  multipleStatements: true,	//一度に複数のクエリを実行できる
};

/* GET home page. */
router.get('/', async (req, res, next) => {
  let connection
  try {
    connection = await mysql2.createConnection(dbSetting);
    let sql = `
  		select t1.*
	  	from user as t1
		  ;`
    let params = []
    let [rows, fields] = await connection.query(sql, params);

    sql = `
      insert into user (username) value ("aaaaaaa")
      ;`
    params = []
    [rows, fields] = await connection.query(sql, params);

    const data = {
      title: 'efefef',
      rows,
      fields
    }
    res.render('index', data);
  }
  catch (error) {
    console.error(error);
    throw error;
  }
  finally {
    if (connection) connection.end();
  }
});

router.get('/api/get', async (req, res, next) => {
  let connection
  try {
    connection = await mysql2.createConnection(dbSetting);
    let sql = `
		  select t1.*
		  from user as t1
		  ;`
    let params = []
    let [rows, fields] = await connection.query(sql, params);

    res.send({ rows })
  }
  catch (error) {
    console.error(error);
    throw error;
  }
  finally {
    if (connection) connection.end();
  }
});

router.get('/api/delete/:id', async (req, res, next) => {
  const id = req.params.id
  let connection
  try {
    connection = await mysql2.createConnection(dbSetting);
    let sql = `
		  delete from user
      where id = ?
      limit 1
		  ;`
    let params = [id]
    let [rows] = await connection.query(sql, params);

    res.status(200).send()
  }
  catch (error) {
    console.error(error);
    throw error;
  }
  finally {
    if (connection) connection.end();
  }
});

module.exports = router;