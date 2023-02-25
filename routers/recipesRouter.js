const router=require('express').Router();
const recipes=require('../models/recipe/recipeModel')

router.get('/',async (req,res)=>{
    try{
    let recipe=await recipes.find();
    res.send(recipe);
    }catch(e){
        res.status(500).send(e)
    }
})

router.get('/search',async (req,res)=>{
    try{
    const query=req.query.q;
    console.log(query);
    const result=await recipes.find(
        {title: {$regex: `${query}`, $options: 'i'}},
        );
    res.send(result)
    }catch(e){
        res.status(500).send(e);
    }
})

module.exports=router;