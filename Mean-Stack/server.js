const express = require('express');

const app = express();

const {MongoClient}=require("mongodb");
const URL="mongodb://127.0.0.1:27017";

const client=new MongoClient(URL);

app.listen(5100,function(req,res){

    console.log("Marvellous server is started successfully");

});

app.use((req,res,next)=>{

    res.header("Access-Control-Allow-Origin","http://localhost:4200");

    res.header("Access-Control-Allow-Headers","Origin,X-Requested-with,Content-Type,Accept");

    next();
});

app.get('/',MarvellousGet);

function MarvellousGet(req,res)
{
    res.send("Marvellous server is live.");
}



async function getConnection()
{
    let result= await client.connect();
    let db= result.db("Marvellous");
    let collection= db.collection("Batches");
    let res= await collection.find({}).toArray();
    console.log(res);
}

getConnection();

app.get('/getBatches',Marvellousbatches);

async function Marvellousbatches(req,res)
{
    let result= await client.connect();
    let db= result.db("Marvellous");
    let collection= db.collection("Batches");
    let res1= await collection.find({}).toArray();
    res.send(res1);

}


