
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

//     db.collection('Todos').insertOne({
//         text:'Something to do',
//         completed:false
//     },(err,result)=>{
// if(err){
//     return console.log('Unable to insert todo',err)
// }

// console.log(JSON.stringify(result.ops,undefined,2))
//     })
db.collection('Users').insertOne({
    name:'nijo',
    age:28,
    location:'Changacherry'
},(err,result)=>{
    if(err){
     return   console.log("Unable to inser User",err)
    }
    console.log(JSON.stringify(result.ops,undefined,2))
})

    client.close();
})