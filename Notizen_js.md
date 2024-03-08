- guard operator &&
- default operator ||
- add a default value to the parameter in function: add =
- JSON is a syntax that is similar to JS Object Syntax. It is more universal. We use JSON to 1. send data to another computer 2. store data
- compare to JS, JSON (ON stands for object notation) does not support single quotes and functions in Objects. All properties and strings must be surrounded by double quotes.
- JSON.stringigy(JS Object)
- JSON.parse(JSON String)
- localStorage.setItem("name", "value") only supports strings
- objects point to reference
- bei onclick und eventlistener darf functionene keinen runden Klammern haben
- event.stopPropagation() sorgt dafür, dass sich das Event nicht auf übergeordnete Elemente auswirkt
- event.target.closest("div") select eine Ebene höher. Kann zu einer Variable zugewiesen werden um gestyled zu werden. (direkt anhängen nicht möglich)
- element.classList.add("class")
- element.classList.remove("class")
- element.href = "http://..."
- string.charAt(8): select the character at index 8
- string.indexOf("str")
- create API:
  const mysql = require('mysql');
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'myuser',
    password: 'mypassword',
    database: 'myDB'
  })
  connection.connect(err => {
    if (err) throw err;
    connection.query("SELECT \* FROM customers", (error, result) => {
      if (err) throw error;
      console.log(result);
    })
  })
- connection.end(err => {
    if (err) throw err;
    console.log("connection ended!");
  })
- environmental variables:
  require('dotenv').config();
  the process module is also needed, but it is already built-in and does not need to be imported
- host: process.env.HOST
- in file.env:
  HOST = 'localhost';
- insert multiple rows of data into database using query():
  1. parsmeterize the SQL statement (add a ? where we would enter values):
   const mysql = require('mysql');
   const con = mysql.createConnection({
    host: 'host',
    user: 'user',
    password: 'pw',
    database: 'db'
   })
   con.connect(err => {
    if (err) throw err;
    con.query('INSERT INTO customers (name, yearFounded) VALUES ?', (err, result) => {
      if (err) throw err;
      console.log(result)
    })
   })

   2.then store a 2-D array into the 2nd parameter of query():
   con.connect(err => {
    if (err) throw err;
    con.query('INSERT INTO customers (name, yearFounded) VALUES ?',
    [
      ['ABC Company','2001'],
      ['DEF Company','1998'],
      ['GHT Inc','2015']
    ],
    (err, result) => {
      if (err) throw err;
      console.log(result);
    })
   })

   3. Finally, use console.log(result.affectedRows) to check the number of new rows added
- create APIs using router and query(), so that they can perform different actions based on the HTTP method:
  1. use query() in the callback function of the router.get() or router.post():
    router.post('/products', (req, res) => {
      connectinon.query('', (err, result) => {
        if (err) throw err;
        console.log(result)
      })
    })
  2. we can use the body property of the request as the second parameter of query() (instead of the 2-D Array in the last example):
    router.post('/products',(req, res) => {
      connection.query('',req.body, (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send('There is an issue with your request.')
        } else {
          res.status(200).json("{'Rows':" + result.affectedRows+ "}")
        }
      })
    })
  3. use put() function to handle the request with the http PUT method:
    router.put('/products/:id', (req, res) => {
      connection.query('',
      req.body,
      (err, result) => {
        if (error) {
          console.log(error);
          res.status(500).send('There is an issue with your request.');
        } else {
          res.status(200).json("{'Rows':" + result.affectedRows + "}")
        }
      }
      )
    })