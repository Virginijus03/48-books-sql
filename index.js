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
    console.log('        ');
    // LOGIC BELOW
    const paula = await Author.create(conn, 'Paula', 'Paulaviciute');
    const mike = await Author.create(conn, 'Mike', 'Pukuotas');
    const antoska = await Author.create(conn, 'Antanas', 'Nevidonas');
    console.log(paula);
    console.log(mike);
    console.log(antoska);
    console.log('        ');

    visi = await Author.listAll(conn);
    console.log(visi);
    console.log('        ');

    pagalID = await Author.findById(conn, 2);
    console.log(pagalID);
    console.log('        ');
}

app.init();

module.exports = app;