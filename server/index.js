const express = require("express");
const cors = require('cors');

const app = express().use(cors());

const port = 4000;

const sqlite3 = require("sqlite3").verbose();

let result = "";

//open database in memory
let db = new sqlite3.Database("./test.db", sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Connected to the test database.");
});

db.serialize(() => {
  db.each(`SELECT * FROM students`, (err, row) => {
    if (err) {
      console.error(err.message);
    }
    console.log(
      row.id + "\t" + row.firstname + "\t" + row.lastname + "\t" + row.subject + "\t" + row.score
    );
    result += row.subject;
  });
});

//close the database connection
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Close the database connection.");
});

app.get('/result', (_req, res) => {
    res.send({
        result: result
    });
});

// app.post('/result', (_req, res) => {
//     res.send({ result: result, tempstring: tempstring });
// });


app.listen(port, () => console.log(`AIP running on http://localhost: ${port}/result`));