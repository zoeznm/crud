const db = require("sqlite3").verbose();
const database = new db.Database("./index.db"); 

//  database.run (
//    "CREATE TABLE matomabo(id integer primary key, name text not null)"
//  )

// const insertStmt = database.prepare("INSERT INTO matomabo (id, name) VALUES (?, ?)");
// insertStmt.run("1234", "alice");
// insertStmt.run("5678", "bob");
// insertStmt.finalize();

database.all("SELECT * FROM matomabo", (err, rows) => {
  if (err) {
    throw err;
  }
  rows.forEach((row) => {
    console.log(`${row.id}: ${row.name}`);
  });
});

const updateStmt = database.prepare("UPDATE matomabo SET name = ? WHERE id = ?");
updateStmt.run("bomi", "1234");
updateStmt.finalize();

const deletStmt = database.prepare("DELETE FROM matomabo WHERE name = ?");
deletStmt.run("bomi");
deletStmt.finalize;

database.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});