var mongoose = require('mongoose');

var User = mongoose.model('User', {
    email:{
        type:String,
        required:true,
        trim:true,
        minlength:1
    }
})

//var newUser = new User({
//    email:'mahindra.sure@gmail.com'
//})
//
//newUser.save().then((doc)=>{
//    console.log('Documents saved', doc);
//},(err)=>{
//    console.log('Unable to save the doc', err);
//})


module.exports = {
    User
}