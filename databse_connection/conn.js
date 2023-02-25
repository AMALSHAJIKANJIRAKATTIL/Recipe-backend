const mongoose=require('mongoose');


mongoose.set('strictQuery', false);


const dbconnect=async ()=>{
    mongoose.connect(process.env.DB_URI,{ useNewUrlParser: true });
    mongoose.connection.on('connected',()=>{console.log(`Database connected!!!`);} )
    mongoose.connection.on('error',(e)=>console.log(e));
    mongoose.connection.on('disconnect',()=>console.log("-----Database Disconnected!!------"))
}

module.exports= dbconnect;
