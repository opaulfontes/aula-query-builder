const express = require('express');
const knex = require('./conexao');

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    // conexao.query('select * from agenda where id = $1', [5]);
    //const agenda = await knex('agenda').debug();
    //const agenda = await knex.raw('select * from agenda');
    //const agenda = await knex('agenda').where('id', 5).debug();
    //const agenda = await knex('agenda').where('id', '!=', 5).debug();
    const agenda = await knex('agenda').where({ id: 28, nome: 'Bree Dalton' }).debug();
    return res.json(agenda);
});

app.listen(3000);