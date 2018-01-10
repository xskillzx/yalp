const db = require('../../database/index.js')
var expect = require('chai').expect


it('getUsers should get all users from our database', function (done) {
    db.getUser({}, (err, result) => {
        if (err) {
            done(err);
            return;
        }
        expect(result[0].id).to.equal(1);
        done();
    });
})

it('postUser adds a new user to our user table', function (done) {
    
    let user = { name: "testName", email: "testEmail", password: "testPassword", username: "testUsername" }

    db.postUser(user, (result) => {
        if (!result) {
            done();
            return;
        }
        expect(result.affectedRows).to.equal(1);
        done();
    })
})

// const postUser = function (user, cb) {
//     //name, email, password, username
//     let query = `INSERT INTO users (name, email, password, username) VALUES (?, ?, ?, ?)`

//     connection.query(query, [user.name, user.email, user.password, user.username], (results, err) => {
//         if (err) {
//             cb(err)
//         } else {
//             cb(null, results)
//         }
//     })
// }