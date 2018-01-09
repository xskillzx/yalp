const mysql = require('mysql');

var connection = mysql.createConnection({
    host: '',
    user: '',
    pw: '',
    database: ''
}) 

connection.connect((err, result) => {
    if (err) {
        console.log('error', err)
    } else {
        console.log('result', result)
    }
})

//connection.queries

module.exports = {
    connection
}