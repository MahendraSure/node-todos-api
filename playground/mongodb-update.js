const {MongoClient, ObjectID}  = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err) return console.log('Unable to connect to MongoDB Server');
    console.log('Connected to MongoDB server');
 
    db.collection('Users').findOneAndUpdate({_id:ObjectID("59e989dc26bd971eace410d3")},{
        $set:{
        name:'Andrew'
        },
        $inc:{
        age:1
    
    }
    },{
        returnOriginal:false
    }
    ).then((res) =>{
        console.log(res);
    })
//findOneAndUpdate
//    db.collection('Todos').findOneAndUpdate({_id:ObjectID("59e988f9f44ae098a0112564")},{$set:{
//        completed:false
//    }},{
//        returnOriginal:false
//    }).then((result)=>{
//        console.log(result);
//    })

})