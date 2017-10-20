const {MongoClient, ObjectID}  = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err) return console.log('Unable to connect to MongoDB Server');
    console.log('Connected to MongoDB server');
    
//    db.collection('Users').deleteMany({name:'Mahendra'});
    
    db.collection('Users').findOneAndDelete({
        _id: ObjectID("59e980008837111bd4ddb86c")
    }).then((result) =>{
        console.log(JSON.stringify(result, undefined, 2));
    })
    
    
//    db.collection('Users').find({name:"Mahendra"}).toArray().then((docs)=>{
//        console.log(JSON.stringify(docs, undefined, 2));
//    }, (err) =>{
//        console.log('Unable to fetch data from Users collection');
//    })
//    
    
//    db.collection('Todos').find({_id:ObjectID("59e988f9f44ae098a0112564")}).toArray().then((docs) =>{
//        console.log('Todos');
//        console.log(JSON.stringify(docs, undefined, 2));
//    }, (err)=>{
//        console.log('Unable to fetch Todos: ', err);
//    })
    
    //db.close();
})