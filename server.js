const env=require('dotenv');
const connection=require('./databse_connection/conn');
const express=require('express');
const app=express();
const cors=require('cors');

const checkToken = require('./helper/verifytoken');
env.config();
connection();
const bodyParser=require('body-parser')
const registerAndLogin=require('./routers/registerAndLogin')

app.use(bodyParser.urlencoded({ extended: false }))


app.use(bodyParser.json())

// Port
const PORT=5000;

// Model
const recipe=require('./models/recipe/recipeModel')

app.use(cors());


//Routes

app.use('/api/v1',registerAndLogin);


const recipesRoute=require('./routers/recipesRouter');
const recipeRoute=require('./routers/recipeRouter');

app.use('/api/v1/recipes',recipesRoute);


app.use('/api/v1/recipe',recipeRoute);


// Listening...

app.listen(PORT,()=>console.log(`Connected on port ${PORT}`))
