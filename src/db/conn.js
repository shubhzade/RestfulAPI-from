const mongoose =require("mongoose")
mongoose.connect("mongodb://localhost:27017/shubh-registration",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log(`connectiioon succesful`)
}).catch((e)=>{
    console.log(`no connection`)
})

