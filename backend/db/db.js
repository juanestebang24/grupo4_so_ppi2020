const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
  host: 'bxjyrxsjmjhs37wxrygc-mysql.services.clever-cloud.com',
  user: 'uhfeue3micw4psjd',
  password: 'IRtkvYRk9z73uUUEzwP7',
  database: 'bxjyrxsjmjhs37wxrygc',
  multipleStatements: true

    // host:'bz6uvndcnhfr7mavr9f2-mysql.services.clever-cloud.com',
  // user:'ueeuwupkuykeozg6',
  // password:'xOSqBorgS9GXqXcO0gdp',
  // database:'bz6uvndcnhfr7mavr9f2',
  // multipleStatements: true
});
mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('base de datos conectada!');
  }
});

module.exports = mysqlConnection;