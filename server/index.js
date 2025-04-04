let express = require('express');
let dbconnection = require('./db/db.js')
let cors = require('cors');
// let userroute = require('./routes/rou');
// let authroute = require('./routes/auth.js');
let router = require('./routes/frontendDatarRoutes.js')

let app = express();

app.use(cors());
app.use(express.json({}))
dbconnection();

app.use('/api/userroute',router);
// app.use('/api/authroute',authroute);

app.get('/',(req,res)=>{
    res.send({success:true,message:"reading the data from the backend"});
})

app.listen(7000,()=>{
    console.log("server is running at port localhost:7000")
})