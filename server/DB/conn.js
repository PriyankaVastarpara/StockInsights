const mongoose = require('mongoose');

const uri =process.env.DATABASE;

mongoose.connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('Connected to database');
}).catch(()=>{
    console.log('Connection failed');
});

