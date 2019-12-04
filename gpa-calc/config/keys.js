const db = require('db')

db.connect({
    password: process.env.DB_PASSWORD
})

module.exports = {
    mongoURI: `mongodb+srv://admin:<${password}>@students-xfgfr.mongodb.net/test?retryWrites=true&w=majority`
}