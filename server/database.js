const {MongoClient} = require('mongodb')
const url= 'mongodb://127.0.0.1:27017';
const databaseName='todo'
const client= new MongoClient(url);
const bodyParser = require('body-parser');
const cors = require('cors');


async function dbConnect()
{
    let result = await client.connect();
    db= result.db(databaseName);
    return db.collection('list');
    // let data = await collection.find({}).toArray();
    console.log("connection succesfull")


}
module.exports= dbConnect;

// module.exports= dbConnect;
// dbConnect();

// const fun = async ()=>{
//     let data = await dbConnect();
//     data = await data.find().toArray()
//     console.log(data)
// }
// fun()
