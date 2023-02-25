const router=require('express').Router();
const recipe=require('../models/recipe/recipeModel')


router.post('/',async (req,res)=>{
    try{
    console.log(req.body);

    await recipe.insertMany(req.body);

    res.send("Post");
    }catch(e){
        res.status(500).send(e)
    }
})

router.get('/:id',async (req,res)=>{
    try{
    const id=req.params.id;
    const response=await recipe.findOne({_id : id})
    res.send(response);
    }catch(e){
        res.status(500).send(e)
    }
})

module.exports=router;