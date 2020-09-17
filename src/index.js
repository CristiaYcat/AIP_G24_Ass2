const sqlite3 = require("sqlite3").verbose();

//open database in memory
let db = new sqlite3.Database(
  "./app/database/newTest.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Connected to the test database.");
  }
);

db.serialize(() => {
  db.each(`SELECT * FROM students`, (err, row) => {
    if (err) {
      console.error(err.message);
    }
    console.log(
      row.id + "\t" + row.firstName + "\t" + row.lastName + "\t" + row.score
    );
  });
});

//close the database connection
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Close the database connection.");
});
