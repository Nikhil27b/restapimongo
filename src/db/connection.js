const db = require("mongoose");

db.connect("mongodb://localhost:27017/students",
{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}
).then((res)=>{
console.log("Database Connected");
}).catch((err)=>{
    console.log("Database Error" + err)
})