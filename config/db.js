const mongoose = require('mongoose');
//Connect to DataBase

mongoose.connect("mongodb+srv://nader:123456%%%@cluster0.0efzp.mongodb.net/mydbcrud?retryWrites=true&w=majority",
    {useNewUrlParser: true,
       useUnifiedTopology: true},
    ()=>{
        console.log('connected to Database');
    });