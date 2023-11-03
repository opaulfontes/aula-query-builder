const express = require('express');
const knex = require('./conexao');

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    //1 const quantidadeMedicamentos = await knex('farmacia').count();
    //2 const usuarioMaisNovo = await knex('usuarios').min('idade');
    
    //3 const somaCategoria = await knex('farmacia')
    // .select('categoria')
    // .sum('estoque')
    // .whereNotNull('categoria')
    // .groupBy('categoria');

    //4 const categoriaNula = await knex('farmacia').whereNull('categoria').count();

    //5 const quantidadeCategoria = await knex('farmacia')
    // .select('categoria')
    // .count()
    // .whereNotNull('categoria')
    // .groupBy('categoria');

    //6 const quantidadeUsurios = await knex('usuarios')
    // .select('idade')
    // .count()
    // .where('idade', '>=', 18)
    // .groupBy('idade')


    return res.json(quantidadeUsurios);
});

app.listen(3000);