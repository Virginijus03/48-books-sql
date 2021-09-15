const db = require('./db');
const Author = require('./Author');
const Books = require('./Books');

const app = {}

app.init = async () => {
    // prisijungti prie duomenu bazes
    const conn = await db.init({
        host: 'localhost',
        user: 'root',
        database: 'books',
    });

    // LOGIC BELOW
    const paula = await Author.create(conn, 'Paula', 'Paulaviciute')
    const mike = await Author.create(conn, 'Mike', 'Pukuotas');
    console.log(paula);
    console.log(mike);
}

app.init();

module.exports = app;