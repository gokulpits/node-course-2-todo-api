
// const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj)

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
      return  console.log("Unbale to connect to MongoDB server")
    }

    console.log("connected to MongoDB server");

    const db = client.db('TodoApp')

  db.collection('Users').find({name:'nijo'}).toArray().then((docs)=>{

    console.log("fetch");
    console.log(JSON.stringify(docs,undefined,2))

  },err=>{
      console.log('unable to fetch',err)
  })




    client.close();
})