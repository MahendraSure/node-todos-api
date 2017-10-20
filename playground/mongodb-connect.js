const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) return console.log('Unable to connect to MongoDb Server');
    console.log('Connected to MongoDB Server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) return console.log('Unable to insert Todo', err);
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    db.collection('Users').insertOne({
        name: "Mahendra",
        age: 27,
        location: 'Hyderabad'
    }, (err, result) => {
        if (err) return console.log('Unable to insert the document: ', err);
        console.log(JSON.stringify(result.ops, undefined, 2));
    })

    db.close();
})