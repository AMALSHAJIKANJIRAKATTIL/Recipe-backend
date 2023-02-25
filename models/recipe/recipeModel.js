const mongoose=require('mongoose');
const recipeSchema=new mongoose.Schema({
    title : {type: String, required:true},
    author: {type: String, required:true},
    image: {type: String, required:true},
    ingredients: {type: String, required:true},
    directions: {type: String, required:true}
});

const recipeModel=mongoose.model('recipe',recipeSchema);

module.exports=recipeModel;