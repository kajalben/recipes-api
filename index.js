require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const recipesRouter = require('./routes/recipeRouter');
const app = express();

const pool = new Pool();

app.use(express.json());

const recipeRouter = require('./routes/recipeRouter');
app.use('/api/recipes', recipeRouter);

app.use(express.static(__dirname + '/public'));

pool.query('SELECT NOW()', (err, res) =>{
    console.log(res.rows[0].now);
})


app.get('/',(req,res)=>{
    res.send('Welcome to recipe Blog backend !')
})

const PORT = process.env.PORT || 3030;

app.listen(PORT,()=>(`Server is running on Port ${PORT}!`));