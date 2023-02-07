const dbConnect = require('./database.js');
const express = require('express');
const app = express();

app.get('/getdetails',async (req,res)=>{
        let data = await dbConnect();
        let result = await data.find().toArray();
        res.send(result)

    });

    app.listen(8000)