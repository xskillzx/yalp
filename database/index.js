const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'yalp'
})

const getUser = function (user, cb) {
    //user obj contain username & pw for authentication
    let query = `SELECT * FROM users`

    connection.query(query, (err, results) => {
        if (err) {
            cb(err)
        } else {
            cb(null, results)
        }
    })
}

const postUser = function (user, cb) {
    let query = `INSERT INTO users (name, email, password, username) VALUES (?, ?, ?, ?)`

    connection.query(query, [user.name, user.email, user.password, user.username], (err, results) => {
        if (err) {
            cb(err, null);
        } else {
            cb(null, results);
        }
        return;
    })
}

//get user by id

const getUserByUsername = function (user, cb) {
    let query = `SELECT * FROM users WHERE users.username = ? AND users.password = ?`

    connection.query(query, [user.username, user.password], (err, results) => {
        if (err) {
            cb(err)
        } else {
            cb(null, results)
        }
    })
}

//get business by id 

const getBusinessById = function (id, cb) {

    let query = `SELECT businesses.name FROM businesses WHERE businesses.id = ${id}`

    connection.query(query, (err, results) => {
        if (err) {
            cb(err)
        } else {
            cb(null, results)
        }
    })
}

//TEST FUNCTION CALLS

// connection.query(`SELECT * from USERS`, (err, results) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(results);
//     }
// })

// postUser({ name: "testName", email: "testEmail", password: "testPassword", username: "testUsername" }, (err, results) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(results)
//     }
// })

// getUserById(1, (err, results) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(results);
//     }
// })

// getBusinessById(1, (err, results) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(results);
//     }
// })


//connection.queries

module.exports = {
    connection,
    getUser,
    postUser,
    getUserByUsername,
    getBusinessById
}