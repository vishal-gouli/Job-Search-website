let express = require('express');



let app = express();

app.get('/',(req,res)=>{
    res.send({success:true,messsage:"successfully readinng the data from the server"});
})

app.listen(6000 , ()=>{
    console.log("server is running at a port : Localhost:5000");
})