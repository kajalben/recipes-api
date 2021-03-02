const express = require('express');
const { Pool } = require('pg');
const pool = new Pool();
const recipesRouter = express.Router();

recipesRouter.get('/', (req, res) =>{
    pool.query('SELECT * FROM recipes')
    .then(data => res.json(data.rows))
    .catch( e => res.sendStatus(404));
})



module.exports = recipesRouter;