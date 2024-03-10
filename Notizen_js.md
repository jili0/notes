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
- html : <time id="year"></time>
  js: 
  const year = document.getElementByIc("year");
  const thisYear = newDate.getFullYear();
  year.setAttribute('datetime', thisYear)
  year.textContent = thisYear;
- choose Math.floor() instead of Math.ceil() for generating a random number from 1 to 10, because Math.ceil(Math.random()*10) has a chance of resulting a zero. Math.floor((Math.random()*10)+1) is the way to go!
- Math.floor(Math.random() * 4) generates a random Number from 0 to 3. This method always rounds down and returns the largest integer less than or equal to the given number.
- switch Statement: ___________________________________
  switch ("2") {
    case 1:
      console.log(1)
      break
    case 2: 
      console.log(2)
      break
    case 3:
      console.log(3)
      break
    default:
      console.log("No match")
  }
- Ternary Operator: ___________________________________
  let response = soup ? "yes" : "sorry, we don't have"
  let myGrade = testScore > 89 ? "A"
    :testScore > 79 ? "B"
    :testScore > 69 ? "C"
    :testScore > 59 ? "D"
    :"F"
- let myBoolean = confirm("OK === True \n Cancel === False")
- let neme = prompt('Please enter your name')
  console.log(name)
  console.log(name ?? "you didn't enter your name")››› ?? is knowledge coalescing operator
- name.trim().length ››› trim the white space away
- location.reload() ››› reload the page
- const toProperCase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  }
- myArray.unshift(42)››› add to the front
  myArray.push(42)››› add to the end
  myArray.splice(1,1)
  myArray.split(",")
  myArray.concat(nextArray)››› join 2 arrays into one
  spread operator: newArray = [...ArrayA, ...ArrayB]
  nyArray[0][1]››› access item in nested array
- myObject["item1"] or myObject.item1
- const vehicle = {}
  const trunk = Object.create(vehicle) ››› create truck Object based on the vehicle object
- const band = {}
  console.log(Object.keys(band), Object.values(band))
- for in loop________________________________________
  for (let job in band) { console.log(band[job])} (job is the key name, band is the object name)
- console.log(band.hasOwnProperty("drums")) ››› returns a boolean
- javascript classes _________________________
  class Pizza {
    constructor () {
      this.size = "medium"
      this.crust = "original"
    }
  }
  const myPizza = new Pizza();
  class SpecialtyPizza extends Pizza {
    constructor () {
      super(pizzaSize)
    }
  } ››› superclass = parent class. SpecialtyPizza is a child class of Pizza
  this._size ››› am underscore indicates that they are intended to be private. They should only be modified within the class using the set method, for example.
- #sauce = "traditional" ››› hash indicates a private field
- view1.querySelectAll('div:nth-of-type(2n)')
- evenDivs[0].parentElement.children.childNodes.hasChildNodes().lastChild.lastElementChild.firstChild.firstElementChild.nextSibling.nextElementSibling.previousSibling
- addEventListener('click', functionname, false›››useCapture. default is false) when useCapture is set to true, the event will start from the outermost element and works its way inward
- document.addEventListener("readystatecomplete", (evt) => {
    if (event.target.readyState === "complete") {
      console.log(...)
      initApp()
    }
  })
  const initApp = () => {}
  ››› readystatecomplete =› the dom is loaded
- other events: "mouseover", "mouseout"
- view.classList.add("classPurple")
  view.classList.remove("classPurple")
  view.classList.toggle("classPurple")
- myForm.addEventListener("submit", () => {
    event.preventDefault(); ››› prevent reloading the page by submitting
  })
- event.stopPropagation()
- web storage API___________________________________________
- sessionStorage.setItem("...", myArray)
- localStorage.setItem("...", JSON.stringify())
- localStorage.getItem()
- localStorage.removeItem()
- localStorage.clear()
- localStorage.key(0)
- localStorage.length
- js module______________________________
- <script type="module" src="main.js"></script> ››› 1. we don't need to add defer keyword any more 2. "strict mode" is automatically used
- func 1
  func 2
  func 3
  export default func 1
  export func 2
  export func 3
- import {func1 as ..., func 2} from "./..."
- TypeScript_________________________________________
- a statically typed language. Types are checked at compile time.
- tsc main.ts -W ››› watch for any changes, live reload.
- in build folder: index.html, js folder
- in src folder: main.ts
- tsc --init
- tsconfig.json ››› "rootDir": "./src"; "outDir" : "./buld/js"
- tsc -W
- "target": "es2016"
- "include": ["src"]
- "noEmitOnError": true
- tsc --noEmitOnError -w
- Tuple
- Objects
- interface
- enum
- type Alias
- literal types
- void type of function
- optional parameters
- type assertions/casting
- none-known-assertion: !