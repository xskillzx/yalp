const db = require('../../database/index.js')

it('connection.connect should connect to our database', function(done) {
    db.connection.connect((err, result) => {
        if (err) {
            done(err);
            return;
        }
        expect(result).to.equal("SQL CONNECTION SUCCESSFUL.")
        done();
    });
})